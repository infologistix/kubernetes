// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

//const lightCodeTheme = require('prism-react-renderer/themes/github');
//const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KubeSpectra',
  tagline: 'Unleashing the Power of Kubernetes to Illuminate Your Digital Infrastructure',
  favicon: 'img/logo_without_background.png',

  // Set the production url of your site here
  url: 'https://infologistix.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/kubernetes/',

  // GitHub pages deployment config.
  organizationName: 'infologistix', // Usually your GitHub org/user name.
  projectName: 'kubernetes', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'KubeSpectra Blog',
          postsPerPage: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: true,
      },
      // Replace with your project's social card
      //image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'KubeSpectra Logo',
          src: 'img/logo_without_background.png',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'light',
        /*links: [
          {
            title: 'Powered by',
            items: [
              {
                label: 'infologistix GmbH',
                href: 'https://infologistix.de/',
              },
            ],
          },
        ],*/
        copyright: `Copyright © ${new Date().getFullYear()} <a href='https://infologistix.de/'>infologistix GmbH</a>, Inc. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;
