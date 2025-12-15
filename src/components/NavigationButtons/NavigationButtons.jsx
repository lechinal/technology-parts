import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NavigationButtons.module.css";

const NavigationButtons = () => {
  const navigate = useNavigate();

  const goHome = () => navigate("/");
  const goBack = () => navigate(-1);

  return (
    <div type="button" className={styles.navButtons}>
      <button className={styles.button} onClick={goHome}>
        Acasa
      </button>
      <button type="button" className={styles.button} onClick={goBack}>
        Înapoi
      </button>
    </div>
  );
};

export default NavigationButtons;
