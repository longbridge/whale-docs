/**
 * Ambient declarations for optional dependencies that ship no types.
 *
 * These packages are listed under `optionalDependencies`: a consumer who does
 * not use the corresponding feature should not have to install them, and we do
 * not want a missing `@types/*` package to fail `astro check` for everyone.
 */

declare module "@pagefind/default-ui" {
  /**
   * Pagefind's bundled search UI. Only the surface DocSearch.astro touches is
   * described; see https://pagefind.app/docs/ui/ for the full option set.
   */
  export class PagefindUI {
    constructor(options: Record<string, unknown>);
    triggerSearch(term: string): void;
    destroy(): void;
  }
}
