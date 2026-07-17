#!/usr/bin/env python3
"""
Generate the VALUE_SOURCES map in custom.js from `x-value-source`
annotations in openapi.cn.json.

An annotated request property declares that its value comes from another
endpoint's query result:

    "x-value-source": {
      "endpoint": "GET /v1/datasets/refs/tenant_currencies",   # required
      "value_field": "id"                                      # list shape only
    }

For every annotation this script resolves the *source* endpoint's own spec
and derives everything the docs-site button needs:

  refs shape  (GET /v1/datasets/refs/*, response data.values[]):
      no request params; value = item.key, label = item.value / item.desc
  list shape  (dataset queries, response data.list[]):
      query form fields from the requestBody schema (filters.* flattened,
      enum options parsed from the "选项: `v` = label" description suffix),
      defaults from the documented example, value = item[value_field],
      row label = first few other fields of the response example item.

The result is written into custom.js between the
`// __VALUE_SOURCES_GENERATED_START__` / `..._END__` markers.

Idempotent. Run after (re)generating the OpenAPI specs:
    python3 scripts/gen_value_sources.py
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
SPEC_FILE = REPO_ROOT / "openapi.cn.json"
CUSTOM_JS = REPO_ROOT / "custom.js"
START = "// __VALUE_SOURCES_GENERATED_START__"
END = "// __VALUE_SOURCES_GENERATED_END__"

OPTION_RE = re.compile(r"`([^`]+)`\s*=\s*([^;；]+)")


def first_sentence(desc: str) -> str:
    return re.split(r"[。.]", desc or "")[0].strip()


def enum_options(prop: dict) -> list | None:
    if "enum" not in prop:
        return None
    labels = dict(OPTION_RE.findall(prop.get("description", "")))
    opts = [{"value": "", "label": "全部"}]
    for v in prop["enum"]:
        v = str(v)
        opts.append({"value": v, "label": f"{v} {labels[v].strip()}" if v in labels else v})
    return opts


def form_params(schema: dict, example: dict) -> list:
    """Flatten the source endpoint's requestBody schema into form fields."""
    out = []
    for key, prop in (schema.get("properties") or {}).items():
        if key == "orderBy":
            continue
        if prop.get("type") == "object" and prop.get("properties"):
            for ck, cp in prop["properties"].items():
                out.append(_field(f"{key}.{ck}", cp))
        elif key in ("page", "page_size"):
            dflt = (example or {}).get(key)
            out.append(_field(key, prop, placeholder=str(dflt) if dflt is not None else None))
        else:
            out.append(_field(key, prop))
    return out


def _field(key: str, prop: dict, placeholder: str | None = None) -> dict:
    f = {"key": key, "label": first_sentence(prop.get("description", "")) or key}
    opts = enum_options(prop)
    if opts:
        f["options"] = opts
    if placeholder:
        f["placeholder"] = placeholder
    return f


def label_fields(item: dict, value_field: str) -> list:
    """Pick a few human-friendly fields from the response example item."""
    out = []
    for k, v in item.items():
        if k == value_field or k.endswith("_val") or not isinstance(v, str) or not v.strip():
            continue
        out.append(k)
        if len(out) == 3:
            break
    return out


def resolve(spec: dict, annotation: dict, op_key: str, field: str) -> dict | None:
    endpoint = annotation.get("endpoint", "")
    try:
        method, path = endpoint.split(" ", 1)
    except ValueError:
        print(f"  !! {op_key} :: {field}: malformed endpoint {endpoint!r}", file=sys.stderr)
        return None
    src = (spec["paths"].get(path) or {}).get(method.lower())
    if not src:
        print(f"  !! {op_key} :: {field}: source {endpoint} not in spec", file=sys.stderr)
        return None

    resp = (
        src.get("responses", {}).get("200", {}).get("content", {}).get("application/json", {})
    )
    resp_example = resp.get("example") or {}
    data = resp_example.get("data") or {}

    cfg: dict = {"endpoint": endpoint}
    if isinstance(data.get("values"), list):
        cfg["shape"] = "refs"
    elif isinstance(data.get("list"), list):
        cfg["shape"] = "list"
    else:
        cfg["shape"] = "refs" if method == "GET" else "list"

    if cfg["shape"] == "list":
        vf = annotation.get("value_field")
        if not vf:
            print(f"  !! {op_key} :: {field}: list-shaped source needs value_field", file=sys.stderr)
            return None
        cfg["value_field"] = vf
        body_schema = (
            src.get("requestBody", {}).get("content", {}).get("application/json", {})
        )
        cfg["params"] = form_params(body_schema.get("schema") or {}, body_schema.get("example") or {})
        cfg["base_body"] = body_schema.get("example") or {}
        items = data.get("list") or []
        cfg["label_fields"] = label_fields(items[0], vf) if items else []
    return cfg


def collect(spec: dict) -> dict:
    """{ "METHOD /path": { "<field>": cfg } } for every x-value-source."""
    out: dict = {}

    def walk_props(schema: dict, op_key: str):
        for key, prop in (schema.get("properties") or {}).items():
            if not isinstance(prop, dict):
                continue
            if "x-value-source" in prop:
                cfg = resolve(spec, prop["x-value-source"], op_key, key)
                if cfg:
                    out.setdefault(op_key, {})[key] = cfg
            walk_props(prop, op_key)
            if isinstance(prop.get("items"), dict):
                walk_props(prop["items"], op_key)

    for path, methods in spec["paths"].items():
        for method, op in methods.items():
            if not isinstance(op, dict):
                continue
            op_key = f"{method.upper()} {path}"
            body = op.get("requestBody", {}).get("content", {}).get("application/json", {})
            if body.get("schema"):
                walk_props(body["schema"], op_key)
    return out


def main() -> int:
    spec = json.loads(SPEC_FILE.read_text())
    sources = collect(spec)
    n_fields = sum(len(v) for v in sources.values())
    print(f"collected {n_fields} annotated fields across {len(sources)} operations")

    js = json.dumps(sources, ensure_ascii=False, indent=2)
    block = f"{START}\n  var VALUE_SOURCES = {js};\n  {END}"

    text = CUSTOM_JS.read_text()
    if START not in text or END not in text:
        print(f"markers not found in {CUSTOM_JS}", file=sys.stderr)
        return 1
    new = re.sub(
        re.escape(START) + r".*?" + re.escape(END),
        block.replace("\\", "\\\\"),
        text,
        flags=re.DOTALL,
    )
    CUSTOM_JS.write_text(new)
    print(f"wrote VALUE_SOURCES into {CUSTOM_JS.name}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
