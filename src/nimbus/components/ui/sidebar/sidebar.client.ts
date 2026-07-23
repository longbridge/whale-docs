/** Sidebar runtime: filter, persistence, "/" shortcut. */

import { mount } from "nimbus-docs/client";

const STORAGE_KEY = "sidebar-state";

interface SidebarState {
	hash: string;
	open: boolean[];
	scroll: number;
}

/**
 * A group's own collapse trigger, scoped to its label area — never a
 * descendant's. Matches SidebarGroup.astro's two trigger shapes: the
 * whole label IS the trigger (no landing page), or the trigger sits next
 * to an `<a>` inside the label div (has a landing page). A static-header
 * group (icon set, isStaticHeader) has neither and correctly returns null
 * here instead of falling through to a nested child's trigger.
 */
function ownTrigger(group: HTMLElement): HTMLElement | null {
	return group.querySelector<HTMLElement>(
		":scope > [data-nb-collapsible-trigger], :scope > [data-nb-sidebar-group-label] [data-nb-collapsible-trigger]",
	);
}

/** Every `[data-nb-sidebar-group]` under `root` that owns a direct trigger
 * (i.e. is actually collapsible) — static headers are excluded. */
function ownTriggerGroups(root: HTMLElement): HTMLElement[] {
	return Array.from(
		root.querySelectorAll<HTMLElement>("[data-nb-sidebar-group]"),
	).filter((group) => ownTrigger(group) !== null);
}

function initSidebar(root: HTMLElement): () => void {
	const teardowns: Array<() => void> = [];
	const persist = root.hasAttribute("data-nb-sidebar-persist");

	const filterTeardown = initFilter(root);
	if (filterTeardown) teardowns.push(filterTeardown);

	if (persist) {
		const persistTeardown = initPersistence(root);
		if (persistTeardown) teardowns.push(persistTeardown);
	}

	return () => teardowns.forEach((t) => t());
}

// ---------------------------------------------------------------------------
// Filter
// ---------------------------------------------------------------------------

function initFilter(root: HTMLElement): (() => void) | null {
	const input = root.querySelector<HTMLInputElement>(
		"[data-nb-sidebar-filter-input]",
	);
	// SidebarFilter is rendered *next to* Sidebar (sibling), so also look in
	// the parent — preserves the existing layout where filter sits above.
	const inputElement =
		input ??
		root
			.closest("[data-shared-sidebar-nav]")
			?.querySelector<HTMLInputElement>("[data-nb-sidebar-filter-input]") ??
		root.parentElement?.querySelector<HTMLInputElement>(
			"[data-nb-sidebar-filter-input]",
		) ??
		null;
	if (!inputElement) return null;

	function handleInput() {
		const query = inputElement!.value.trim().toLowerCase();
		if (!query) {
			resetFilter(root);
			return;
		}
		applyFilter(root, query);
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === "Escape") {
			inputElement!.value = "";
			handleInput();
			inputElement!.blur();
		}
	}

	inputElement.addEventListener("input", handleInput);
	inputElement.addEventListener("keydown", handleKeydown);

	return () => {
		inputElement.removeEventListener("input", handleInput);
		inputElement.removeEventListener("keydown", handleKeydown);
		resetFilter(root);
	};
}

function resetFilter(root: HTMLElement): void {
	root
		.querySelectorAll<HTMLElement>("[data-nb-sidebar-hidden]")
		.forEach((el) => {
			el.removeAttribute("data-nb-sidebar-hidden");
		});
	// Reset groups opened by the filter back to their saved state.
	root
		.querySelectorAll<HTMLElement>(
			"[data-nb-sidebar-group][data-nb-opened-by-filter]",
		)
		.forEach((group) => {
			const trigger = group.querySelector<HTMLElement>(
				"[data-nb-collapsible-trigger]",
			);
			trigger?.click();
			group.removeAttribute("data-nb-opened-by-filter");
		});
}

function applyFilter(root: HTMLElement, query: string): void {
	const links = root.querySelectorAll<HTMLElement>("[data-nb-sidebar-link]");
	const groups = root.querySelectorAll<HTMLElement>("[data-nb-sidebar-group]");

	links.forEach((link) => link.setAttribute("data-nb-sidebar-hidden", ""));
	groups.forEach((group) => group.setAttribute("data-nb-sidebar-hidden", ""));

	links.forEach((link) => {
		const text = link.textContent?.toLowerCase() ?? "";
		if (!text.includes(query)) return;
		link.removeAttribute("data-nb-sidebar-hidden");
		revealAncestors(link, root);
	});

	groups.forEach((group) => {
		const label = group.querySelector("[data-nb-sidebar-group-label]");
		const text = label?.textContent?.toLowerCase() ?? "";
		if (!text.includes(query)) return;
		group.removeAttribute("data-nb-sidebar-hidden");
		openGroup(group);
		group
			.querySelectorAll<HTMLElement>(
				"[data-nb-sidebar-link], [data-nb-sidebar-group]",
			)
			.forEach((child) => child.removeAttribute("data-nb-sidebar-hidden"));
	});
}

function revealAncestors(el: HTMLElement, scope: Element): void {
	let parent: HTMLElement | null = el.parentElement;
	while (parent && parent !== scope) {
		if (parent.hasAttribute("data-nb-sidebar-group")) {
			parent.removeAttribute("data-nb-sidebar-hidden");
			openGroup(parent);
		}
		parent = parent.parentElement;
	}
}

function openGroup(group: HTMLElement): void {
	const trigger = group.querySelector<HTMLElement>(
		"[data-nb-collapsible-trigger]",
	);
	if (!trigger) return;
	if (trigger.getAttribute("data-nb-state") === "open") return;
	group.setAttribute("data-nb-opened-by-filter", "");
	trigger.click();
}

// ---------------------------------------------------------------------------
// Persistence (open state + scroll)
// ---------------------------------------------------------------------------

function initPersistence(root: HTMLElement): (() => void) | null {
	// The scrollable container is the closest <aside> or the root itself.
	const scrollHost: HTMLElement = root.closest("aside") ?? root;
	const hash = root.dataset.nbSidebarHash ?? "";

	function readState(): SidebarState {
		// Only track groups that own a *direct* trigger (real collapsible
		// sections). A static-header group (icon set, no trigger of its own —
		// see SidebarGroup.astro's isStaticHeader branch) has none, but an
		// unscoped querySelector here would still find one by descending into
		// its CollapsibleContent and picking up the FIRST nested child's
		// trigger instead — silently recording that child's state under the
		// static header's slot. On restore that mismatch causes the wrong
		// element (an unrelated nested child) to be forced open/closed.
		const groups = ownTriggerGroups(root);
		const open: boolean[] = groups.map(
			(group) => ownTrigger(group)?.getAttribute("data-nb-state") === "open",
		);
		return { hash, open, scroll: scrollHost.scrollTop };
	}

	function save() {
		if (root.closest("[data-mobile-sidebar]")) return;
		try {
			sessionStorage.setItem(STORAGE_KEY, JSON.stringify(readState()));
		} catch {
			// Ignore storage errors (private mode / quota).
		}
	}

	// Observe state changes on each group's trigger.
	const observer = new MutationObserver(save);
	root
		.querySelectorAll<HTMLElement>("[data-nb-collapsible-trigger]")
		.forEach((trigger) => {
			observer.observe(trigger, {
				attributes: true,
				attributeFilter: ["data-nb-state"],
			});
		});

	function handleVisibility() {
		if (document.visibilityState === "hidden") save();
	}
	document.addEventListener("visibilitychange", handleVisibility);
	window.addEventListener("pagehide", save);

	let raf = 0;
	function handleScroll() {
		cancelAnimationFrame(raf);
		raf = requestAnimationFrame(save);
	}
	scrollHost.addEventListener("scroll", handleScroll);

	return () => {
		observer.disconnect();
		document.removeEventListener("visibilitychange", handleVisibility);
		window.removeEventListener("pagehide", save);
		scrollHost.removeEventListener("scroll", handleScroll);
		cancelAnimationFrame(raf);
	};
}

mount("[data-nb-sidebar]", initSidebar);
