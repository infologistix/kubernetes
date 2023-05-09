// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

//const lightCodeTheme = require('prism-react-renderer/themes/github');
//const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cloud Engineering',
  tagline: 'Unsere Serviceleistungen im Überblick',
  favicon: 'https://infologistix.de/wp-content/uploads/cropped-infologistix-Leistungsangebot-Data-Delivery-32x32.png',

  // Set the production url of your site here
  url: 'https://infologistix.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/kubernetes/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
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
    defaultLocale: 'de',
    locales: ['de'],
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
          blogTitle: 'Cloud Engineering Blog',
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
      // Replace with your project's social card
      //image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Cloud Engineering Logo',
          src: 'img/Logo-Mit.png',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Kontakt',
            items: [
              {
                label: 'infologistix GmbH',
                href: 'https://infologistix.de/',
              },
              {
                html:`
                <p>Gutenbergstr. 7 <br> 85748 Garching</p>
                `
              },
            ],
          },
          {
            items: [
              {
                html:`
                <p><br>Telefon: +49 8981885979 <br> Telefax: +49 89 99964206 <br>Mail: info@infologistix.de</p>
                `
              }, 
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} infologistix GmbH, Inc. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;
