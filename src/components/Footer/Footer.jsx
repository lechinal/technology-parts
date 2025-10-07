// src/components/Footer/Footer.jsx
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.icons}>
        <li>
          <a href="#" className={`${styles.icon} brands fa-instagram`}></a>
        </li>
        <li>
          <a href="#" className={`${styles.icon} brands fa-facebook-f`}></a>
        </li>
        <li>
          <a href="#" className={`${styles.icon} brands fa-twitter`}></a>
        </li>
        <li>
          <a href="#" className={`${styles.icon} brands fa-github`}></a>
        </li>
      </ul>
      <p className={styles.copyright}>
        &copy; 2025 Technology Parts. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
