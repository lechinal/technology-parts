import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import "../CircularText/CircularText.css";

import CircularText from "../../components/CircularText/CircularText";
import LinksFooter from "../LinksFooter/LinksFooter";
import ContactInfo from "../ContactInfo/ContactInfo";
import FollowUs from "../FollowUs/FollowUs";
import RowBottomFooter from "../RowBottomFooter/RowBottomFooter";

// import InfoBadge from "../InfoBadge/InfoBadge";
// import LogoFooter from "../LogoFooter/LogoFooter";
// import Map from "../../pages/Map/Map";
// import WorkingHours from "../WorkingHours/WorkingHours";
// import LegalInfo from "../LegalInfo/LegalInfo";

const Footer = () => {
  return (
    <footer className={styles.footer} role="contentinfo">
      {/* <div className={styles.inner}> */}
      <div className={styles.grid}>
        <div className={styles.brand}>
          {/* <LogoFooter /> */}
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
              Cere o ofertă
            </Link>
            <Link
              className={styles.ctaButton}
              href="/projects"
              aria-label="Vezi proiecte"
            >
              Vezi proiecte
            </Link>
          </div>
        </div>

        <LinksFooter />

        <ContactInfo />

        <FollowUs />

        {/* <div className={styles.legalInfoSection}>
          <LegalInfo className={styles.legalInfo} />
        </div> */}
      </div>
      <RowBottomFooter className={styles.bottomRow} />
      {/* </div> */}
    </footer>
  );
};

export default Footer;
