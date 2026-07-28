import type { AstroIntegration } from 'astro';

/** docsTheme() 配置选项 */
export interface DocsThemeOptions {
  /**
   * 额外注入的 CSS 文件路径（追加到主题基础样式之后）。
   * 路径为相对于消费方项目根目录的绝对路径或 URL 字符串。
   * @example ['./src/styles/brand.css']
   */
  customStyles?: string[];
}

/**
 * Astro Theme Docs Integration
 * @param options - 主题配置，所有字段可选
 * @returns AstroIntegration 对象，传入 astro.config.ts 的 integrations 数组
 *
 * MDX components from this theme can be registered via:
 *   import { mdxComponents } from 'astro-theme-docs/components';
 */
export function docsTheme(_options: DocsThemeOptions = {}): AstroIntegration {
  return {
    name: 'astro-theme-docs',
    hooks: {
      // Hook is intentionally minimal — CSS is imported by the layout components
      // (BaseLayout.astro), and MDX components are exported from components.ts
      // for consumers to pass explicitly to their MDX <Content> renders.
      'astro:config:setup': (_) => {},
    },
  };
}
