import React from "react";
import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className={styles.notFoundPage}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.errorCode}>404</div>
          <h1 className={styles.title}>Pagina Nu A Fost Găsită</h1>
          <p className={styles.message}>
            Ne pare rău, dar pagina pe care o căutați nu există sau a fost
            mutată.
          </p>
          <div className={styles.buttons}>
            <Link to="/" className={`${styles.button} ${styles.primaryButton}`}>
              <span className={styles.buttonIcon}>🏠</span>
              Înapoi Acasă
            </Link>

            <Link
              to="/contact"
              className={`${styles.button} ${styles.secondaryButton}`}
            >
              Contactează-ne
              <span className={styles.arrow}>→</span>
            </Link>
          </div>

          <div className={styles.suggestions}>
            <h2 className={styles.suggestionsTitle}>Pagini Utile:</h2>
            <div className={styles.suggestionsList}>
              <Link to="/services" className={styles.suggestionLink}>
                <span className={styles.linkIcon}>🔧</span>
                <span>Serviciile Noastre</span>
              </Link>
              <Link to="/projects" className={styles.suggestionLink}>
                <span className={styles.linkIcon}>📸</span>
                <span>Galeria de Proiecte</span>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.illustration}>
          <div className={styles.weldingIcon}>⚡</div>
          <div className={styles.sparks}>
            <span className={styles.spark}>✨</span>
            <span className={styles.spark}>✨</span>
            <span className={styles.spark}>✨</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
