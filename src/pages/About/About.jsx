// src/pages/About/About.jsx
import React from "react";
import styles from "./About.module.css";
import { FaAward, FaLightbulb, FaUsers, FaTrophy } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2>Construim Viitorul, Cărămidă cu Cărămidă.</h2>
          <p className={styles.description}>
            Din anul 2017, reîntorși cu experiență acumulată în Germania, frații
            Corneliu și Ionuț Bisboaca au fondat
            <strong>Technology Parts SRL, marcând</strong>
            începutul unei activități inovatoare și dedicate calității.
          </p>
        </header>
        <p className={styles.description}>
          La <strong>Technology Parts SRL</strong>, marcând transformăm
          viziunile în realitate solidă, îmbinând precizia standardelor germane
          cu adaptabilitatea la nevoile locale. Fiecare proiect este o dovadă a
          angajamentului nostru față de excelență, inovație și satisfacția
          deplină a clientului. Ne mândrim cu un portofoliu diversificat, care
          include structuri din beton, lemn și metal, alături de finisaje
          interioare impecabile.
        </p>
        <p className={styles.description}>
          Cu un spirit proactiv și o dedicare permanentă, ne concentrăm pe a
          depăși așteptările, nu doar pe a le îndeplini. Încrederea clienților
          noștri, confirmată de recomandările și extinderea continuă a
          portofoliului, ne motivează să avansăm constant, explorând noi
          orizonturi și consolidându-ne poziția pe piața construcțiilor.
        </p>
        <div className={styles.keyBenefitsGrid}>
          {/* Cardul 1: Lucrări de Înaltă Calitate */}
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <FaAward />
            </div>
            <h4 className={styles.benefitTitle}>Lucrări de Înaltă Calitate</h4>
            <p className={styles.benefitDescription}>
              Standarde germane aplicate în fiecare etapă.
            </p>
          </div>

          {/* Cardul 2: Soluții Inovatoare */}
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <FaLightbulb />
            </div>
            <h4 className={styles.benefitTitle}>Soluții Inovatoare</h4>
            <p className={styles.benefitDescription}>
              Integrarea celor mai bune tehnici și materiale.
            </p>
          </div>

          {/* Cardul 3: Echipă Dedicată */}
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <FaUsers />
            </div>
            <h4 className={styles.benefitTitle}>Echipă Dedicată</h4>
            <p className={styles.benefitDescription}>
              Suport tehnic și execuție profesionistă.
            </p>
          </div>

          {/* Cardul 4: Satisfacție Garantată */}
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <FaTrophy />
            </div>
            <h4 className={styles.benefitTitle}>Satisfacție Garantată</h4>
            <p className={styles.benefitDescription}>
              Fiecare proiect este cartea noastră de vizită.
            </p>
          </div>
        </div>{" "}
        {/* End keyBenefitsGrid */}
        <p className={styles.finalSlogan}>
          Cu Technology Parts, construiești mai mult decât o structură –
          construiești un parteneriat durabil.
        </p>
      </div>
      <button type="button" className={styles.button}>
        Cere o oferta
      </button>
    </section>
  );
};

export default About;
