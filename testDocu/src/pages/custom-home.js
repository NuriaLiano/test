import React from 'react';

const CustomHome = () => {
  return (
    <>
      <header>
        <section className="logo-container">
          <a href="https://www.cursos.skilly.es" target="_blank" rel="noopener noreferrer">
            <img src="/media/img/7AC943_black_transparent.png" alt="logo de skilly" />
          </a>
        </section>
        <section className="menu-container">
          <ul className="header-list menulist">
            <li><a href="roles.html" rel="noopener noreferrer">Roles { '🥷' }</a></li>
            <li><a href="categories.html" rel="noopener noreferrer">Categorías { '🗂️' } </a></li>
            <li><a href="fundamental.html" rel="noopener noreferrer">Fundamentos { '🌳' }</a></li>
            <li><a href="setup.html" rel="noopener noreferrer">Setup { '⚙️' }</a></li>
            <li><a href="roadmap.html" rel="noopener noreferrer">Roadmap { '🗺️' }</a></li>
            <li><a href="https://www.cal.com/skilly" rel="noopener noreferrer" id="bookingClasses">Reserva tu clase { '👩‍🏫' }</a></li>
          </ul>
        </section>
      </header>
      <main className="main-container">
        <div className="banner-index">
          <h1>Potencia tus skills{'🚀'}</h1>
          <h1>Aprende de verdad</h1>
        </div>
        <div className="info">
          <div className="info-container">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam itaque dolore error eum praesentium magni!</p>
            <a href="" className="button-general">Ver más</a>
          </div>
        </div>
      </main>
      <div className="courses-container">
        <h2 className="title2">Cursos</h2>
        <div className="text-courses-container">
          <p>Investiga los cursos por categoria, rol, temas o échalos un vistazo a todos</p>
          <p className="whisper">¡Revisa los fundamentos, nunca viene mal un repaso {'😉'}!</p>
        </div>
        <div className="cards">
          <div className="card-principal">
            <a href="roles.html" className="card-big" id="role">
              <h3>Roles</h3>
              <p>Fórmate con nuestra selección de cursos enfocados a un determinado rol.</p>
            </a>
            <a href="categories.html" className="card-big" id="categories">
              <h3>Categorías</h3>
              <p>Busca tu próximo desafío organizado por categoría.</p>
            </a>
            <a href="all-courses.html" className="card-big" id="categories">
              <h3>Todos los cursos</h3>
              <p>Echa un vistazo a todos los cursos</p>
            </a>
          </div>
          <div className="card-complementary">
            <a href="https://www.example.com/fundamental" className="card" id="fundamental">
              <h4>Fundamentos</h4>
              <div className="card-info">
                <p>Ideales para un primer acercamiento o incluso para una lectura ligera</p>
              </div>
            </a>
            <a href="https://www.example.com/setup" className="card" id="setup">
              <h4>Herramientas y configuración</h4>
              <div className="card-info">
                <p>Chequea cómo configurar tu IDE, tu pc o que usamos en Skilly</p>
              </div>
            </a>
            <a href="https://www.example.com/roadmap" className="card" id="roadmap">
              <h4>Roadmap</h4>
              <div className="card-info">
                <p>Descarga o revisa los roadmap de cada rol o tecnología</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <article className="about-skilly">
        <h2 className="title2">¿Qué es Skilly?</h2>
        <div className="about-container">
          <div className="about-info-container">
            <p>Skilly es una forma diferente de aprender informática. Aquí no seguimos los típicos y terroríficos "powerpoints" ni esas explicaciones que duermen. En cambio, seguimos nuestra propia metodología, <span className="markedText">Modo Historia&trade;</span> desarrollada a lo largo de <span className="markedText">¡10 años!</span> de experiencia tanto como profe como estudiante, y basada en el "feedback" y experiencias de nuestros alumnos. Ofrecemos clases dinámicas, colaborativas, divertidas, centradas en aprender y comprender las bases de la técnologia.</p>
            <p>Disponemos de una <span className="markedText">plataforma donde los alumnos encontrarán toda la documentación que necesiten</span>, adaptada a sus necesidades, para realizar los ejercicios, simulaciones de examen, ejercicios, "cheatsheets", libros y multitud de recursos complementarios. <span className="markedText">Todos los recursos que ofrecemos en Skilly están mantenidos y actualizados</span> para que los alumnos puedan añadir esta documentación a su "navaja suiza" de recursos para la vida laboral.</p>
            <p>Complementamos la ayuda a los alumnos con un <span className="markedText">canal de Whatsapp, privado para cada alumno, disponible 24/7</span> donde podrán consultar cualquier duda al profe fuera del horario de las clases</p>
            <p>En Skilly, nos centramos en colaborar con las comunidades, tanto de desarrollo como de sistemas pero sobre todo nos implicamos en la comunidad de alumnos para mantener un seguimiento y retroalimentarnos de sus opiniones y consejos.</p>
            <p>Tenemos un lema:<span id="motto"> ¡No hay compromiso, solo oportunidades de crecimiento!</span> asique eres completamente libre de entrar y salir cuando quieras , siempre te recibiremos con los brazos abiertos. </p>
          </div>
          <img src="/media/about.jpg" alt="" />
        </div>
        <a href="" className="button-general">Conócenos {'👀'}</a>
      </article>
      <footer>
        <img src="/media/img/7AC943_white_transparent.png" alt="logo_skilly" />
        <ul className="footer-list" id="footer-menu">
          <li><a href="roles.html">Roles</a></li>
          <li><a href="categorias.html">Categorías</a></li>
          <li><a href="iniciales.html">Iniciales</a></li>
        </ul>
        <ul className="footer-list" id="footer-legal">
          <li><a href="#">Aviso legal</a></li>
          <li><a href="#">Condiciones generales</a></li>
          <li><a href="#">Política de privacidad</a></li>
          <li><a href="#">Política de cookies</a></li>
          <li><a href="#">Política de cancelación</a></li>
        </ul>
        <p>Desde Cantabria con mucho {'💚'}</p>
      </footer>
      <a href="#top" id="to-top-button">↑</a>
    </>
  );
};

export default CustomHome;
