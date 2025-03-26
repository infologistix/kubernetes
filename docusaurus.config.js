/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KubeSpectra',
  tagline: 'Unleashing the Power of Kubernetes <br /> to Illuminate Your Digital Infrastructure',
  favicon: 'img/kubespectra_logo.png',

  // Set the production url of your site here
  // url: 'https://infologistix.github.io',
  url: 'https://kubespectra.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // baseUrl: '/kubernetes/',
  baseUrl: '/',

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
          routeBasePath: '/',
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
    ({
      colorMode: {
        disableSwitch: true,
      },
      navbar: {
        title: 'Home',
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/events', label: 'Events', position: 'left'}, 
        ],
      },
      footer: {
        logo: {
          alt: 'infologistix logo',
          src: './img/infologistix_logo.png',
          href: 'https://infologistix.de/',
          width: 82,
          height: 48,
          style: {float: "right"},
        },
        copyright: `Copyright © ${new Date().getFullYear()} <a href='https://infologistix.de/'>infologistix GmbH</a>, Inc. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;
