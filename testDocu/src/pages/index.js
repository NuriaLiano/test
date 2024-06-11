import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import raw from 'raw.macro'; // Importamos raw.macro para importar el contenido del HTML como texto.

const htmlContent = raw('../web/index.html'); // Importamos el contenido del HTML.

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} /> {/* Renderizamos el HTML personalizado */}
      
      
    </Layout>
  );
}
