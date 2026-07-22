#!/usr/bin/env python3
"""
Convert whale-openapi-docs source data into the Mintlify shape used by
this repo (pipeline v2 — consumes the generated OpenAPI YAML files).

Since source commit 0298df9 the sibling repo ships one OpenAPI 3.1 YAML
per operation, trilingual via `x-summary-{hk,en}` / `x-description-{hk,en}`
/ `x-name-{cn,hk,en}` / `x-enum-details` extension fields, and carries its
business grouping in `x-menu-path`. This script merges those YAMLs into:

  - openapi.{en,cn,zh-hant}.json   (per-language specs, x-* localized away)
  - docs.json                      (Broker API tab nav from x-menu-path)

No MDX is generated any more: every operation (datasets included) is a
native OpenAPI operation referenced from the nav as "METHOD /path".

Idempotent: safe to re-run.

Usage:
    python3 scripts/convert.py [--source /path/to/whale-openapi-docs] [--dry-run]
"""

from __future__ import annotations

import argparse
import copy
import json
import os
import re
import sys
from collections import OrderedDict
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent
DEFAULT_SOURCE = REPO_ROOT.parent / "whale-openapi-docs"

# (docs.json lang key, openapi filename suffix, x-* suffix or None for base)
LANGS = [
    ("en", "en", "en"),
    ("cn", "cn", None),
    ("zh-Hant", "zh-hant", "hk"),
]
# Directory / URL prefix must match the language code casing exactly —
# Mintlify uses the raw `language` value as the URL prefix and looks for
# sibling pages case-sensitively; a lowercase `zh-hant/` prefix under a
# `zh-Hant` language breaks the language switcher (falls back to /introduction).
LANG_DIRS = {"en": "en", "cn": "cn", "zh-Hant": "zh-Hant"}

SKIP_DIRS = {".git", ".claude", "whale-openapi", "scripts", "data", "templates", "docs"}

# ---------------------------------------------------------------------------
# Naming helpers
# ---------------------------------------------------------------------------

TOP_DIR_RE = re.compile(r"^(.+?)\s*[\(（](.+?)[\)）]$")


def parse_top_dir(name: str) -> Tuple[str, str]:
    """Return (chinese, english) from a name like '款项管理(Cash Management)'."""
    m = TOP_DIR_RE.match(name)
    if not m:
        return name, name
    return m.group(1).strip(), m.group(2).strip()


def norm_menu_seg(name: str) -> str:
    """Canonicalize a menu-path segment's whitespace before its parenthesis.

    Source YAMLs disagree on '资产账户(Account Assets)' vs
    '资产账户 (Account Assets)' (an in-progress house-style migration in the
    sibling repo) -- left as raw strings this splits one logical group into
    two duplicate nav entries. Re-render as `{cn}({en})` so both variants of
    the SAME Chinese label collapse to one key; segments with genuinely
    different Chinese labels that happen to share an English word (e.g.
    '结单管理(Statement)' vs '收费账单(Statement)') are correctly left distinct
    since `cn` differs."""
    cn, en = parse_top_dir(name)
    return f"{cn}({en})" if cn != name else name


def load_menu(source: Path) -> Dict[str, Dict[str, str]]:
    """{module_key: {en, zh-CN, zh-HK}} from menu.json, for top-level titles."""
    p = source / "menu.json"
    if not p.exists():
        return {}
    m = json.loads(p.read_text(encoding="utf-8"))
    return {menu["key"]: menu["name"] for menu in m["data"]["menus"]}


def build_menu_tree(source: Path) -> List[Dict[str, Any]]:
    """The full nested menu.json tree (data.menus, each node has name + routes).
    This is the authoritative ORDER source for both top-level modules and the
    sub-groups under them; the on-disk directory walk is only alphabetical."""
    p = source / "menu.json"
    if not p.exists():
        return []
    return json.loads(p.read_text(encoding="utf-8")).get("data", {}).get("menus", [])


def _match_menu_node(nodes: List[Dict[str, Any]], zh: str, en: str):
    """Find the (index, node) among `nodes` whose name matches the en or zh-CN
    of a menu-path segment (segments look like '公司行动(Corporate Action)')."""
    for i, n in enumerate(nodes):
        nm = n.get("name") or {}
        nen = (nm.get("en") or "").strip().lower()
        nzh = (nm.get("zh-CN") or "").strip()
        if (en and nen == en.strip().lower()) or (zh and nzh == zh.strip()):
            return i, n
    return None


def menu_sort_key(menu_tree: List[Dict[str, Any]], menu_path: Tuple[str, ...]):
    """Sort key that orders a menu_path by its position in the menu.json tree,
    level by level. Segments found in menu.json sort before unknown ones (which
    fall back to alphabetical by name), so extra/renamed dirs still land somewhere
    stable instead of breaking the run."""
    key = []
    nodes = menu_tree
    for part in menu_path:
        zh, en = parse_top_dir(part)
        hit = _match_menu_node(nodes, zh, en)
        if hit:
            key.append((0, hit[0], ""))
            nodes = hit[1].get("routes") or []
        else:
            key.append((1, 0, (en or zh).lower()))
            nodes = []
    return tuple(key)


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
    "Shared Components": None,
}

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


def localized_top_name(raw: str, menu: Dict[str, Any], lang_key: str) -> str:
    cn, en = parse_top_dir(raw)
    menu_key = TOP_DIR_TO_MENU_KEY.get(en)
    if menu_key and menu_key in menu:
        lookup = {"en": "en", "cn": "zh-CN", "zh-Hant": "zh-HK"}[lang_key]
        val = menu[menu_key].get(lookup)
        if val:
            return val
    return en if lang_key == "en" else cn


def localized_sub_name(raw: str, lang_key: str) -> str:
    cn, en = parse_top_dir(raw)
    return en if lang_key == "en" else cn


# ---------------------------------------------------------------------------
# Localization of x-* extension fields
# ---------------------------------------------------------------------------

ENUM_PREFIX = {"en": "Options", "cn": "选项", "zh-Hant": "選項"}

# x-* keys that pass through untouched instead of being localized/dropped.
PRESERVED_X_KEYS = ("x-value-source", "x-permission-key", "x-lbonly", "x-source")


def _pick(node: Dict[str, Any], base_key: str, sfx: Optional[str]) -> Optional[str]:
    """Pick the localized variant of `base_key` (e.g. description) from a node."""
    if sfx:
        v = node.get(f"x-{base_key}-{sfx}")
        if v:
            return v
    return node.get(base_key)


CJK_RE = re.compile(r"[\u3400-\u9fff]")
EN_SENTENCE_RE = re.compile(r"(?<=[.!?])\s+|[。！？]\s*")


def _english_only(value: str) -> Optional[str]:
    """Return the usable English portions of localized prose.

    Some legacy x-*-en values contain a Chinese source paragraph followed by
    its English translation. Keep complete English sentences and reject
    Chinese-only fallbacks so generated English pages cannot mix languages.
    """
    if not CJK_RE.search(value):
        return value

    paragraphs = []
    for paragraph in value.split("\n\n"):
        sentences = []
        for sentence in EN_SENTENCE_RE.split(paragraph):
            sentence = sentence.strip()
            if sentence and not CJK_RE.search(sentence):
                sentences.append(sentence)
        if sentences:
            paragraphs.append(" ".join(sentences))
    return "\n\n".join(paragraphs) or None


def _localized_text(
    node: Dict[str, Any], base_key: str, sfx: Optional[str], lang_key: str
) -> Optional[str]:
    value = _pick(node, base_key, sfx)
    if not isinstance(value, str):
        return None
    if lang_key == "en":
        return _english_only(value)

    # Chinese pages may fall back to complete English prose when a Simplified
    # or Traditional Chinese translation is unavailable.
    return value


def _enum_label(entry: Dict[str, Any], sfx: Optional[str]) -> str:
    if sfx and entry.get(sfx):
        return str(entry[sfx])
    return str(entry.get("cn", entry.get("value", "")))


def localize(node: Any, sfx: Optional[str], lang_key: str) -> Any:
    """Deep-copy `node` with x-* trilingual fields resolved for one language.

    - description   ← x-description-<sfx> (falls back to base description)
    - summary       ← x-summary-<sfx>
    - x-name-*      → prepended to description as a display label
    - x-enum-details→ appended to description as "Options: `v` = label; …"
    - x-value-source/x-permission-key/x-lbonly/x-source pass through verbatim
      (see PRESERVED_X_KEYS)
    - every other x-* key is dropped from the output
    """
    if isinstance(node, list):
        return [localize(v, sfx, lang_key) for v in node]
    if not isinstance(node, dict):
        return node

    out: Dict[str, Any] = {}
    desc = _localized_text(node, "description", sfx, lang_key)
    # A schema property can be literally keyed "description"/"summary" (a real
    # field whose dataIndex is that word). Only treat description/summary as
    # localizable TEXT when the value is a string; a dict/list value is an
    # ordinary child node and must be recursed into, not swallowed/str()-ified.
    if not isinstance(desc, str):
        desc = None
    name_label = None
    if "x-name-cn" in node or f"x-name-{sfx}" in node or "x-name-en" in node:
        if sfx:
            name_label = node.get(f"x-name-{sfx}") or node.get("x-name-cn")
        else:
            name_label = node.get("x-name-cn")

    enum_note = None
    if isinstance(node.get("x-enum-details"), list):
        rendered = []
        for e in node["x-enum-details"]:
            if isinstance(e, dict):
                rendered.append(f"`{e.get('value')}` = {_enum_label(e, sfx)}")
        if rendered:
            enum_note = f"{ENUM_PREFIX[lang_key]}: " + "; ".join(rendered)

    for k, v in node.items():
        ks = str(k)
        if ks in PRESERVED_X_KEYS:
            out[k] = v          # preserve verbatim, not localized/dropped
            continue
        if ks.startswith("x-"):
            continue
        if ks == "description" and isinstance(v, str):
            continue  # localizable text, handled below
        if ks == "summary" and isinstance(v, str):
            summary = _localized_text(node, "summary", sfx, lang_key)
            if summary:
                out[k] = summary
            continue
        out[k] = localize(v, sfx, lang_key)

    parts = []
    if name_label:
        parts.append(str(name_label).strip().rstrip("。."))
    if desc:
        parts.append(str(desc).strip())
    if enum_note:
        parts.append(enum_note)
    if parts:
        out["description"] = ". ".join(parts) if lang_key == "en" else "。".join(
            p.rstrip("。") for p in parts
        )

    return out


# ---------------------------------------------------------------------------
# Source walking
# ---------------------------------------------------------------------------


def walk_yaml_ops(source: Path, schemas_out: Optional[Dict[str, Any]] = None):
    """Yield (menu_path_tuple, path, method, op_dict) in stable order.

    Operations with `x-lbonly: true` (Longbridge-internal-only) are skipped
    entirely -- they must not appear in this externally-published site.

    Each source YAML is a self-contained OpenAPI doc and may declare its own
    `components.schemas` (e.g. a shared error envelope referenced via `$ref`
    from that same file). Since this function merges paths from many such
    files into one spec, those component schemas need collecting too -- pass
    `schemas_out` to accumulate them (first-seen wins; a content mismatch
    across files is only a warning, since it can't be represented as a single
    merged component)."""
    seen: set = set()
    dupes = 0
    tops = sorted(
        d for d in os.listdir(source)
        if (source / d).is_dir() and d not in SKIP_DIRS and TOP_DIR_RE.match(d)
    )
    for top in tops:
        for root, dirs, files in os.walk(source / top):
            dirs.sort()
            for f in sorted(files):
                if not f.endswith((".yaml", ".yml")):
                    continue
                fp = Path(root) / f
                try:
                    doc = yaml.safe_load(fp.read_text(encoding="utf-8"))
                except Exception as e:
                    print(f"[warn] yaml parse failed {fp}: {e}", file=sys.stderr)
                    continue
                if schemas_out is not None:
                    for name, schema in ((doc.get("components") or {}).get("schemas") or {}).items():
                        if name not in schemas_out:
                            schemas_out[name] = schema
                        elif schemas_out[name] != schema:
                            print(f"[warn] components.schemas.{name} differs in {fp}, keeping first-seen version", file=sys.stderr)
                for path, methods in (doc.get("paths") or {}).items():
                    for method, op in methods.items():
                        if not isinstance(op, dict):
                            continue
                        if op.get("x-lbonly") is True:
                            continue  # Longbridge-internal-only, not published here
                        key = (path, method)
                        if key in seen:
                            dupes += 1
                            continue
                        seen.add(key)
                        menu_path = tuple(norm_menu_seg(s) for s in (op.get("x-menu-path") or (top,)))
                        yield menu_path, path, method, op, dupes


# ---------------------------------------------------------------------------
# Spec assembly
# ---------------------------------------------------------------------------


SPEC_COPY = {
    "en": {
        "title": "Longport Whale Broker API",
        "description": "Institution-grade server-to-server API for brokers running on Longport Whale.",
        "test": "Test",
        "production": "Production",
        "auth": "ACCESS_TOKEN issued to the broker, sent as `Authorization: Bearer <token>`.",
    },
    "cn": {
        "title": "Longport Whale 券商 API",
        "description": "面向使用 Longport Whale 的券商提供机构级服务端 API。",
        "test": "测试环境",
        "production": "生产环境",
        "auth": "券商获发的 ACCESS_TOKEN，通过 `Authorization: Bearer <token>` 发送。",
    },
    "zh-Hant": {
        "title": "Longport Whale 券商 API",
        "description": "面向使用 Longport Whale 的券商提供機構級服務端 API。",
        "test": "測試環境",
        "production": "生產環境",
        "auth": "券商獲發的 ACCESS_TOKEN，通過 `Authorization: Bearer <token>` 發送。",
    },
}


def build_openapi_shell(tags: List[Dict[str, str]], lang_key: str) -> Dict[str, Any]:
    copy = SPEC_COPY[lang_key]
    return OrderedDict([
        ("openapi", "3.1.1"),
        ("info", {
            "title": copy["title"],
            "description": copy["description"],
            "version": "2.0.0",
        }),
        # Test first so the playground defaults to it.
        ("servers", [
            {"url": "https://b-api.longbridge.xyz", "description": copy["test"]},
            {"url": "https://b-api.lbkrs.com", "description": copy["production"]},
        ]),
        ("tags", tags),
        ("paths", OrderedDict()),
        ("components", {
            "securitySchemes": {
                "bearerAuth": {
                    "type": "http",
                    "scheme": "bearer",
                    "description": copy["auth"],
                },
            }
        }),
        ("security", [{"bearerAuth": []}]),
    ])


def ensure_response_descriptions(spec: Dict[str, Any], lang_key: str) -> None:
    """Keep every OpenAPI Response Object schema-valid after localization.

    A source response description may exist only in Chinese. English
    localization intentionally removes that prose, but OpenAPI requires the
    `description` field even when no translation is available.
    """
    fallback = {
        "en": {
            "2": "Successful response.",
            "4": "Client error response.",
            "5": "Server error response.",
            "default": "Response.",
        },
        "cn": {"default": "响应。"},
        "zh-Hant": {"default": "響應。"},
    }[lang_key]

    for methods in spec.get("paths", {}).values():
        for operation in methods.values():
            if not isinstance(operation, dict):
                continue
            for status, response in operation.get("responses", {}).items():
                if not isinstance(response, dict) or "$ref" in response:
                    continue
                if not response.get("description"):
                    response["description"] = fallback.get(str(status)[:1], fallback["default"])


# Manually-maintained groups around the generated reference groups in the
# Broker API tab — survive regeneration.
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
            {"group": "概覽", "icon": "rocket", "pages": ["zh-Hant/broker-api/overview"]},
            {"group": "開始使用", "icon": "play", "pages": [
                "zh-Hant/broker-api/get-started/quickstart",
                "zh-Hant/broker-api/get-started/authentication",
                "zh-Hant/broker-api/get-started/passthrough-headers",
            ]},
        ],
        "suffix": [
            {"group": "運維參考", "icon": "wrench", "pages": ["zh-Hant/broker-api/operations"]},
        ],
    },
}


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--source", default=str(DEFAULT_SOURCE))
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    source = Path(args.source).resolve()
    if not source.is_dir():
        print(f"source not found: {source}", file=sys.stderr)
        return 2

    menu = load_menu(source)
    menu_tree = build_menu_tree(source)

    # ---- collect ops -----------------------------------------------------
    # nav_tree: OrderedDict keyed by menu_path tuples → list of (path, method)
    nav_tree: "OrderedDict[Tuple[str, ...], List[Tuple[str, str]]]" = OrderedDict()
    ops: List[Tuple[Tuple[str, ...], str, str, Dict[str, Any]]] = []
    shared_schemas: Dict[str, Any] = {}
    dupes = 0
    for menu_path, path, method, op, dupes in walk_yaml_ops(source, shared_schemas):
        nav_tree.setdefault(menu_path, []).append((path, method))
        ops.append((menu_path, path, method, op))

    n_datasets = sum(1 for _, p, _, _ in ops if p.startswith("/v1/datasets/") and not p.endswith("/download"))
    n_downloads = sum(1 for _, p, _, _ in ops if p.endswith("/download"))
    stats = {
        "ops": len(ops),
        "datasets": n_datasets,
        "downloads": n_downloads,
        "rest": len(ops) - n_datasets - n_downloads,
        "dupes": dupes,
    }

    # top-level module order: follow menu.json, not the alphabetical dir walk.
    top_order: List[str] = []
    for menu_path in nav_tree:
        if menu_path[0] not in top_order:
            top_order.append(menu_path[0])
    top_order.sort(key=lambda t: menu_sort_key(menu_tree, (t,)))

    # ---- per-language specs ----------------------------------------------
    outputs = {}
    for lang_key, file_suffix, sfx in LANGS:
        tags = [{"name": localized_top_name(t, menu, lang_key)} for t in top_order]
        spec = build_openapi_shell(tags, lang_key)
        for name, schema in shared_schemas.items():
            spec["components"].setdefault("schemas", {})[name] = localize(schema, sfx, lang_key)
        for menu_path, path, method, op in ops:
            lop = localize(op, sfx, lang_key)
            lop.pop("security", None)      # global security covers it
            lop.pop("servers", None)
            lop["tags"] = [localized_top_name(menu_path[0], menu, lang_key)]
            # Route pages by the unique operationId instead of Mintlify's
            # default localized tag/summary slug (Chinese URLs). When x-mint
            # sets an explicit href, the sidebar label defaults to a humanized
            # URL slug ("financing_delta" → "Financing delta") — force it back
            # to the localized summary via metadata.sidebarTitle.
            if lop.get("operationId"):
                xmint = {"href": f"/{LANG_DIRS[lang_key]}/api-reference/{lop['operationId']}"}
                if lop.get("summary"):
                    xmint["metadata"] = {"sidebarTitle": lop["summary"]}
                lop["x-mint"] = xmint
            spec["paths"].setdefault(path, OrderedDict())[method] = lop
        ensure_response_descriptions(spec, lang_key)
        outputs[lang_key] = spec

    # ---- docs.json nav -----------------------------------------------------
    docs_json_path = REPO_ROOT / "docs.json"
    docs = json.loads(docs_json_path.read_text(encoding="utf-8"))

    def build_groups(lang_key: str, file_suffix: str) -> List[Dict[str, Any]]:
        # tree: {top: {"__pages": [...], sub: {...}}}
        root: Dict[str, Any] = OrderedDict()
        for menu_path, entries in nav_tree.items():
            node = root
            for part in menu_path:
                node = node.setdefault(part, OrderedDict())
            node.setdefault("__pages", []).extend(entries)

        # Map (path, method) -> operationId for this language's spec so we can
        # emit language-prefixed proxy-page slugs instead of "METHOD /path".
        # Rationale: Mintlify's language switcher matches sibling pages by
        # docs.json string equality. Two languages listing the same
        # "POST /v1/x" produce identical strings, and the switcher falls back
        # to /introduction. Language-prefixed file-path entries (each pointing
        # at a per-language proxy MDX with `openapi: METHOD /path` frontmatter)
        # give each tab a unique string, restoring cross-language mapping.
        op_id_by_pm: Dict[Tuple[str, str], str] = {}
        for path, methods in outputs[lang_key]["paths"].items():
            for method, op in methods.items():
                if isinstance(op, dict) and op.get("operationId"):
                    op_id_by_pm[(path, method.lower())] = op["operationId"]

        def render(node: Dict[str, Any], lang_key: str, prefix: Tuple[str, ...]) -> List[Any]:
            out: List[Any] = []
            for pm in node.get("__pages", []):
                op_id = op_id_by_pm.get((pm[0], pm[1].lower()))
                if op_id:
                    out.append(f"{LANG_DIRS[lang_key]}/api-reference/{op_id}")
                else:
                    out.append(f"{pm[1].upper()} {pm[0]}")
            children = [(c, cn) for c, cn in node.items() if c != "__pages"]
            # order sub-groups by menu.json (falls back to alphabetical for
            # anything not in the menu tree).
            children.sort(key=lambda kv: menu_sort_key(menu_tree, prefix + (kv[0],)))
            for child, child_node in children:
                child_pages = render(child_node, lang_key, prefix + (child,))
                if child_pages:
                    out.append({"group": localized_sub_name(child, lang_key), "pages": child_pages})
            return out

        groups = []
        for top in top_order:
            _, en_name = parse_top_dir(top)
            icon = MODULE_ICONS.get(TOP_DIR_TO_MENU_KEY.get(en_name) or "shared", "layers")
            pages = render(root[top], lang_key, (top,))
            if not pages:
                continue
            groups.append({
                "group": localized_top_name(top, menu, lang_key),
                "icon": icon,
                "openapi": {
                    "source": f"openapi.{file_suffix}.json",
                    "directory": f"{LANG_DIRS[lang_key]}/api-reference",
                },
                "pages": pages,
            })
        return groups

    file_suffix_map = {lk: fs for lk, fs, _ in LANGS}
    for lang in docs["navigation"]["languages"]:
        lk = lang["language"]
        for tab in lang["tabs"]:
            if tab.get("tab") in {"Broker API", "API Reference", "API 参考", "API 參考"} or tab.get("icon") == "braces":
                manual = BROKER_API_MANUAL_GROUPS.get(lk, {"prefix": [], "suffix": []})
                tab["groups"] = manual["prefix"] + build_groups(lk, file_suffix_map[lk]) + manual["suffix"]

    # ---- write -------------------------------------------------------------
    if args.dry_run:
        print(json.dumps(stats, indent=2))
        return 0

    for lang_key, file_suffix, _ in LANGS:
        p = REPO_ROOT / f"openapi.{file_suffix}.json"
        # default=str: YAML auto-parses bare dates in examples into datetime.date
        p.write_text(json.dumps(outputs[lang_key], ensure_ascii=False, indent=2, default=str) + "\n", encoding="utf-8")

    # Emit per-language proxy MDX pages, one per operation. See the render()
    # comment above for why: gives the language switcher unique-per-language
    # docs.json page strings so cross-language sibling mapping works on
    # openapi-generated pages.
    for lang_key, _, _ in LANGS:
        api_dir = REPO_ROOT / LANG_DIRS[lang_key] / "api-reference"
        api_dir.mkdir(parents=True, exist_ok=True)
        expected = set()
        for path, methods in outputs[lang_key]["paths"].items():
            for method, op in methods.items():
                if not (isinstance(op, dict) and op.get("operationId")):
                    continue
                opid = op["operationId"]
                expected.add(opid)
                (api_dir / f"{opid}.mdx").write_text(
                    f"---\nopenapi: {method.lower()} {path}\n---\n",
                    encoding="utf-8",
                )
        # Prune stale proxy MDX (operations removed upstream).
        for f in api_dir.glob("*.mdx"):
            if f.stem not in expected:
                f.unlink()

    # v2 generates no MDX under data-porter — clean up any leftover.
    for lang_dir in LANG_DIRS.values():
        dp = REPO_ROOT / lang_dir / "api-reference" / "data-porter"
        if dp.exists():
            for f in dp.iterdir():
                if f.suffix == ".mdx":
                    f.unlink()
            try:
                dp.rmdir()
            except OSError:
                pass

    docs_json_path.write_text(json.dumps(docs, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    print(json.dumps(stats, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
