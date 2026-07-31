/**
 * Plugin types, derived from nimbus-docs rather than imported from satteri.
 *
 * satteri ships platform-specific native bindings (`@bruits/satteri-*`) and is a
 * runtime dependency of nimbus-docs, which loads it while rendering. Naming it
 * in THIS package's manifest — dependency, peer or dev — makes the installer
 * place a second copy under the package, and the copy nimbus-docs then resolves
 * has no usable binding: the build dies at "generating static routes" with
 * "Cannot find native binding". Verified against a clean clone, where a tree
 * with no satteri entry here builds and one with any entry does not.
 *
 * So this package names satteri nowhere. nimbus-docs re-exports
 * `HastPluginInput` and everything else is reachable from it by inference,
 * which also means these types come from a declared peer instead of relying on
 * satteri being hoisted.
 */
import type { HastPluginInput } from "nimbus-docs/types";
import type { Element, ElementContent, Text } from "hast";

/**
 * A plugin object. `HastPluginInput` is `HastPluginDefinition | (() => …)`, so
 * excluding the callable arm leaves the definition.
 */
export type HastPluginDefinition = Exclude<
	HastPluginInput,
	(...args: never[]) => unknown
>;

/**
 * The context passed to a visitor — second parameter of `element.visit`.
 * `element` accepts either one visitor or an array of them, so the array arm is
 * excluded before indexing.
 */
type ElementVisitor = Exclude<
	NonNullable<HastPluginDefinition["element"]>,
	readonly unknown[]
>;
export type HastVisitorContext = Parameters<
	NonNullable<ElementVisitor["visit"]>
>[1];

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
