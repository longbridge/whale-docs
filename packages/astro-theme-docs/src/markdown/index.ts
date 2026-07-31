// Order is load-bearing:
//   - external-links before heading-slugs: the arrow must exist so it can be
//     stripped before slugging.
//   - heading-slugs before autolink-headings: ids must exist before anchors
//     link to them.

import { externalLinks, titleFigure } from "nimbus-docs/markdown";
import type { HastPluginInput } from "nimbus-docs/types";
import mermaid from "./mermaid";
import headingSlugs from "./heading-slugs";
import autolinkHeadings from "./autolink-headings";
import emptyTableHeaders from "./empty-table-headers";
import tableScroll from "./table-scroll";

export {
	mermaid,
	headingSlugs,
	autolinkHeadings,
	emptyTableHeaders,
	tableScroll,
};

/**
 * The theme's rehype pipeline. Pass to nimbus:
 *
 *   nimbus(config, { markdown: { hastPlugins: hastPlugins() } })
 *
 * Satteri's `HastPluginInput` is `HastPluginDefinition | (() => …)`, so these
 * entries are handed over uncalled — they are factories. `externalLinks()` and
 * `titleFigure()` come from nimbus-docs and are invoked because they take their
 * own options first. (The previous shape annotated the array as
 * `HastPluginDefinition[]` and silenced the mismatch with a double assertion;
 * `HastPluginInput[]` is what it always was.)
 */
export function hastPlugins(): HastPluginInput[] {
	return [
		mermaid,
		externalLinks(),
		headingSlugs,
		autolinkHeadings,
		titleFigure(),
		emptyTableHeaders,
		tableScroll,
	];
}
