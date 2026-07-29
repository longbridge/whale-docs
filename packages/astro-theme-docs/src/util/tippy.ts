/**
 * Tooltip helper backed by tippy.js.
 *
 * tippy.js is an OPTIONAL dependency of this theme: a docs site that does not
 * use footnote or scroll-to-top tooltips should not have to install it. So the
 * library is pulled in via dynamic `import()` and every failure path degrades
 * to "no tooltip" rather than throwing.
 *
 * The exported signature stays synchronous (returns void, not a Promise) even
 * though the import is async — callers attach tooltips during DOM setup and
 * never await the result, so keeping it fire-and-forget lets call sites stay
 * unchanged. A tooltip simply appears once the chunk has loaded.
 *
 * Consumers must also load `styles/tippy.css` for the tooltip to be styled.
 */

/** Mirrors the subset of tippy's Props we accept, plus our own `hideAfter`. */
type Options = Record<string, unknown> & { hideAfter?: number };

export function addTooltip(
	element: HTMLElement,
	content: string,
	opts?: Options,
): void {
	void (async () => {
		let tippy: typeof import("tippy.js").default;
		try {
			tippy = (await import("tippy.js")).default;
		} catch {
			// tippy.js not installed — tooltips are opt-in, so stay silent.
			return;
		}

		const options: Options = { ...opts };
		if (options.hideAfter) {
			const hideAfter = options.hideAfter as number;
			options.onShow = (instance: { hide: () => void }) => {
				setTimeout(() => {
					instance.hide();
				}, hideAfter);
			};
		}

		tippy(element, {
			content,
			allowHTML: true,
			interactive: true,
			// This is imperfect as it stops you from tabbing into
			// links inside the tooltip, but stops tooltips being
			// cutoff by the sidebar
			// https://atomiks.github.io/tippyjs/v6/faq/#my-tooltip-appears-cut-off-or-is-not-showing-at-all
			appendTo: document.body,
			...options,
		} as Parameters<typeof tippy>[1]);
	})();
}
