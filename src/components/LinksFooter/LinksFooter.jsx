import React from "react";
import styles from "./LinksFooter.module.css";
import { NavLink } from "react-router-dom";

const LinksFooter = () => {
  return (
    <nav className={styles.links} aria-label="Linkuri utile">
      <h4 className={styles.sectionTitle}>Linkuri rapide</h4>
      <ul>
        <li>
          <NavLink href="/about">Despre noi</NavLink>
        </li>
        <li>
          <NavLink href="/services">Servicii</NavLink>
        </li>
        <li>
          <NavLink href="/projects">Proiecte</NavLink>
        </li>
        <li>
          <NavLink href="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default LinksFooter;
