import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import htmlContent from './custom-home'; // Importamos el contenido del HTML desde custom-home.js

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <div className={clsx('container', styles.customHtml)}>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} /> {/* Renderizamos el HTML personalizado */}
      </div>
    </Layout>
  );
}