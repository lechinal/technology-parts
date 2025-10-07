// src/pages/About/About.jsx
import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2>Despre Noi</h2>
          <p className={styles.description}>
            Din anul 2017, fratii Bisboaca au fondat Technology Parts SRL,
            aducand experienta acumulata in Germania si pasiunea pentru lucrari
            de calitate..
          </p>
        </header>
        <p className={styles.description}>
          Technology Parts ofera solutii solide pentru proiectele tale. Ne
          concentram pe calitate, inovatie si satisfactia clientului.
        </p>
        <p>
          Portofoliul nostru include structuri metalice, beton, lemn si finisaje
          interioare. Ne adaptam permanent cerintelor clientilor si suntem
          dedicati excelentei .
        </p>
        <ul className={styles.features}>
          <li>Produse de inalta calitate</li>
          <li>Suport tehnic dedicat</li>
          <li>Livrare rapida si sigura</li>
        </ul>
      </div>
      <button type="button" className={styles.button}>
        Cere o oferta
      </button>
    </section>
  );
};

export default About;
