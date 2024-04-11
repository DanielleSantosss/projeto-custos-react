import React from "react";

import styles from './Company.module.css'

function Company() {
  return (
    <section className={styles.details}>
      <h1>Sobre a empresa DSanto's</h1>
      <article>
        <p>Olá, muito prazer! <span>Somos a DSanto's (empresa fictícia inventada para fins educacionais).</span></p>

        <p>Estamos comprometidos em fornecer os melhores produtos e serviços para nossos clientes.</p>

        <p>Nossa equipe é formada por profissionais dedicados e apaixonados pelo que fazem, prontos para atender às suas necessidades com excelência.</p>

        <p>Valorizamos a inovação e a criatividade, buscando constantemente novas maneiras de melhorar e aprimorar nossos produtos e processos.</p>

        <p>Estamos aqui para ajudá-lo a alcançar seus objetivos e tornar sua experiência conosco memorável.</p>
      </article>

      <footer>
        <p><span>Seja bem-vindo à DSanto's!</span></p>
      </footer>
    </section>
  );
}

export default Company;