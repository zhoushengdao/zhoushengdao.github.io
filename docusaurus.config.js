const { themes } = require("prism-react-renderer");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "周盛道",
  tagline: "周盛道的个人站点",
  url: "https://zhoushengdao.github.io",
  baseUrl: "/",
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "log",
  favicon: "favicon.ico",
  organizationName: "zhoushengdao",
  projectName: "zhoushengdao.github.io",

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: ({ docPath }) =>
            `https://jihulab.com/zhoushengdao/zhoushengdao.github.io/-/edit/main/blog/${docPath}?ref_type=heads`,
        },
        blog: {
          showReadingTime: true,
          editUrl: ({ blogPath }) =>
            `https://jihulab.com/zhoushengdao/zhoushengdao.github.io/-/edit/main/blog/${blogPath}?ref_type=heads`,
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: "周盛道",
      //   logo: {
      //     alt: "My Site Logo",
      //     src: "img/logo.svg",
      //   },
      hideOnScroll: true,
      items: [
        { to: "/blog", label: "博客", position: "left" },
        {
          type: "doc",
          docId: "index",
          position: "left",
          label: "文章",
        },
        {
          type: "search",
          position: "right",
        },
        {
          href: "https://github.com/zhoushengdao/",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "工作",
          items: [
            {
              label: "博客",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/zhoushengdao",
            },
          ],
        },
        {
          title: "业余时间",
          items: [
            {
              label: "文章",
              to: "/docs",
            },
          ],
        },
      ],
      copyright: `版权所有 © ${new Date().getFullYear()} 周盛道。使用 Docusaurus 构建。`,
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 6,
    },
  },
  i18n: {
    defaultLocale: "zh",
    locales: ["zh"],
  },
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"],
        indexPages: true,
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        debug: false,
        offlineModeActivationStrategies: ["always"],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/favicon.ico",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json",
          },
        ],
        injectManifestConfig: {
          globIgnores: ["docs/**", "blog/tags/**"],
        },
      },
    ],
  ],
};

module.exports = config;
