import React from "react";
import styles from "./ContactFinalCTA.module.css";
import GradientText from "../GradientText/GradientText";
import { useNavigate } from "react-router-dom";
function ContactFinalCTA() {
  const navigate = useNavigate();

  const handleViewProjects = () => {
    navigate("/projects");
  };
  return (
    <div className={styles.ctaContainer}>
      <h2 className={styles.ctaTitle}>
        <GradientText>Transformă-ți visul în realitate</GradientText>
      </h2>

      <p className={styles.ctaText}>
        De la planificare la finalizare, suntem partenerul tău de încredere în
        construcții. Cu peste 7 ani de experiență și tehnologii moderne,
        transformăm orice idee în proiect concret.
      </p>
      <p className={styles.ctaText}>
        Vezi proiectele finalizate și inspiră-te pentru construcția ta.
      </p>
      <div className={styles.ctaButtonContainer}>
        <button className={styles.ctaButton} onClick={handleViewProjects}>
          Explorează portofoliul
        </button>
      </div>
    </div>
  );
}

export default ContactFinalCTA;
