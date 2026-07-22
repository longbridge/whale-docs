import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';
import starlightOpenAPI from 'starlight-openapi';
import starlightScrollToTop from 'starlight-scroll-to-top';
import { apiSidebarPlaceholder, buildSidebar } from './src/lib/navigation.ts';

export default defineConfig({
  site: 'https://docs.longportwhale.com',
  trailingSlash: 'always',
  markdown: {
    processor: unified(),
  },
  integrations: [
    starlight({
      title: 'Whale Docs',
      description: 'Longport Whale documentation',
      defaultLocale: 'en',
      locales: {
        en: { label: 'English', lang: 'en' },
        'zh-cn': { label: '简体中文', lang: 'zh-CN' },
        'zh-hk': { label: '繁體中文', lang: 'zh-HK' },
      },
      logo: {
        light: './logo/whale-light.png',
        dark: './logo/whale-dark.png',
        replacesTitle: true,
      },
      favicon: '/logo/whale-mark.png',
      sidebar: buildSidebar(),
      plugins: [
        starlightImageZoom(),
        starlightScrollToTop({
          smoothScroll: true,
          threshold: 360,
          showProgressRing: true,
          progressRingColor: '#7245F2',
          tooltipText: {
            en: 'Back to top',
            'zh-CN': '返回顶部',
            'zh-TW': '返回頂部',
          },
        }),
        starlightOpenAPI([
          {
            base: 'en/broker-api/reference',
            schema: './openapi.en.json',
            sidebar: { group: apiSidebarPlaceholder, label: 'API Reference', operations: { badges: true } },
          },
          {
            base: 'zh-cn/broker-api/reference',
            schema: './openapi.zh-CN.json',
            sidebar: { group: apiSidebarPlaceholder, label: 'API 参考', operations: { badges: true } },
          },
          {
            base: 'zh-hk/broker-api/reference',
            schema: './openapi.zh-HK.json',
            sidebar: { group: apiSidebarPlaceholder, label: 'API 參考', operations: { badges: true } },
          },
        ]),
      ],
      customCss: ['./src/styles/whale.css'],
      components: {
        Header: './src/components/Header.astro',
        Sidebar: './src/components/Sidebar.astro',
        PageTitle: './src/components/PageTitle.astro',
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/longbridge/whale-docs' },
      ],
    }),
  ],
});
