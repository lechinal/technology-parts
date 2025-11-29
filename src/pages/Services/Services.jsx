import React from "react";
import { useNavigate } from "react-router-dom";
import { services } from "../../utils/projectsData";

import { FaBuilding, FaIndustry, FaPaintRoller, FaRoad } from "react-icons/fa6";
import { BsBricks, BsTools } from "react-icons/bs";
import { GiWoodFrame } from "react-icons/gi";

import svgExclamation from "../../assets/svg/exclamation-alert.svg";

import styles from "./Services.module.css";

// import { services } from "../../utils/projectsData";
import GradientText from "../../components/GradientText/GradientText";
import PixelCard from "../../components/PixelCard/PixelCard";

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
      {/* <div className={styles.inner}> */}

      {/* titlle section */}
      <header className={styles.header}>
        <h2 className={styles.sectionTitle}>
          <GradientText animationSpeed={3} showBorder={false}>
            Experiență, Calitate, Inovație.
          </GradientText>
        </h2>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>
            La <strong className={styles.highlight}>Technology Parts </strong>,
            oferim o gamă completă de servicii de construcții, acoperind fiecare
            etapă, de la fundație la finisaje. Cu experiența acumulată din 2017
            și respectând standardele de calitate germane, garantăm lucrări
            solide, durabile și adaptate perfect nevoilor tale.
          </p>
        </div>

        {/* cta section */}
        <div className={styles.ctaSection}>
          <h3 className={styles.ctaSectionTitle}>
            Calitatea noastră vorbește prin{" "}
            <span className={styles.ctaTitleSpan}>rezultate</span>
            <img src={svgExclamation} alt="Exclamation Alert" width={80} />
          </h3>
          <button type="button" className={styles.ctaBtn}>
            Vezi proiectele noastre
          </button>
        </div>
      </header>

      {/* service cards section*/}
      <div className={styles.servicesGrid}>
        {services.map((service) => (
          <PixelCard
            key={service.id}
            variant="blue"
            className={styles.pixelCardWrapper}
          >
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{iconMap[service.icon]}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          </PixelCard>
        ))}
      </div>

      {/* cta section */}
      <div className={styles.cta}>
        <h3 className={styles.ctaTitle}>
          Primește O Estimare{" "}
          <span className={styles.ctaTitleSpanCta}>Personalizată</span>
          <img src={svgExclamation} alt="Exclamation Alert" width={80} />
        </h3>
        <div className={styles.ctaTextContainer}>
          <p className={styles.ctaText}>
            Ești pregătit să pui bazele viitorului tău proiect? Contactează
            echipa noastră pentru a discuta detaliile, pentru o estimare de cost
            gratuită și pentru a vedea cum expertiza noastră poate aduce valoare
            viziunii tale.
          </p>
          <p className={styles.ctaText}>
            Alătură-te celor peste 200 de clienți care și-au transformat ideile
            în realitate prin parteneriatul cu experții noștri specializați.
          </p>
        </div>
        <button
          type="button"
          className={styles.button}
          onClick={handleClickOffer}
        >
          Contactează un Expert
        </button>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Services;
