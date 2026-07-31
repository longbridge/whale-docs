// Renders `pre.mermaid` blocks: lazy-loads mermaid only on pages that have a
// diagram, applies brand theme variables, and adds an "open in new tab" button
// that serves the rendered SVG on its own so the reader can pan and zoom with
// native browser controls. Adapted from cloudflare-docs (src/scripts/mermaid.ts);
// dark mode keys off `[data-mode="dark"]`.

let themeObserver: MutationObserver | null = null;
// Per-<pre> guard: capture source text once, before mermaid replaces innerHTML.
const captured = new WeakSet<HTMLPreElement>();

function uniqueMermaidId(): string {
	const random =
		globalThis.crypto?.randomUUID?.() ??
		`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
	return `mermaid-${random}`;
}

// Serialize the rendered SVG to a standalone document and open it in a new tab.
// The browser then provides free zoom and pan — better than a fixed-size modal
// for large, content-heavy diagrams.
function openInNewTab(container: HTMLElement) {
	const svg = container.querySelector("svg");
	if (!svg) return;

	const clone = svg.cloneNode(true) as SVGSVGElement;
	// Drop the max-width constraint so the standalone SVG uses its natural size.
	clone.removeAttribute("style");
	if (!clone.getAttribute("xmlns")) {
		clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
	}

	const serialized = new XMLSerializer().serializeToString(clone);
	const blob = new Blob([serialized], { type: "image/svg+xml;charset=utf-8" });
	const url = URL.createObjectURL(blob);
	window.open(url, "_blank", "noopener");
	// Release the object URL after the new tab has had time to load it.
	setTimeout(() => URL.revokeObjectURL(url), 60_000);
}

function getFontFamily(): string {
	const computedStyle = getComputedStyle(document.documentElement);
	const font = computedStyle.getPropertyValue("--nb-font-sans").trim();
	return font || "system-ui, -apple-system, sans-serif";
}

function isLightTheme(): boolean {
	return document.documentElement.getAttribute("data-mode") !== "dark";
}

function getPageBackground(): string {
	const style = getComputedStyle(document.documentElement);
	const bg = style.getPropertyValue("--nb-background").trim();
	if (isMermaidSupportedColor(bg)) return bg;
	return isLightTheme() ? "#ffffff" : "#1d1d1d";
}

function showRenderError(diagram: HTMLPreElement): void {
	captureDiagramSource(diagram);
	diagram.textContent = "Diagram failed to render.";
	diagram.setAttribute("data-error", "true");
	diagram.setAttribute("data-processed", "true");
}

function captureDiagramSource(diagram: HTMLPreElement): void {
	if (captured.has(diagram)) return;
	diagram.setAttribute("data-diagram", diagram.textContent as string);
	captured.add(diagram);
}

function isMermaidSupportedColor(value: string): boolean {
	return (
		/^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(value) ||
		/^rgba?\(\s*\d+(?:\.\d+)?%?\s*,\s*\d+(?:\.\d+)?%?\s*,\s*\d+(?:\.\d+)?%?(?:\s*,\s*(?:0|1|0?\.\d+|\d+(?:\.\d+)?%))?\s*\)$/i.test(
			value,
		) ||
		/^hsla?\(\s*-?\d+(?:\.\d+)?(?:deg|rad|turn)?\s*,\s*\d+(?:\.\d+)?%\s*,\s*\d+(?:\.\d+)?%(?:\s*,\s*(?:0|1|0?\.\d+|\d+(?:\.\d+)?%))?\s*\)$/i.test(
			value,
		)
	);
}

function wrapDiagram(diagram: HTMLPreElement, title: string | null) {
	if (diagram.parentElement?.classList.contains("mermaid-container")) {
		return;
	}

	const container = document.createElement("div");
	container.className = "mermaid-container";

	diagram.parentNode?.insertBefore(container, diagram);
	container.appendChild(diagram);

	const expandBtn = document.createElement("button");
	expandBtn.className = "mermaid-expand";
	expandBtn.setAttribute("aria-label", "Open diagram in a new tab");
	expandBtn.setAttribute("title", "Open in a new tab to zoom");
	expandBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="15 3 21 3 21 9"></polyline>
    <polyline points="9 21 3 21 3 15"></polyline>
    <line x1="21" y1="3" x2="14" y2="10"></line>
    <line x1="3" y1="21" x2="10" y2="14"></line>
  </svg>`;
	expandBtn.addEventListener("click", () => openInNewTab(container));
	container.appendChild(expandBtn);

	if (title) {
		const footer = document.createElement("div");
		footer.className = "mermaid-annotation";

		const titleSpan = document.createElement("span");
		titleSpan.className = "mermaid-annotation-title";
		titleSpan.textContent = title;

		const logo = document.createElement("img");
		logo.src = "/logo.svg";
		logo.alt = "Cloudflare";
		logo.className = "mermaid-annotation-logo";

		footer.appendChild(titleSpan);
		footer.appendChild(logo);
		container.appendChild(footer);
	}
}

async function render() {
	const diagrams = document.querySelectorAll<HTMLPreElement>("pre.mermaid");
	if (diagrams.length === 0) return;

	diagrams.forEach(captureDiagramSource);

	let mermaid: typeof import("mermaid").default;
	try {
		({ default: mermaid } = await import("mermaid"));
	} catch (e) {
		diagrams.forEach(showRenderError);
		console.error("Mermaid load failed:", e);
		return;
	}

	const isLight = isLightTheme();
	const fontFamily = getFontFamily();
	const pageBg = getPageBackground();
	const diagramBorder = isLight ? "#d4d4d8" : "#52525b";
	const diagramSurface = isLight ? "#f4f4f5" : "#27272a";
	const diagramLine = isLight ? "#71717a" : "#a1a1aa";

	const lightThemeVars = {
		fontFamily,
		primaryColor: diagramSurface,
		primaryBorderColor: diagramBorder,
		primaryTextColor: "#1d1d1d",
		secondaryColor: "#f2f2f2",
		secondaryBorderColor: "#999999",
		secondaryTextColor: "#1d1d1d",
		tertiaryColor: "#f2f2f2",
		tertiaryBorderColor: "#999999",
		tertiaryTextColor: "#1d1d1d",
		lineColor: diagramLine,
		textColor: "#1d1d1d",
		mainBkg: diagramSurface,
		errorBkgColor: "#ffefee",
		errorTextColor: "#3c0501",
		edgeLabelBackground: pageBg,
		labelBackground: pageBg,
	};

	const darkThemeVars = {
		fontFamily,
		primaryColor: diagramSurface,
		primaryBorderColor: diagramBorder,
		primaryTextColor: "#f2f2f2",
		secondaryColor: "#313131",
		secondaryBorderColor: "#797979",
		secondaryTextColor: "#f2f2f2",
		tertiaryColor: "#313131",
		tertiaryBorderColor: "#797979",
		tertiaryTextColor: "#f2f2f2",
		lineColor: diagramLine,
		textColor: "#f2f2f2",
		mainBkg: diagramSurface,
		background: "#1d1d1d",
		errorBkgColor: "#3c0501",
		errorTextColor: "#ffefee",
		edgeLabelBackground: pageBg,
		labelBackground: pageBg,
	};

	const themeVariables = isLight ? lightThemeVars : darkThemeVars;

	try {
		mermaid.initialize({
			startOnLoad: false,
			theme: "base",
			themeVariables,
			flowchart: {
				htmlLabels: true,
				useMaxWidth: true,
				curve: "linear",
			},
		});
	} catch (e) {
		diagrams.forEach(showRenderError);
		console.error("Mermaid initialize failed:", e);
		return;
	}

	for (const diagram of diagrams) {
		try {
			const def = diagram.getAttribute("data-diagram") as string;

			const { svg } = await mermaid.render(uniqueMermaidId(), def);
			diagram.innerHTML = svg;
			diagram.removeAttribute("data-error");

			const svgElement = diagram.querySelector("svg");
			const titleElement = svgElement?.querySelector("title");
			const title = titleElement?.textContent?.trim() || null;

			wrapDiagram(diagram, title);
			diagram.setAttribute("data-processed", "true");
		} catch (e) {
			showRenderError(diagram);
			console.error("Mermaid render failed:", e);
		}
	}
}

function setup() {
	const diagrams = document.querySelectorAll<HTMLPreElement>("pre.mermaid");
	if (diagrams.length === 0) return;

	if (!themeObserver) {
		themeObserver = new MutationObserver(() => render());
		themeObserver.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["data-mode"],
		});
	}

	render();
}

setup();
document.addEventListener("astro:page-load", setup);
