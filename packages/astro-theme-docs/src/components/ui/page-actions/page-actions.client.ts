import { mount } from "nimbus-docs/client";
import tippy, { type Instance } from "tippy.js";

const COPY_LABEL = "Copy page";

/**
 * Wires the page-actions row. Matches production behavior (src/components/
 * PageActions.astro): zaraz `track` on every clickable action, a tippy tooltip
 * on Agent setup, and the Safari-safe clipboard write (the ClipboardItem is
 * constructed synchronously inside the click gesture so Safari accepts the
 * async fetch).
 *
 * Copy / View target the page's `index.md` twin *relatively* — resolved against
 * the current URL — so no per-page prop is needed. On pages without a twin the
 * fetch/navigation 404s (intended until edge Markdown-for-Agents ships).
 */
function initPageActions(root: HTMLElement): () => void {
	const cleanups: Array<() => void> = [];

	// Mintlify-style Markdown twin: /foo/bar/ -> /foo/bar.md.
	const current = new URL(window.location.href);
	current.pathname = `${current.pathname.replace(/\/$/, "")}.md`;
	const mdUrl = current.href;

	// --- Copy as Markdown ---
	const copyBtn = root.querySelector<HTMLButtonElement>(
		"[data-nb-page-actions-copy]",
	);
	const copyIcon = root.querySelector<SVGElement>(
		"[data-nb-page-actions-copy-icon]",
	);
	const checkIcon = root.querySelector<SVGElement>(
		"[data-nb-page-actions-check-icon]",
	);
	const label = root.querySelector<HTMLSpanElement>(
		"[data-nb-page-actions-label]",
	);
	const defaultLabel = label?.textContent ?? COPY_LABEL;

	if (copyBtn) {
		let resetTimer: number | undefined;

		const showState = (state: "copied" | "error") => {
			if (state === "copied") {
				copyIcon?.classList.add("hidden");
				checkIcon?.classList.remove("hidden");
				if (label) label.textContent = "Copied!";
			} else if (label) {
				label.textContent = "Couldn't copy";
			}
			if (resetTimer) window.clearTimeout(resetTimer);
			resetTimer = window.setTimeout(() => {
				copyIcon?.classList.remove("hidden");
				checkIcon?.classList.add("hidden");
				if (label) label.textContent = defaultLabel;
			}, 1500);
		};

		const handleCopy = () => {
			try {
				// Build the ClipboardItem synchronously in the gesture (Safari).
				navigator.clipboard
					.write([
						new ClipboardItem({
							"text/plain": fetch(mdUrl)
								.then((r) => {
									if (!r.ok) throw new Error(String(r.status));
									return r.text();
								})
								.then((t) => new Blob([t], { type: "text/plain" })),
						}),
					])
					.then(() => {
						showState("copied");
					})
					.catch(() => showState("error"));
			} catch {
				showState("error");
			}
		};

		copyBtn.addEventListener("click", handleCopy);
		cleanups.push(() => {
			if (resetTimer) window.clearTimeout(resetTimer);
			copyBtn.removeEventListener("click", handleCopy);
		});
	}

	// --- Agent setup tooltip ---
	const agentLink = root.querySelector<HTMLAnchorElement>(
		"[data-nb-page-actions-agent]",
	);
	if (agentLink) {
		// Direct tippy (not addTooltip) so we hold the instance and can destroy it
		// on teardown, and so opts match prod exactly (no interactive/allowHTML).
		const tip: Instance = tippy(agentLink, {
			content: agentLink.getAttribute("aria-label") ?? "",
			appendTo: () => document.body,
		});

		cleanups.push(() => {
			tip.destroy();
		});
	}

	return () => cleanups.forEach((fn) => fn());
}

mount("[data-nb-page-actions]", initPageActions);
