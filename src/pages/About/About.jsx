// src/pages/About/About.jsx
import React from "react";
import styles from "./About.module.css";
import { FaAward, FaLightbulb, FaUsers, FaMobileAlt } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { LiaThumbtackSolid } from "react-icons/lia";

import svgQMark from "../../assets/svg/question-mark.svg";
import svgExclamation from "../../assets/svg/exclamation-alert.svg";
import GradientText from "../../components/GradientText/GradientText.jsx";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      {/* <div className={styles.inner}> */}
      <header className={styles.header}>
        <h2 className={styles.headerTitle}>
          <GradientText className={styles.highlightAboutHeader}>
            Construim
          </GradientText>
          Viitorul, Cărămidă cu Cărămidă{" "}
          <img
            src={svgExclamation}
            alt="Exlamation Alert"
            className={styles.headerSVG}
          />
        </h2>
        <div className={styles.headerDescription}>
          <p className={styles.descriptionText}>
            Din anul 2017, reîntorși cu experiență acumulată în Germania, frații
            Corneliu și Ionuț Bisboaca au fondat{" "}
            <strong className={styles.highlight}>Technology Parts</strong>,
            pornind o activitate bazată pe profesionalism, seriozitate și
            atenție constantă la detalii. De la început, obiectivul a fost acela
            de a aduce în piață o abordare modernă și bine organizată.
          </p>
          <p className={styles.descriptionText}>
            În prezent,{" "}
            <strong className={styles.highlight}>Technology Parts</strong>{" "}
            transformă ideile în proiecte solide, prin precizie germană și
            adaptare la cerințele locale. Fiecare lucrare este o dovadă a
            angajamentului nostru pentru calitate și inovație, de la structuri
            din beton, lemn și metal, până la finisaje interioare de nivel
            premium.
          </p>
        </div>
      </header>

      <section className={styles.textContent}>
        <p className={styles.description}>
          Cu un spirit proactiv și o dedicare permanentă, ne concentrăm pe a
          depăși așteptările, nu doar pe a le îndeplini. Încrederea clienților
          noștri, confirmată de recomandările lor și de extinderea constantă a
          portofoliului, ne motivează să avansăm în fiecare an. Continuăm să ne
          perfecționăm procesele, să adoptăm soluții moderne și să explorăm noi
          orizonturi, consolidându-ne poziția pe piața construcțiilor și
          dovedind că seriozitatea și calitatea sunt valori pe care ne putem
          construi viitorul.
        </p>
      </section>

      <div className={styles.keyBenefitsGrid}>
        {/* Cardul 1: Lucrări de Înaltă Calitate */}
        <div className={styles.benefitCard}>
          <div className={styles.benefitIcon}>
            <FaAward />
          </div>
          <div className={styles.benefitContent}>
            <h4 className={styles.benefitTitle}>Lucrări de Înaltă Calitate</h4>
            <p className={styles.benefitDescription}>
              Standarde germane aplicate în fiecare etapă.
            </p>
          </div>
        </div>

        {/* Cardul 2: Soluții Inovatoare */}
        <div className={styles.benefitCard}>
          <div className={styles.benefitIcon}>
            <FaLightbulb />
          </div>
          <div className={styles.benefitContent}>
            <h4 className={styles.benefitTitle}>Soluții Inovatoare</h4>
            <p className={styles.benefitDescription}>
              Integrarea celor mai bune tehnici și materiale.
            </p>
          </div>
        </div>

        {/* Cardul 3: Echipă Dedicată */}
        <div className={styles.benefitCard}>
          <div className={styles.benefitIcon}>
            <FaUsers />
          </div>
          <div className={styles.benefitContent}>
            <h4 className={styles.benefitTitle}>Echipă Dedicată</h4>
            <p className={styles.benefitDescription}>
              Suport tehnic și execuție profesionistă.
            </p>
          </div>
        </div>
      </div>

      <section className={styles.ctaContainer}>
        <div className={styles.ctaLeftSide}>
          <div className={styles.ctaHeader}>
            <FaHandshake className={styles.ctaHeaderIcon} />
            <h4 className={styles.ctaTitle}>
              Gata să-ți transformi viziunea <br /> în{" "}
              <span className={styles.ctaTitleSpan}>
                realitate
                <img src={svgQMark} alt="Question Mark" width={80} />
              </span>
            </h4>
            <p className={styles.ctaSlogan}>
              Cu <strong className={styles.highlight}>Technology Parts</strong>,
              construiești mai mult decât o structură, construiești un
              parteneriat durabil.
            </p>
            <div className={styles.ctaContact}>
              <button type="button" className={styles.primaryBtn}>
                Solicita oferta
              </button>
            </div>
          </div>

          <div className={styles.ctaBenefits}>
            <div className={styles.ctaIconBox}>
              <LiaThumbtackSolid className={styles.ctaIcon} />
              Consultanță gratuită
            </div>
            <div className={styles.ctaIconBox}>
              <LiaThumbtackSolid className={styles.ctaIcon} />
              Proiect personalizat
            </div>
            <div className={styles.ctaIconBox}>
              <LiaThumbtackSolid className={styles.ctaIcon} />
              Răspuns în 24h
            </div>
          </div>
        </div>
      </section>
      {/* </div> */}
    </section>
  );
};

export default About;
