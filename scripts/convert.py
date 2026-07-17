#!/usr/bin/env python3
"""
Convert whale-openapi-docs source data into the Mintlify shape used by
this repo:

  - openapi.{en,cn,zh-hant}.json  (one operation per REST endpoint / JSON file)
  - {lang}/api-reference/data-porter/<slug>.mdx  (one page per data_porter template / TS file)
  - docs.json navigation groups (per business domain, mixing REST + data-porter)

Idempotent: safe to re-run. Existing hand-written MDX pages that already
match a generated slug are overwritten — keep hand edits under a
different filename if you want to preserve them.

Usage:
    python3 scripts/convert.py [--source /path/to/whale-openapi-docs] [--dry-run]
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
from collections import OrderedDict
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

REPO_ROOT = Path(__file__).resolve().parent.parent
DEFAULT_SOURCE = REPO_ROOT.parent / "whale-openapi-docs"
LANGS = [
    # (lang key in docs.json, openapi filename suffix, source name_* key, menu.json name key)
    ("en", "en", "en", "en"),
    ("cn", "cn", "cn", "zh-CN"),
    ("zh-Hant", "zh-hant", "hant", "zh-HK"),
]
LANG_DIRS = {"en": "en", "cn": "cn", "zh-Hant": "zh-hant"}

# ---------------------------------------------------------------------------
# Source discovery
# ---------------------------------------------------------------------------

TOP_DIR_RE = re.compile(r"^(.+?)\s*[\(（](.+?)[\)）]$")


def parse_top_dir(name: str) -> Tuple[str, str]:
    """Return (chinese, english) from a name like '款项管理(Cash Management)'."""
    m = TOP_DIR_RE.match(name)
    if not m:
        return name, name
    return m.group(1).strip(), m.group(2).strip()


def slugify(text: str) -> str:
    text = re.sub(r"[^a-zA-Z0-9]+", "-", text)
    text = text.strip("-").lower()
    return text or "untitled"


def kebab(text: str) -> str:
    return re.sub(r"_+", "-", text)


# ---------------------------------------------------------------------------
# TS template parser
# ---------------------------------------------------------------------------


def parse_ts_template(path: Path) -> Optional[Dict[str, Any]]:
    text = path.read_text(encoding="utf-8")
    lines = text.splitlines()
    while lines and (lines[0].startswith("//") or not lines[0].strip()):
        lines.pop(0)
    body = "\n".join(lines).strip()
    try:
        return json.loads(body)
    except json.JSONDecodeError as e:
        print(f"[warn] failed to parse TS template {path}: {e}", file=sys.stderr)
        return None


# ---------------------------------------------------------------------------
# Mapping loaders
# ---------------------------------------------------------------------------


def load_template_id_to_name(source: Path) -> Dict[str, str]:
    """Return {old_template_id: new_dataset_name}.

    The new `data_porter` API is `POST /v1/datasets/<name>` where `<name>` is
    the *new* dataset name from `templates/template_map.json`. Old TS files
    still key on the legacy `templateId`, so we build a reverse index.

    Precedence: templates/template_map.json (authoritative, 358 entries) →
    tool_name_template_id.json (legacy, 727 entries) → template_map.md.
    """
    mapping: Dict[str, str] = {}

    # Legacy mapping (superset — still useful as fallback).
    legacy = source / "tool_name_template_id.json"
    if legacy.exists():
        for e in json.loads(legacy.read_text(encoding="utf-8")):
            mapping[e["template_id"]] = e["name"]

    # New authoritative map — overrides legacy for the 358 datasets we ship.
    new_map = source / "templates" / "template_map.json"
    if new_map.exists():
        for entry in json.loads(new_map.read_text(encoding="utf-8")):
            new_name = entry.get("name")
            versions = entry.get("versions") or []
            chosen = next((v for v in versions if v.get("default")), versions[0] if versions else None)
            if not chosen or not new_name:
                continue
            mapping[chosen["template_id"]] = new_name

    # Additions from template_map.md (fallback only — doesn't override).
    md_path = source / "template_map.md"
    if md_path.exists():
        for line in md_path.read_text(encoding="utf-8").splitlines():
            if not line.startswith("|"):
                continue
            parts = [p.strip() for p in line.split("|")]
            if len(parts) < 4:
                continue
            name, tid = parts[1], parts[2]
            if not name or not tid or name == "name" or "---" in name:
                continue
            mapping.setdefault(tid, name)

    return mapping


def load_menu(source: Path) -> Dict[str, Dict[str, str]]:
    """Return {module_key: {en, zh-CN, zh-HK}} from menu.json for group titles."""
    m = json.loads((source / "menu.json").read_text(encoding="utf-8"))
    result: Dict[str, Dict[str, str]] = {}
    for menu in m["data"]["menus"]:
        result[menu["key"]] = menu["name"]
    return result


# Map top-level dir English → menu key. Menu keys are language-neutral;
# we match by English name.
TOP_DIR_TO_MENU_KEY = {
    "Account Assets": "portfolio",
    "Cash Management": "atm",
    "Stock Management": "holdings",
    "IPO System": "ipo",
    "Fund Management": "fund",
    "VA Clearing Management": "virtual_asset_management",
    "Day-End Settlement": "charging",
    "Corporate Action": "corporate_action",
    "Risk Control Compliance": "risk",
    "Reports": "report",
    "Broker Management": "broker_management",
    "Accounting": "bookkeeping",
    "Trading Panel": "trade_tool",
    "FD／B2B": "fd_biz",
    "Announcement": "announcement",
    "Service Parameter": "settings",
    "Suspicious Incident Monitoring": "suspicious_incident_monitoring",
    "Shared Components": None,  # no menu entry, kept as a synthetic group
}

# Icons per module (Lucide, matching Mintlify icon library)
MODULE_ICONS = {
    "portfolio": "wallet",
    "atm": "banknote",
    "holdings": "trending-up",
    "ipo": "sparkles",
    "fund": "landmark",
    "virtual_asset_management": "bitcoin",
    "charging": "calculator",
    "corporate_action": "megaphone",
    "risk": "shield",
    "report": "chart-column",
    "broker_management": "users",
    "bookkeeping": "book-open",
    "trade_tool": "chart-candlestick",
    "fd_biz": "briefcase",
    "announcement": "bell",
    "settings": "settings",
    "suspicious_incident_monitoring": "eye",
    "shared": "component",
}


# ---------------------------------------------------------------------------
# JSON (REST) → OpenAPI operation
# ---------------------------------------------------------------------------


def _param_type_to_openapi(t: str) -> Dict[str, Any]:
    t = (t or "string").lower()
    if t in {"int", "integer", "int32", "int64", "number", "long"}:
        return {"type": "integer" if t.startswith("int") else "number"}
    if t in {"bool", "boolean"}:
        return {"type": "boolean"}
    if t in {"float", "double", "decimal"}:
        return {"type": "number"}
    if t == "array":
        return {"type": "array", "items": {"type": "string"}}
    if t == "object":
        return {"type": "object"}
    return {"type": "string"}


def _schema_field_to_openapi(field: Dict[str, Any], lang: str) -> Dict[str, Any]:
    """Convert a whale-openapi-docs response.schema field object into OpenAPI schema."""
    t = (field.get("type") or "string").lower()
    out: Dict[str, Any]
    if t == "array":
        items = field.get("items") or {}
        if isinstance(items, dict) and any(isinstance(v, dict) for v in items.values()):
            # nested object described inline
            props = {}
            for k, v in items.items():
                if isinstance(v, dict):
                    props[k] = _schema_field_to_openapi(v, lang)
            out = {"type": "array", "items": {"type": "object", "properties": props}}
        else:
            out = {"type": "array", "items": _param_type_to_openapi(items.get("type") if isinstance(items, dict) else "string")}
    elif t == "object":
        props = {}
        for k, v in (field.get("properties") or {}).items():
            if isinstance(v, dict):
                props[k] = _schema_field_to_openapi(v, lang)
        out = {"type": "object", "properties": props}
    else:
        out = _param_type_to_openapi(t)
    # description
    desc_parts: List[str] = []
    lang_name_key = {"en": "name_en", "cn": "name_cn", "hant": "name_cn"}[lang]
    if field.get(lang_name_key):
        desc_parts.append(str(field[lang_name_key]))
    if field.get("description"):
        desc_parts.append(str(field["description"]))
    enum = field.get("enum")
    if isinstance(enum, list):
        rendered = []
        for e in enum:
            if isinstance(e, dict):
                k = e.get("key", "")
                label_key = {"en": "en", "cn": "cn", "hant": "cn"}[lang]
                label = e.get(label_key, "")
                rendered.append(f"`{k}` = {label}" if label else f"`{k}`")
        if rendered:
            desc_parts.append("Options: " + "; ".join(rendered))
    if desc_parts:
        out["description"] = ". ".join(desc_parts)
    return out


def _build_response_schema(schema: Dict[str, Any], lang: str) -> Dict[str, Any]:
    if not isinstance(schema, dict) or not schema:
        return {"type": "object"}
    props = {}
    for k, v in schema.items():
        if isinstance(v, dict):
            props[k] = _schema_field_to_openapi(v, lang)
    return {"type": "object", "properties": props}


def _param_description(param: Dict[str, Any], lang: str) -> str:
    parts: List[str] = []
    lang_name_key = {"en": "name_en", "cn": "name_cn", "hant": "name_cn"}[lang]
    if param.get(lang_name_key):
        parts.append(str(param[lang_name_key]))
    if param.get("description"):
        parts.append(str(param["description"]))
    enum = param.get("enum")
    if isinstance(enum, list):
        rendered = []
        for e in enum:
            if isinstance(e, dict):
                k = e.get("key", "")
                label_key = {"en": "en", "cn": "cn", "hant": "cn"}[lang]
                label = e.get(label_key, "")
                rendered.append(f"`{k}` = {label}" if label else f"`{k}`")
        if rendered:
            parts.append("Options: " + "; ".join(rendered))
    return ". ".join(parts)


PATH_PARAM_RE = re.compile(r"\{([a-zA-Z_][a-zA-Z0-9_]*)\}")


def json_to_operation(
    data: Dict[str, Any],
    tag: str,
    lang: str,
) -> Tuple[str, str, Dict[str, Any]]:
    method = (data.get("method") or "POST").lower()
    path = data.get("path") or ""
    # normalise <id> to {id}
    path = re.sub(r"<([^>]+)>", r"{\1}", path)

    lang_name_key = {"en": "name_en", "cn": "name_cn", "hant": "name_cn"}[lang]
    summary = data.get(lang_name_key) or data.get("name_en") or data.get("name_cn") or path
    description_bits = []
    if data.get("summary"):
        description_bits.append(data["summary"])
    resp = data.get("response", {}) or {}
    if resp.get("description"):
        description_bits.append(resp["description"])
    description = "\n\n".join(description_bits)

    parameters: List[Dict[str, Any]] = []
    path_params_in_url = set(PATH_PARAM_RE.findall(path))
    req_params = ((data.get("request") or {}).get("params") or {})

    # Path params → in: path
    for name in path_params_in_url:
        p_def = req_params.get(name) or {"type": "string", "required": True}
        parameters.append({
            "name": name,
            "in": "path",
            "required": True,
            "description": _param_description(p_def, lang) or name,
            "schema": _param_type_to_openapi(p_def.get("type", "string")),
        })

    body_params = {k: v for k, v in req_params.items() if k not in path_params_in_url}

    if method == "get":
        for name, p_def in body_params.items():
            parameters.append({
                "name": name,
                "in": "query",
                "required": bool(p_def.get("required")),
                "description": _param_description(p_def, lang),
                "schema": _param_type_to_openapi(p_def.get("type", "string")),
            })
        request_body = None
    else:
        # Build a JSON body schema
        if body_params:
            props = {}
            required = []
            for name, p_def in body_params.items():
                schema = _param_type_to_openapi(p_def.get("type", "string"))
                desc = _param_description(p_def, lang)
                if desc:
                    schema["description"] = desc
                props[name] = schema
                if p_def.get("required"):
                    required.append(name)
            body_schema: Dict[str, Any] = {"type": "object", "properties": props}
            if required:
                body_schema["required"] = required
            example = (data.get("request") or {}).get("example")
            content: Dict[str, Any] = {"schema": body_schema}
            if isinstance(example, dict) and example:
                content["example"] = example
            request_body = {"required": bool(required), "content": {"application/json": content}}
        else:
            request_body = None

    response_schema = _build_response_schema((resp or {}).get("schema") or {}, lang)
    responses = {
        "200": {
            "description": resp.get("description") or "Success",
            "content": {
                "application/json": {"schema": response_schema},
            },
        }
    }

    op: Dict[str, Any] = {
        "tags": [tag],
        "summary": summary,
        "description": description,
        "parameters": parameters,
        "responses": responses,
    }
    if not parameters:
        op.pop("parameters")
    if request_body is not None:
        op["requestBody"] = request_body

    return path, method, op


# ---------------------------------------------------------------------------
# TS template → OpenAPI operation
# ---------------------------------------------------------------------------


def template_to_openapi_operation(
    template: Dict[str, Any],
    tag: str,
    lang: str,
    new_name: str,
) -> Tuple[str, str, Dict[str, Any]]:
    """Turn a data_porter template into an OpenAPI operation.

    New-style endpoint: `POST /v1/datasets/<new_name>`. The dataset name lives
    in the URL path, not the body. `new_name` comes from
    `templates/template_map.json` (fallback: legacy `tool_name_template_id.json`).
    """
    tid = template.get("templateId", "")
    template_name = _multi_get(template, "nameMulti", lang) or template.get("name") or tid

    lang_ref = {"en": "en", "cn": "cn", "hant": "hant"}[lang]

    # Build filter properties from schemas[]
    filter_props: Dict[str, Any] = OrderedDict()
    filter_required: List[str] = []
    for s in template.get("schemas") or []:
        key = s.get("key")
        if not key:
            continue
        ptype = TYPE_TO_MDX.get(s.get("type", "input"), "string")
        # coerce to openapi types
        if ptype == "integer":
            prop: Dict[str, Any] = {"type": "integer"}
        elif ptype == "number":
            prop = {"type": "number"}
        elif ptype == "boolean":
            prop = {"type": "boolean"}
        elif ptype == "array":
            prop = {"type": "array", "items": {"type": "string"}}
        else:
            prop = {"type": "string"}
        label = _multi_get(s, "nameMulti", lang_ref) or s.get("name") or key
        parts = [label]
        placeholder = _multi_get(s, "placeholderMulti", lang_ref) or s.get("placeholder") or ""
        if placeholder:
            parts.append(placeholder)
        ref = s.get("ref")
        if ref:
            ref_note = {"en": f"Options ref: `{ref}`.", "cn": f"选项 ref：`{ref}`。", "hant": f"選項 ref：`{ref}`。"}[lang_ref]
            parts.append(ref_note)
        prop["description"] = " ".join(p for p in parts if p)
        filter_props[key] = prop
        if s.get("force"):
            filter_required.append(key)

    body_prop: Dict[str, Any] = {
        "type": "object",
        "description": {"en": "Filter object.", "cn": "过滤对象。", "hant": "過濾物件。"}[lang_ref],
        "properties": filter_props,
    }
    if filter_required:
        body_prop["required"] = filter_required

    # Response items from heads[]
    item_props: Dict[str, Any] = OrderedDict()
    for h in template.get("heads") or []:
        if h.get("invisible"):
            continue
        di = h.get("dataIndex")
        if not di:
            continue
        title_text = _multi_get(h, "titleMulti", lang_ref) or h.get("title") or di
        desc = _multi_get(h, "descMulti", lang_ref) or h.get("desc") or ""
        item_props[di] = {"type": "string", "description": f"{title_text}. {desc}".strip(". ")}

    summary = {
        "en": f"{template_name}",
        "cn": f"{template_name}",
        "hant": f"{template_name}",
    }[lang_ref]

    description = {
        "en": (
            f"Query the `{template_name}` dataset. Dataset name (in the URL path) is `{new_name}`."
        ),
        "cn": (
            f"获取 `{template_name}` 数据集。URL path 中的数据集名为 `{new_name}`。"
        ),
        "hant": (
            f"取得 `{template_name}` 資料集。URL path 中的資料集名為 `{new_name}`。"
        ),
    }[lang_ref]

    op: Dict[str, Any] = OrderedDict([
        ("tags", [tag]),
        ("summary", summary),
        ("description", description),
        # Test-first so the playground defaults to the test environment.
        ("servers", [
            {"url": "https://b-api.longbridge.xyz", "description": "Test"},
            {"url": "https://b-api.lbkrs.com", "description": "Production"},
        ]),
        ("requestBody", {
            "required": True,
            "content": {
                "application/json": {
                    "schema": {
                        "type": "object",
                        "properties": OrderedDict([
                            ("body", body_prop),
                            ("page", {"type": "integer", "default": 1, "description": {"en": "Page number (1-based).", "cn": "页码（从 1 开始）。", "hant": "頁碼（從 1 開始）。"}[lang_ref]}),
                            ("page_size", {"type": "integer", "default": 20, "description": {"en": "Rows per page (10/20/50/100/200).", "cn": "每页行数（10/20/50/100/200）。", "hant": "每頁行數（10/20/50/100/200）。"}[lang_ref]}),
                        ]),
                    },
                    "example": {"body": {}, "page": 1, "page_size": 20},
                }
            },
        }),
        ("responses", {
            "200": {
                "description": "Success",
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "items": {
                                    "type": "array",
                                    "items": {"type": "object", "properties": item_props},
                                },
                                "total": {"type": "integer", "description": {"en": "Total row count.", "cn": "总行数。", "hant": "總行數。"}[lang_ref]},
                            },
                        },
                    }
                },
            }
        }),
    ])
    path = f"/v1/datasets/{new_name}"
    return path, "post", op


# ---------------------------------------------------------------------------
# TS template → data-porter MDX
# ---------------------------------------------------------------------------


TYPE_TO_MDX = {
    "input": "string",
    "text": "string",
    "textarea": "string",
    "select": "string",
    "radio": "string",
    "date": "string",
    "daterange": "string",
    "datetime": "string",
    "datetimerange": "string",
    "number": "number",
    "int": "integer",
    "checkbox": "boolean",
    "switch": "boolean",
    "cascader": "string",
    "treeSelect": "string",
    "multiSelect": "array",
}


def _multi_get(d: Dict[str, Any], key: str, lang: str) -> str:
    """Read a nameMulti-style dict for the requested lang, falling back gracefully."""
    fallback_order = {
        "en": ["en", "zh-CN", "zh-HK"],
        "cn": ["zh-CN", "en", "zh-HK"],
        "hant": ["zh-HK", "zh-CN", "en"],
    }[lang]
    v = d.get(key) or {}
    if isinstance(v, dict):
        for k in fallback_order:
            if v.get(k):
                return str(v[k])
    return ""


def ts_template_to_mdx(
    template: Dict[str, Any],
    tag: str,
    lang: str,
    slug: str,
    new_name: str,
) -> str:
    tid = template.get("templateId", "")
    template_name = _multi_get(template, "nameMulti", lang) or template.get("name") or tid

    title = template_name or tid
    frontmatter = OrderedDict()
    frontmatter["title"] = title
    frontmatter["description"] = f"dataset: {new_name}"
    frontmatter["openapi"] = f"post /v1/datasets/{new_name}"

    fm_lines = ["---"]
    for k, v in frontmatter.items():
        fm_lines.append(f'{k}: {json.dumps(v, ensure_ascii=False)}')
    fm_lines.append("---")
    body: List[str] = ["\n".join(fm_lines), ""]

    intro = {
        "en": (
            f"Query the **{title}** dataset. Endpoint: `POST /v1/datasets/{new_name}`. "
            f"The base-URL dropdown in the playground lets you switch between Test (default) and Production."
        ),
        "cn": (
            f"获取 **{title}** 数据集。接口：`POST /v1/datasets/{new_name}`。"
            f"Playground 顶部 Base URL 下拉可切换测试（默认）与生产环境。"
        ),
        "hant": (
            f"取得 **{title}** 資料集。接口：`POST /v1/datasets/{new_name}`。"
            f"Playground 頂部 Base URL 下拉可切換測試（預設）與生產環境。"
        ),
    }[lang]
    body.append(intro)
    body.append("")

    # ---- Example request (also useful for copy/paste) ----
    example_heading = {"en": "### Request Example", "cn": "### 请求示例", "hant": "### 請求範例"}[lang]
    body.append(example_heading)
    body.append("")
    example_body = OrderedDict([
        ("body", {}),
        ("page", 1),
        ("page_size", 20),
    ])
    body.append("```json")
    body.append(json.dumps(example_body, ensure_ascii=False, indent=2))
    body.append("```")
    body.append("")

    return "\n".join(body).rstrip() + "\n"


# ---------------------------------------------------------------------------
# Walk source & drive conversion
# ---------------------------------------------------------------------------


IGNORE_TOP = {"scripts", "templates", ".git"}


def walk_source(source: Path):
    """Yield (top_dir_name, sub_parts_tuple, filename, kind, full_path).

    `sub_parts_tuple` is the tuple of intermediate directory names between the
    top module and the file, preserving the source's on-disk ordering so
    downstream group building keeps the same order.
    """
    tops = [t for t in os.listdir(source) if (source / t).is_dir() and t not in IGNORE_TOP and re.search(r"[\(（]", t)]
    tops.sort()
    for top in tops:
        full_top = source / top
        for root, dirs, files in os.walk(full_top):
            dirs.sort()
            files_sorted = sorted(files)
            rel = os.path.relpath(root, full_top)
            sub_parts = () if rel == "." else tuple(rel.split(os.sep))
            for f in files_sorted:
                if f.endswith(".ts"):
                    yield top, sub_parts, f, "ts", Path(root) / f
                elif f.endswith(".json"):
                    yield top, sub_parts, f, "json", Path(root) / f


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------


def build_openapi_shell(tags: List[Dict[str, str]]) -> Dict[str, Any]:
    return OrderedDict([
        ("openapi", "3.0.1"),
        ("info", {
            "title": "Longport Whale Broker API",
            "description": "Institution-grade server-to-server API for brokers running on Longport Whale.",
            "version": "2.0.0",
        }),
        # Test is listed first so the playground defaults to it — safer for
        # users clicking "Try" without changing anything.
        ("servers", [
            {"url": "https://b-api.longbridge.xyz", "description": "Test"},
            {"url": "https://b-api.lbkrs.com", "description": "Production"},
        ]),
        ("tags", tags),
        ("paths", OrderedDict()),
        ("components", {
            "securitySchemes": {
                "accessToken": {"type": "apiKey", "in": "header", "name": "Authorization", "description": "ACCESS_TOKEN issued to the broker."},
            }
        }),
        ("security", [{"accessToken": []}]),
    ])


# Manually-maintained groups inside the Broker API tab. The generator only
# owns the business-domain reference groups; these are prepended/appended
# around them so a re-run never wipes the hand-written Overview / Get
# Started / Operations sections.
BROKER_API_MANUAL_GROUPS = {
    "en": {
        "prefix": [
            {"group": "Overview", "icon": "rocket", "pages": ["en/broker-api/overview"]},
            {"group": "Get Started", "icon": "play", "pages": [
                "en/broker-api/get-started/quickstart",
                "en/broker-api/get-started/authentication",
                "en/broker-api/get-started/passthrough-headers",
            ]},
        ],
        "suffix": [
            {"group": "Operations", "icon": "wrench", "pages": ["en/broker-api/operations"]},
        ],
    },
    "cn": {
        "prefix": [
            {"group": "概览", "icon": "rocket", "pages": ["cn/broker-api/overview"]},
            {"group": "开始使用", "icon": "play", "pages": [
                "cn/broker-api/get-started/quickstart",
                "cn/broker-api/get-started/authentication",
                "cn/broker-api/get-started/passthrough-headers",
            ]},
        ],
        "suffix": [
            {"group": "运维参考", "icon": "wrench", "pages": ["cn/broker-api/operations"]},
        ],
    },
    "zh-Hant": {
        "prefix": [
            {"group": "概覽", "icon": "rocket", "pages": ["zh-hant/broker-api/overview"]},
            {"group": "開始使用", "icon": "play", "pages": [
                "zh-hant/broker-api/get-started/quickstart",
                "zh-hant/broker-api/get-started/authentication",
                "zh-hant/broker-api/get-started/passthrough-headers",
            ]},
        ],
        "suffix": [
            {"group": "運維參考", "icon": "wrench", "pages": ["zh-hant/broker-api/operations"]},
        ],
    },
}


def group_localized_name(module_key: Optional[str], en_name: str, cn_name: str, menu: Dict[str, Any], lang: str) -> str:
    if module_key and module_key in menu:
        lookup_key = {"en": "en", "cn": "zh-CN", "hant": "zh-HK"}[lang]
        val = menu[module_key].get(lookup_key)
        if val:
            return val
    return {"en": en_name, "cn": cn_name, "hant": cn_name}[lang]


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--source", default=str(DEFAULT_SOURCE))
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    source = Path(args.source).resolve()
    if not source.is_dir():
        print(f"source not found: {source}", file=sys.stderr)
        return 2

    template_names = load_template_id_to_name(source)
    menu = load_menu(source)

    # --- collect all endpoints/templates grouped by top-level module + sub path ---
    # modules[top] = {
    #   cn, en, menu_key,
    #   items_by_subpath: OrderedDict[tuple[str,...], list[entry]]
    # }
    # entry = {"kind": "rest"|"porter", ...}
    modules_order: List[str] = []
    modules: Dict[str, Dict[str, Any]] = OrderedDict()

    stats = {"rest": 0, "porter": 0, "dupes": 0, "porter_dupes": 0}
    seen_paths: set = set()
    seen_slugs: set = set()

    for top, sub_parts, fname, kind, full in walk_source(source):
        cn, en = parse_top_dir(top)
        if top not in modules:
            modules[top] = {
                "cn": cn,
                "en": en,
                "menu_key": TOP_DIR_TO_MENU_KEY.get(en),
                "items_by_subpath": OrderedDict(),
            }
            modules_order.append(top)
        mod = modules[top]
        tag = en
        bucket = mod["items_by_subpath"].setdefault(sub_parts, [])

        if kind == "json":
            try:
                data = json.loads(full.read_text(encoding="utf-8"))
            except Exception as e:
                print(f"[warn] failed to load {full}: {e}", file=sys.stderr)
                continue
            if not isinstance(data, dict) or not data.get("path"):
                continue
            method_upper = (data.get("method") or "POST").upper()
            # Skip placeholder / non-endpoint files
            if method_upper not in {"GET", "POST", "PUT", "DELETE", "PATCH"}:
                continue
            if not data["path"].startswith("/"):
                continue
            key = (data["path"], method_upper)
            if key in seen_paths:
                stats["dupes"] += 1
                continue
            seen_paths.add(key)
            bucket.append({"kind": "rest", "data": data, "tag": tag})
            stats["rest"] += 1
        else:  # ts
            template = parse_ts_template(full)
            if not template:
                continue
            tid = template.get("templateId")
            if not tid:
                continue
            name = template_names.get(tid) or tid
            slug = kebab(name)
            if slug in seen_slugs:
                stats["porter_dupes"] += 1
                continue
            seen_slugs.add(slug)
            bucket.append({
                "kind": "porter",
                "template": template,
                "slug": slug,
                "new_name": name,
                "tag": tag,
            })
            stats["porter"] += 1

    # --- Build openapi.{lang}.json (three variants) ---
    tags_by_key: List[str] = []
    for top in modules_order:
        tag = modules[top]["en"]
        if tag not in tags_by_key:
            tags_by_key.append(tag)

    outputs = {}
    for lang_key, file_suffix, _src_key, _menu_key in LANGS:
        lang_bucket = {"en": "en", "cn": "cn", "zh-Hant": "hant"}[lang_key]
        openapi = build_openapi_shell([{"name": t} for t in tags_by_key])
        for top in modules_order:
            mod = modules[top]
            for bucket in mod["items_by_subpath"].values():
                for entry in bucket:
                    if entry["kind"] == "rest":
                        path, method, op = json_to_operation(entry["data"], entry["tag"], lang_bucket)
                        openapi["paths"].setdefault(path, OrderedDict())[method] = op
                    elif entry["kind"] == "porter":
                        path, method, op = template_to_openapi_operation(entry["template"], entry["tag"], lang_bucket, entry["new_name"])
                        openapi["paths"].setdefault(path, OrderedDict())[method] = op
        outputs[lang_key] = openapi

    # --- Build MDX pages per language ---
    mdx_files: Dict[Path, str] = {}
    for lang_key, file_suffix, _src_key, _menu_key in LANGS:
        lang_bucket = {"en": "en", "cn": "cn", "zh-Hant": "hant"}[lang_key]
        for top in modules_order:
            mod = modules[top]
            for bucket in mod["items_by_subpath"].values():
                for entry in bucket:
                    if entry["kind"] != "porter":
                        continue
                    mdx = ts_template_to_mdx(entry["template"], entry["tag"], lang_bucket, entry["slug"], entry["new_name"])
                    out = REPO_ROOT / LANG_DIRS[lang_key] / "api-reference" / "data-porter" / f"{entry['slug']}.mdx"
                    mdx_files[out] = mdx

    # --- Build docs.json ---
    docs_json_path = REPO_ROOT / "docs.json"
    docs = json.loads(docs_json_path.read_text(encoding="utf-8"))

    def _entry_page(entry: Dict[str, Any], lang_key: str) -> str:
        if entry["kind"] == "rest":
            data = entry["data"]
            path = re.sub(r"<([^>]+)>", r"{\1}", data.get("path", ""))
            method = (data.get("method") or "POST").upper()
            return f"{method} {path}"
        return f"{LANG_DIRS[lang_key]}/api-reference/data-porter/{entry['slug']}"

    def _subdir_localized(name: str, lang_bucket: str) -> str:
        cn, en = parse_top_dir(name)
        if cn == en:  # no parenthesised english; fall back to the raw name
            return name
        return {"en": en, "cn": cn, "hant": cn}[lang_bucket]

    def _build_nested_pages(items_by_subpath: "OrderedDict[Tuple[str, ...], List[Dict[str, Any]]]", lang_key: str, lang_bucket: str) -> List[Any]:
        """Convert subpath → entries dict into a Mintlify pages tree.

        Groups keyed by identical sub-path prefixes become nested `{group, pages}` objects.
        Files sitting at a shallower level are listed alongside deeper groups, in
        source discovery order.
        """
        # Build a tree: node = {"children": OrderedDict[name, node], "entries": list}
        root: Dict[str, Any] = {"children": OrderedDict(), "entries": []}
        for sub_parts, entries in items_by_subpath.items():
            node = root
            for part in sub_parts:
                node = node["children"].setdefault(part, {"children": OrderedDict(), "entries": []})
            node["entries"].extend(entries)

        def render(node: Dict[str, Any]) -> List[Any]:
            out: List[Any] = []
            for entry in node["entries"]:
                out.append(_entry_page(entry, lang_key))
            for child_name, child_node in node["children"].items():
                child_pages = render(child_node)
                if not child_pages:
                    continue
                out.append({
                    "group": _subdir_localized(child_name, lang_bucket),
                    "pages": child_pages,
                })
            return out

        return render(root)

    def build_api_groups(lang_key: str, file_suffix: str, lang_bucket: str) -> List[Dict[str, Any]]:
        groups: List[Dict[str, Any]] = []
        for top in modules_order:
            mod = modules[top]
            group_name = group_localized_name(mod["menu_key"], mod["en"], mod["cn"], menu, lang_bucket)
            icon = MODULE_ICONS.get(mod["menu_key"], "layers") if mod["menu_key"] else MODULE_ICONS.get("shared", "component")
            pages = _build_nested_pages(mod["items_by_subpath"], lang_key, lang_bucket)
            if not pages:
                continue
            groups.append({
                "group": group_name,
                "icon": icon,
                "openapi": {
                    "source": f"openapi.{file_suffix}.json",
                    "directory": f"{LANG_DIRS[lang_key]}/api-reference",
                },
                "pages": pages,
            })
        return groups

    # Rebuild each language's API Reference tab
    lang_bucket_map = {"en": "en", "cn": "cn", "zh-Hant": "hant"}
    file_suffix_map = {"en": "en", "cn": "cn", "zh-Hant": "zh-hant"}
    for lang_conf in docs["navigation"]["languages"]:
        lk = lang_conf["language"]
        for tab in lang_conf["tabs"]:
            if tab.get("tab") in {"Broker API", "API Reference", "API 参考", "API 參考"} or tab.get("icon") == "braces":
                manual = BROKER_API_MANUAL_GROUPS.get(lk, {"prefix": [], "suffix": []})
                tab["groups"] = (
                    manual["prefix"]
                    + build_api_groups(lk, file_suffix_map[lk], lang_bucket_map[lk])
                    + manual["suffix"]
                )

    # --- Write outputs ---
    if args.dry_run:
        print(json.dumps(stats, indent=2))
        print("would write:")
        for lang_key, file_suffix, *_ in LANGS:
            print(f"  openapi.{file_suffix}.json")
        print(f"  {len(mdx_files)} MDX files")
        print("  docs.json")
        return 0

    for lang_key, file_suffix, *_ in LANGS:
        p = REPO_ROOT / f"openapi.{file_suffix}.json"
        p.write_text(json.dumps(outputs[lang_key], ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    # Clean out old data-porter mdx that we didn't just write (idempotent regen)
    written = set(mdx_files.keys())
    for lang_key in LANG_DIRS.values():
        dp_dir = REPO_ROOT / lang_key / "api-reference" / "data-porter"
        if dp_dir.exists():
            for existing in dp_dir.iterdir():
                if existing.suffix == ".mdx" and existing not in written:
                    existing.unlink()

    for path, text in mdx_files.items():
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(text, encoding="utf-8")

    docs_json_path.write_text(json.dumps(docs, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    print(json.dumps(stats, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
