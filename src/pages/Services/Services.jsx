import React from "react";
import { useNavigate } from "react-router-dom";

import { FaBuilding, FaIndustry, FaPaintRoller, FaRoad } from "react-icons/fa6";
import { BsBricks, BsTools } from "react-icons/bs";
import { GiWoodFrame } from "react-icons/gi";

import styles from "./Services.module.css";

import { services } from "../../utils/projectsData";

const Services = ({ closeModal }) => {
  const navigate = useNavigate();
  const handleClickOffer = () => {
    navigate("/contact");
    if (typeof closeModal === "function") closeModal();
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
          <h2>Serviciile Noastre</h2>
          <p className={styles.description}>
            Oferim o gama completa de servicii de constructii, de la fundatie
            pana la finisaje. Cu experienta acumulata din 2017 si standardele de
            calitate germane, garantam lucrari solide si durabile.
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
          <p className={styles.ctaText}>
            Ai un proiect in minte? Contacteaza-ne pentru o consultatie gratuita
            si o oferta personalizata.
          </p>
          <button
            type="button"
            className={styles.button}
            onClick={handleClickOffer}
          >
            Cere o oferta
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
