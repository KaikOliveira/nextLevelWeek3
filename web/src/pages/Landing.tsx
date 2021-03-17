import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import '../styles/global.css';
import '../styles/pages/landing.css';

import logoImg from '../imagens/logo.svg';

export default function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          {/*<p>Visite ofanatos e mude o dia de muitas crianças.</p>*/}
          <p>Joao o mais noia de todos</p>
          <a href="https://www.instagram.com/mariajulia.placido/">Insta da mais gata</a>

          <p>Lucas BALA BALA via dm</p>
          <a href="https://www.instagram.com/pedro.boim/">Link para DM</a>
        </main>

        <div className="location">
          <strong>São Paulo</strong>
          <span>Quatá</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0, 0.6)" />
        </Link>
      </div>
    </div>
  );
}