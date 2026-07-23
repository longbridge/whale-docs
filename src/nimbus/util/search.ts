export function openGlobalSearch(query?: string): void {
	document.dispatchEvent(
		new CustomEvent("pagefind:open", { detail: { query } }),
	);
}
