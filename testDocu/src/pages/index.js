import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import CustomHome from './custom-home'; // Importamos el componente CustomHome

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <div className={clsx('container', styles.customHtml)}>
        <CustomHome /> {/* Renderizamos el componente CustomHome */}
      </div>
    </Layout>
  );
}
