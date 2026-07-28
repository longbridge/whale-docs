/** Wires Collapsible via the disclosure module. */

import { mount, makeDisclosure } from "nimbus-docs/client";

declare global {
	interface HTMLElement {
		__nbDisclosure?: ReturnType<typeof makeDisclosure>;
	}
}

function initCollapsible(root: HTMLElement): () => void {
	const ownedElement = <T extends HTMLElement>(selector: string): T | undefined =>
		Array.from(root.querySelectorAll<T>(selector)).find(
			(element) => element.closest("[data-nb-collapsible]") === root,
		);
	const trigger = ownedElement<HTMLElement>("[data-nb-collapsible-trigger]");
	const content = ownedElement<HTMLElement>("[data-nb-collapsible-content]");

	if (!trigger || !content) return () => {};

	const defaultOpen = root.dataset.nbDefaultOpen === "true";

	const disclosure = makeDisclosure({
		trigger,
		content,
		defaultOpen,
	});
	root.__nbDisclosure = disclosure;

	return () => {
		delete root.__nbDisclosure;
		disclosure.destroy();
	};
}

mount("[data-nb-collapsible]", initCollapsible);
