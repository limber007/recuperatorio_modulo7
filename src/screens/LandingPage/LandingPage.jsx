// src/screens/LandingPage/LandingPage.jsx
import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>Módulo 7: DESARROLLO FRONTEND CON REACTJS</h1>
      </header>
      <section className="content">
        <h2>Bienvenido</h2>
        <p>
          Este módulo se centra en el uso de <strong>React</strong>, incluyendo la creación de componentes,
          el manejo de <strong>hooks</strong>, y el uso de <strong>Redux</strong>.
        </p>
        <h3>Temas Cubiertos</h3>
        <ul>
          <li>Componentes funcionales y de clase</li>
          <li>Uso de <strong>React hooks</strong> como <strong>useState</strong> y <strong>useEffect</strong></li>
          <li>Creación de custom hooks como <strong>useForm</strong></li>
          <li>Gestión de variables de estado con <strong>useState</strong></li>
          <li>Gestión de estado global con <strong>Redux</strong></li>
          <li>Integración de <strong>Redux</strong> con React</li>
          <li>Manejo de Formularios en React</li>
          <li>Publicando nuestra página con <strong>GitHub Pages</strong></li>
        </ul>
        <h3>Recursos Adicionales</h3>
        <p>
          Para profundizar en los temas cubiertos, consulta los siguientes recursos:
        </p>
      </section>
      <footer>
        <p>&copy; 2024 Módulo 7. USIP.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
