import type { HastPluginDefinition, HastVisitorContext } from "satteri";
import type { Element, ElementContent, Text } from "hast";

export type { HastPluginDefinition, HastVisitorContext };
export type { Element, ElementContent, Text };

export const HEADING_TAGS = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;

export function isElement(
	node: { type: string; tagName?: string } | null | undefined,
	tagName?: string,
): node is Element {
	return (
		!!node &&
		node.type === "element" &&
		(tagName === undefined || node.tagName === tagName)
	);
}

export function classNames(node: Element): string[] {
	// hast declares className as `Array<string> | undefined`, which makes the
	// string branch below unreachable to the type checker. Keep it anyway: nodes
	// reaching a hast plugin can come from raw HTML where the attribute arrives
	// as a single space-separated string. Widen the type to say so out loud.
	const cn = node.properties?.className as
		| string
		| Array<string | number>
		| undefined;
	if (Array.isArray(cn)) return cn.map(String);
	if (typeof cn === "string") return cn.split(/\s+/).filter(Boolean);
	return [];
}

