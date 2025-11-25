import React from "react";
import { useNavigate } from "react-router-dom";

import { FaBuilding, FaIndustry, FaPaintRoller, FaRoad } from "react-icons/fa6";
import { BsBricks, BsTools } from "react-icons/bs";
import { GiWoodFrame } from "react-icons/gi";

import styles from "./Services.module.css";

import { services } from "../../utils/projectsData";

const Services = () => {
  const navigate = useNavigate();
  const handleClickOffer = () => {
    navigate("/contact");
  };

  const iconMap = {
    FaBuilding: <FaBuilding />,
    GiWoodFrame: <GiWoodFrame />,
    FaIndustry: <FaIndustry />,
    BsBricks: <BsBricks />,
    FaPaintRoller: <FaPaintRoller />,
    FaRoad: <FaRoad />,
    BsTools: <BsTools />,
  };

  return (
    <section id="services" className={styles.services}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.sectionTitle}>
            Experiență, Calitate, Inovație.
          </h2>
          <p className={styles.description}>
            La <strong className={styles.highlight}>Technology Parts </strong>,
            oferim o gamă completă de servicii de construcții, acoperind fiecare
            etapă, de la fundație la finisaje. Cu experiența acumulată din 2017
            și respectând standardele de calitate germane, garantăm lucrări
            solide, durabile și adaptate perfect nevoilor tale.
          </p>
        </header>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{iconMap[service.icon]}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <h3 className={styles.ctaTitle}>
            Transformă-ți Viziunea în Realitate!
          </h3>
          <p className={styles.ctaText}>
            Ești pregătit să pui bazele viitorului tău proiect? Contactează
            echipa noastră pentru a discuta detaliile, pentru o estimare de cost
            gratuită și pentru a vedea cum expertiza noastră poate aduce valoare
            viziunii tale.
          </p>
          <button
            type="button"
            className={styles.button}
            onClick={handleClickOffer}
          >
            Contactează un Expert
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
