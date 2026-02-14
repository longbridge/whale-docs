import { defineConfig } from "vitepress"
// @ts-ignore
import { siteMetadata } from "./site-meta"
import siderbarConfig from "./../scripts/lark-siderber"
import alias from "@rollup/plugin-alias"
const editLinkPattern = "https://github.com/longbridgeapp/whale-docs/edit/main/lark-locales/:path"

// Supported versions
const VERSIONS = ["stable", "lts"]
const DEFAULT_VERSION = "stable"

function getVersionPath(version) {
  return version === DEFAULT_VERSION ? "" : `${version}/`
}

// Custom plugin to handle missing assets gracefully
function ignoreMissingAssetsPlugin() {
  return {
    name: 'ignore-missing-assets',
    load(id) {
      // If asset loading fails, return an empty module instead of throwing
      if (id.includes('assets/') && id.match(/\.(png|jpg|jpeg|gif|svg)$/)) {
        return null
      }
    },
    resolveId(source, importer) {
      // Allow missing asset imports to resolve
      if (source.includes('assets/') && source.match(/\.(png|jpg|jpeg|gif|svg)$/)) {
        return null
      }
    }
  }
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Longbridge Whale Docs",
  base: "/",
  description:
    "Whale 為券商提供一站式、開箱即用的產品和解決方案，包含 App、交易、風控、清結算、CRM、智能營銷等前中後台系統，以及行情報價、資訊、基本面等數據服務，同時 Whale 也集成了銀行通道業務、股票通道業務、期權通道業務、基金通道業務、KYC/AML 等服務",
  ignoreDeadLinks: true,
  appearance: false,
  lang: "zh-HK",
  cleanUrls: true,
  srcExclude: ["SUMMARY.md", "zh-HK.md", "zh-CN.md", "en.md"],
  srcDir: "lark-locales",
  lastUpdated: true,
  vite: {
    build: {
      // Disable inline image, avoid image URL to base64
      assetsInlineLimit: 0,
      // Continue build even with errors
      rollupOptions: {
        onwarn(warning, warn) {
          // Suppress warnings about missing assets
          if (warning.code === 'UNRESOLVED_IMPORT' && warning.message?.includes('assets/')) {
            return
          }
          if (warning.message?.includes('Could not load')) {
            return
          }
          warn(warning)
        },
        // Make build more lenient with errors
        strictDeprecations: false,
      },
    },
    plugins: [
      alias({
        entries: [{ find: "/assets", replacement: "../../assets" }],
      }),
      ignoreMissingAssetsPlugin(),
    ],
  },
  head: [
    [
      "link",
      {
        type: "image/x-icon",
        rel: "icon",
        href: "https://assets.lbctrl.com/uploads/0a9e3791-acd0-4829-9944-4892a874572a/favicon.png",
      },
    ],
    ...siteMetadata,
  ],

  // 定义支持的语言
  // TODO: when en docs ready, uncomment en locale
  locales: {
    "zh-CN": {
      label: "简体中文",
      lang: "zh-CN",
      themeConfig: {
        siteTitle: "帮助中心",
        logoLink: "/zh-CN/docs",
        outline: "deep",
        nav: [
          { text: "Whale 首页", link: "/", target: "_self" },
          {
            text: "OpenAPI",
            link: "https://open.longportapp.com",
          },
          { text: "关于我们", link: "/zh-CN/about", target: "_self" },
          {
            text: "版本",
            items: [
              { text: "稳定版", link: "/zh-CN/docs" },
              { text: "长期维护版", link: "/zh-CN/lts/docs" },
            ],
          },
        ],
        editLink: {
          pattern: editLinkPattern,
          text: "编辑此页",
        },
        lastUpdated: {
          text: "最后更新时间",
        },
        docFooter: {
          prev: "上一篇",
          next: "下一篇",
        },
      },
    },
    "zh-HK": {
      label: "繁体中文",
      lang: "zh-HK",
      themeConfig: {
        siteTitle: "幫助中心",
        logoLink: "/zh-HK/docs",
        nav: [
          { text: "Whale 首頁", link: "/", target: "_self" },
          {
            text: "OpenAPI",
            link: "https://open.longportapp.com/zh-HK",
          },
          { text: "關於我們", link: "/zh-HK/about", target: "_self" },
          {
            text: "版本",
            items: [
              { text: "穩定版", link: "/zh-HK/docs" },
              { text: "長期維護版", link: "/zh-HK/lts/docs" },
            ],
          },
        ],
        editLink: {
          pattern: editLinkPattern,
          text: "编辑此页",
        },
        lastUpdated: {
          text: "最後更新時間",
        },
        docFooter: {
          prev: "上一篇",
          next: "下一篇",
        },
      },
    },
    en: {
      label: "English",
      lang: "en",
      themeConfig: {
        siteTitle: "Help Center",
        logoLink: "/en/docs",
        nav: [
          { text: "Whale Home", link: "/", target: "_self" },
          {
            text: "OpenAPI",
            link: "https://open.longportapp.com/en",
          },
          { text: "About Us", link: "/en/about", target: "_self" },
          {
            text: "Version",
            items: [
              { text: "Stable", link: "/en/docs" },
              { text: "Long-term support", link: "/en/lts/docs" },
            ],
          },
        ],
        editLink: {
          pattern: editLinkPattern,
          text: "Edit this page",
        },
        lastUpdated: {
          text: "Last Updated",
        },
        docFooter: {
          prev: "Previous",
          next: "Next",
        },
      },
    },
  },

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    logo: "https://assets.lbctrl.com/uploads/c6aa665c-62a3-4d6f-a823-e178588c8329/logo-light.png",
    search: {
      provider: "local",
      options: {
        miniSearch: {
          searchOptions: {
            filter: ({ id }) => {
              const currentPath = window.location.pathname
              const isLtsVersion = currentPath.includes("/lts/")

              if (isLtsVersion) {
                return id.includes("/lts/")
              } else {
                return !id.includes("/lts/")
              }
            },
          },
        },
        locales: {
          "zh-CN": {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
          "zh-HK": {
            translations: {
              button: {
                buttonText: "搜尋文件",
                buttonAriaLabel: "搜尋文件",
              },
              modal: {
                noResultsText: "無法找到相關結果",
                resetButtonTitle: "清除查詢條件",
                footer: {
                  selectText: "選擇",
                  navigateText: "切換",
                  closeText: "關閉",
                },
              },
            },
          },
          en: {
            translations: {
              button: {
                buttonText: "Search documents",
                buttonAriaLabel: "Search documents",
              },
              modal: {
                noResultsText: "No results found",
                resetButtonTitle: "Clear search conditions",
                footer: {
                  selectText: "Select",
                  navigateText: "Switch",
                  closeText: "Close",
                },
              },
            },
          },
        },
      },
    },
    sidebar: {
      "zh-HK": siderbarConfig["zh-HK"],
      "zh-HK/lts": siderbarConfig["zh-HK-lts"],
      "zh-CN": siderbarConfig["zh-CN"],
      "zh-CN/lts": siderbarConfig["zh-CN-lts"],
      en: siderbarConfig["en"],
      "en/lts": siderbarConfig["en-lts"],
    },
    outline: [2, 3],
    socialLinks: [],
  },
})
