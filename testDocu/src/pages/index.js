import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import CustomHome from './custom-home'; // Asegúrate de que CustomHome esté correctamente importado

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      // title={`Cursos | Skilly`} //comentado por que si no se pisa con el title de docusaurus.config.js
      description="Description will go into a meta tag in <head />"
      noFooter={true} // Deshabilita el footer
      noNavbar={true} // Deshabilita el navbar
    >
      <CustomHome /> {/* Renderiza el componente CustomHome */}
    </Layout>
  );
}
