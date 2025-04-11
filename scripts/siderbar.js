/*
 * read feishu-pages/docs.json loop each children generate siderbar config
 * config example:
  sidebar: [
    {
      text: '简体中文',
      link: '/zh-CN/docs',
      items: [
        { text: 'Introduction', link: '/zh-CN/docs/introduction' },
        { text: 'Getting Started', link: '/zh-CN/docs/getting-started' },
        ...
      ]
    },
    {
      text: '繁体中文',
      link: '/zh-HK/docs',
      items: [
        { text: 'Introduction', link: '/zh-HK/docs/introduction' },
        { text: 'Getting Started', link: '/zh-HK/docs/getting-started' },
        ...
      ]
    }
  ]
 * */
import docsMeta from "../feishu-pages/docs.json"
import docsCnMeta from "../feishu-pages/docs-zh-cn.json"
const hkMetadata = docsMeta.find((doc) => doc.meta?.slug === "zh-HK")
const cnMetadata = docsCnMeta.find((doc) => doc.meta?.slug === "zh-HK")
const enMetadata = docsMeta.find((doc) => doc.meta?.slug === "en")
// Supported versions
const VERSIONS = ["stable", "lts"]
const DEFAULT_VERSION = "stable"

function getVersionPath(version) {
  return version === DEFAULT_VERSION ? "" : `${version}/`
}

function filterNodesByVersion(nodes, version) {
  return nodes
    .filter((node) => {
      // Include if no version specified or version matches
      const nodeVersion = node.meta?.version
      return !nodeVersion || nodeVersion === version
    })
    .map((node) => {
      // Process children recursively
      if (node.children && node.children.length > 0) {
        return {
          ...node,
          children: filterNodesByVersion(node.children, version),
        }
      }
      return node
    })
}

function generateSidebarConfig(metaData, locale = "zh-HK", version = DEFAULT_VERSION) {
  const sidebarConfig = []
  const versionPath = getVersionPath(version)

  metaData.forEach((doc) => {
    const sidebarItem = {
      text: doc.title,
      link: `/${locale}/${versionPath}docs/${doc.slug}`,
    }

    if (doc.has_child) {
      sidebarItem.items = generateSidebarConfig(doc.children, locale, version)
      // 特殊处理 "常见问题" 节点数据，默认折叠显示
      if (doc.parent_node_token === "JIl7wbv6ViOo7IkpuVrcH8GEnKe" || doc.node_token === "JIl7wbv6ViOo7IkpuVrcH8GEnKe") {
        sidebarItem.collapsed = true
      } else {
        sidebarItem.collapsed = doc.depth > 2
      }
    }

    sidebarConfig.push(sidebarItem)
  })

  return sidebarConfig
}

function getSidebarData(metadata, locale = "zh-HK", version = DEFAULT_VERSION) {
  // First filter metadata by version
  if (!metadata) return []

  const filteredChildren = filterNodesByVersion(metadata.children, version)
  const metadataForVersion = {
    ...metadata,
    children: filteredChildren,
  }

  return generateSidebarConfig(metadataForVersion.children, locale, version)
}

// Generate sidebars for all versions and languages
const sidebars = {}

VERSIONS.forEach((version) => {
  const versionKey = version === DEFAULT_VERSION ? "" : `-${version}`

  // Add sidebar config for zh-HK
  sidebars[`zh-HK${versionKey}`] = getSidebarData(hkMetadata, "zh-HK", version)

  // Add sidebar config for zh-CN
  sidebars[`zh-CN${versionKey}`] = getSidebarData(cnMetadata, "zh-CN", version)

  // Add sidebar config for en
  sidebars[`en${versionKey}`] = getSidebarData(enMetadata, "en", version)
})

export default sidebars
