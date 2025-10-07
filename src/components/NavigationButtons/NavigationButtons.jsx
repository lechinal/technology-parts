import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NavigationButtons.module.css";

const NavigationButtons = () => {
  const navigate = useNavigate();

  const goHome = () => navigate("/");
  const goBack = () => navigate(-1);

  return (
    <div className={styles.navButtons}>
      <button className={styles.btn} onClick={goHome}>
        <i className="fa-solid fa-house"></i> Home
      </button>
      <button className={styles.btn} onClick={goBack}>
        <i className="fa-solid fa-arrow-left"></i> Înapoi
      </button>
    </div>
  );
};

export default NavigationButtons;
