import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import "../CircularText/CircularText.css";

import CircularText from "../../components/CircularText/CircularText";
import LinksFooter from "../LinksFooter/LinksFooter";
import ContactInfo from "../ContactInfo/ContactInfo";
import FollowUs from "../FollowUs/FollowUs";
import RowBottomFooter from "../RowBottomFooter/RowBottomFooter";

const Footer = () => {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.grid}>
        <div className={styles.brand}>
          <CircularText
            text="TECHNOLOGY*PARTS*SOLUTII*SOLIDE*"
            onHover="speedUp"
            spinDuration={20}
            className="custom-class"
          />
          <p className={styles.aboutText}>
            Din 2017 oferim soluții complete de construcții: fundații, structuri
            și finisaje. Proiectare, consultanță și execuție la standard
            european.
          </p>
          <div className={styles.ctaRow}>
            <Link
              className={styles.ctaButton}
              href="/contact"
              aria-label="Cere o ofertă"
            >
              Ofertă
            </Link>
            <Link
              className={styles.ctaButton}
              href="/projects"
              aria-label="Vezi proiecte"
            >
              Proiecte
            </Link>
          </div>
        </div>

        <LinksFooter />

        <ContactInfo />

        <FollowUs />
      </div>
      <RowBottomFooter className={styles.bottomRow} />
    </footer>
  );
};

export default Footer;
