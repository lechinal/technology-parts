import React from "react";
import styles from "./Footer.module.css";

import InfoBadge from "../InfoBadge/InfoBadge";
const IconArrowUp = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    width="18"
    height="18"
  >
    <path
      d="M12 5v14"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 12l7-7 7 7"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Footer = ({ onBackToTop } = {}) => {
  const handleBackToTop = () => {
    if (typeof onBackToTop === "function") return onBackToTop();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logoWrap}>
              <span className={styles.logoMark} aria-hidden="true">
                TP
              </span>
              <div className={styles.brandText}>
                <span className={styles.company}>Technology Parts</span>
                <span className={styles.slogan}>
                  Calitate germană • Execuție românească
                </span>
              </div>
            </div>

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

          <nav className={styles.links} aria-label="Linkuri utile">
            <h4 className={styles.sectionTitle}>Linkuri rapide</h4>
            <ul>
              <li>
                <a href="/">Acasă</a>
              </li>
              <li>
                <a href="/services">Servicii</a>
              </li>
              <li>
                <a href="/projects">Proiecte</a>
              </li>
              <li>
                <a href="/about">Despre noi</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>

          <div className={styles.contact}>
            <h4 className={styles.sectionTitle}>Contact</h4>
            <ul className={styles.contactList}>
              <li>
                <a href="tel:+40740123456">+40 740 123 456</a>
              </li>
              <li>
                <a href="tel:+40740654321">+40 740 654 321</a>
              </li>
              <li>
                <a href="mailto:office@technologyparts.ro">
                  office@technologyparts.ro
                </a>
              </li>
              <li className={styles.address}>
                Str. Constructorilor 25, Alba Iulia
              </li>
            </ul>

            <div className={styles.mapPreview} aria-hidden="true">
              <div className={styles.mapPlaceholder}>Hartă (preview)</div>
            </div>
          </div>

          <div className={styles.misc}>
            <h4 className={styles.sectionTitle}>Urmărește-ne</h4>
            <ul className={styles.social}>
              <li>
                <a href="https://facebook.com" aria-label="Facebook">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://instagram.com" aria-label="Instagram">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" aria-label="LinkedIn">
                  LinkedIn
                </a>
              </li>
            </ul>

            <div className={styles.hours}>
              <h5>Program</h5>
              <p>Lun–Vin: 08:00 — 17:00</p>
              <p>Sâm: 09:00 — 13:00 | Dum: Închis</p>
            </div>

            <div className={styles.legalWrap}>
              <p className={styles.legal}>CUI: RO12345678 • J01/123/2017</p>
              <a className={styles.privacy} href="/privacy">
                Politica de confidențialitate
              </a>
            </div>
          </div>
        </div>

        <div className={styles.rowBottom}>
          <div className={styles.copy}>
            © {new Date().getFullYear()} Technology Parts. Toate drepturile
            rezervate.
          </div>

          <div className={styles.actions}>
            <button
              className={styles.topBtn}
              onClick={handleBackToTop}
              aria-label="Începutul paginii"
            >
              <IconArrowUp />
              <span className={styles.topLabel}>Sus</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
