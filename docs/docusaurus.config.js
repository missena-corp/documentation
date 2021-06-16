/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
  },
  title: "Missena documentation",
  tagline: "Conversational & Social media solutions",
  url: "https://missena-corp.github.io/",
  baseUrl: "/documentation/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo_small.png",
  organizationName: "missena-corp",
  projectName: "documentation",
  themeConfig: {
    navbar: {
      title: "Missena",
      logo: {
        alt: "Missena Logo",
        src: "img/logo_small.png",
      },
      items: [
        {
          href: "https://github.com/missena-corp/documentation",
          label: "GitHub",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/missena-corp/documentation",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Missena. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),

          editUrl:
            "https://github.com/missena-corp/documentation/edit/main/docs/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/missena-corp/documentation/edit/main/docs/blog",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
