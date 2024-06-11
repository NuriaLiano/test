import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import CustomHome from './custom-home'; // Asegúrate de que CustomHome esté correctamente importado

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
      noFooter={true} // Deshabilita el footer
      noNavbar={true} // Deshabilita el navbar
    >
      <CustomHome /> {/* Renderiza el componente CustomHome */}
    </Layout>
  );
}
