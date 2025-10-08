import React from "react";
import styles from "./Footer.module.css";

// import InfoBadge from "../InfoBadge/InfoBadge";
import LogoFooter from "../LogoFooter/LogoFooter";
import LinksFooter from "../LinksFooter/LinksFooter";
import ContactInfo from "../ContactInfo/ContactInfo";
import Map from "../Map/Map";
import FollowUs from "../FollowUs/FollowUs";
import WorkingHours from "../WorkingHours/WorkingHours";
import LegalInfo from "../LegalInfo/LegalInfo";
import RowBottomFooter from "../RowBottomFooter/RowBottomFooter";

const Footer = () => {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <LogoFooter />
            <p className={styles.about}>
              Din 2017 oferim soluții complete de construcții: fundații,
              structuri și finisaje. Proiectare, consultanță și execuție la
              standard european.
            </p>
            <div className={styles.ctaRow}>
              <a
                className={styles.ctaPrimary}
                href="/contact"
                aria-label="Cere o ofertă"
              >
                Cere o ofertă
              </a>
              <a
                className={styles.ctaGhost}
                href="/projects"
                aria-label="Vezi proiecte"
              >
                Vezi proiecte
              </a>
            </div>
          </div>
          <LinksFooter />
          <div className={styles.contact}>
            <ContactInfo />
            <Map />
          </div>
          <FollowUs />
          <div className={styles.misc}>
            <WorkingHours />
            <LegalInfo />
          </div>
        </div>
        <RowBottomFooter />
      </div>
    </footer>
  );
};

export default Footer;
