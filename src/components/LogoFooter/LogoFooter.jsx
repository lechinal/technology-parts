import React from "react";
import styles from "./LogoFooter.module.css";
import logo from "../../assets/logo/Color-logo-no-bg.svg";

const LogoFooter = () => {
  return (
    <div className={styles.logoWrap}>
      <img
        src={logo}
        alt="Technology Parts"
        className={styles.logo}
        width={300}
      />
    </div>
  );
};

export default LogoFooter;
