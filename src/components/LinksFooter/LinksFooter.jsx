import React from "react";
import styles from "./LinksFooter.module.css";
import { NavLink } from "react-router-dom";

const LinksFooter = () => {
  return (
    <nav className={styles.links} aria-label="Linkuri utile">
      <div className={styles.titleContainer}>
        <h4 className={styles.sectionTitle}>Linkuri rapide</h4>
      </div>
      <ul>
        <li>
          <NavLink to="/">Acasa</NavLink>
        </li>
        <li>
          <NavLink to="/#about">Despre noi</NavLink>
        </li>
        <li>
          <NavLink to="/#services">Servicii</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Proiecte</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default LinksFooter;
