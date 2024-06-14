import { themes as prismThemes } from 'prism-react-renderer';
import path from 'path';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cursos | Skilly', // Este es el título por defecto
  tagline: 'Learn is so cool',
  favicon: 'media/icons/ico_skilly.ico', // Ruta correcta del favicon
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',
  organizationName: 'skilly',
  projectName: 'skilly docu',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      disableSwitch: true, // Deshabilitar el cambio de modo claro/oscuro
    },
  },
};

export default config;
