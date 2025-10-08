import React from "react";
import styles from "./LinksFooter.module.css";

const LinksFooter = () => {
  return (
    <nav className={styles.links} aria-label="Linkuri utile">
      <h4 className={styles.sectionTitle}>Linkuri rapide</h4>
      <ul>
        <li>
          <a href="/about">Despre noi</a>
        </li>
        <li>
          <a href="/services">Servicii</a>
        </li>
        <li>
          <a href="/projects">Proiecte</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default LinksFooter;
