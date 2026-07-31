import type { AstroIntegration } from 'astro';

/** docsTheme() options. All optional. */
export interface DocsThemeOptions {
  /**
   * Extra stylesheets to load after the theme's own, for overriding design
   * tokens (`--nb-primary` and friends) or adding site-specific rules.
   *
   * Each entry resolves the way an `import` in your project would: a path
   * relative to the project root (`./src/styles/brand.css`), or a bare package
   * specifier.
   *
   * @example
   *   docsTheme({ customStyles: ['./src/styles/brand.css'] })
   */
  customStyles?: string[];
}

/**
 * Astro integration for the docs theme.
 *
 * Its only job is injecting `customStyles`. Everything else stays explicit by
 * design: base CSS is imported by BaseLayout, MDX components are exported from
 * `./components` for you to pass to `<Content components={…} />`, and the
 * Markdown pipeline is exported from `./markdown` for you to hand to `nimbus()`.
 *
 * It deliberately does not wrap `nimbus()`. You already have to give nimbus your
 * own NimbusConfig, so proxying it here would create a second place where
 * configuration lives.
 *
 *   import { docsTheme } from '@longbridge/astro-theme-docs';
 *   import { hastPlugins } from '@longbridge/astro-theme-docs/markdown';
 *
 *   export default defineConfig({
 *     integrations: [
 *       icon(), react(),
 *       nimbus(nimbusConfig, { markdown: { hastPlugins: hastPlugins() } }),
 *       docsTheme({ customStyles: ['./src/styles/brand.css'] }),
 *     ],
 *   });
 */
export function docsTheme(options: DocsThemeOptions = {}): AstroIntegration {
  const { customStyles = [] } = options;

  return {
    name: '@longbridge/astro-theme-docs',
    hooks: {
      'astro:config:setup': ({ injectScript, config }) => {
        // "page-ssr" runs for every page, and these imports are emitted after
        // BaseLayout's own, so they win at equal specificity.
        //
        // Relative entries must be resolved against the project root first: the
        // injected code becomes a virtual module (astro:scripts/page-ssr.js), so
        // "./src/styles/brand.css" would otherwise be looked up relative to
        // that, and fail. Bare specifiers are passed through untouched.
        for (const href of customStyles) {
          const specifier = href.startsWith('.')
            ? new URL(href, config.root).pathname
            : href;
          injectScript('page-ssr', `import ${JSON.stringify(specifier)};`);
        }
      },
    },
  };
}
