// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const config = {
  title: "周盛道",
  tagline: "周盛道的个人站点",
  url: "https://zhoushengdao.github.io",
  baseUrl: "/",
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "log",
  favicon: "favicon.ico",
  organizationName: "zhoushengdao", // Usually your GitHub org/user name.
  projectName: "zhoushengdao.github.io", // Usually your repo name.

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: ({ docPath }) =>
            `https://gitee.com/zhoushengdao/site-docs/edit/main/${docPath}`,
          exclude: ["template.md", "**/template.md"],
        },
        blog: {
          showReadingTime: true,
          editUrl: ({ blogDirPath, blogPath }) =>
            `https://gitee.com/zhoushengdao/site-blog/edit/main/${blogDirPath}/${blogPath}`,
          exclude: ["template.md", "**/template.md"],
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: "周盛道",
      //   logo: {
      //     alt: "My Site Logo",
      //     src: "img/logo.svg",
      //   },
      items: [
        { to: "/blog", label: "博客", position: "left" },
        {
          type: "doc",
          docId: "index",
          position: "left",
          label: "文章",
        },
        {
          href: "https://github.com/zhoushengdao/zhoushengdao.githu.io/",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "工作",
          items: [
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
              label: "博客",
              to: "/blog",
            },
            {
              label: "文章",
              to: "/docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 周盛道. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    autoCollapseSidebarCategories: true,
  },
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
