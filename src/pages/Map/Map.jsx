import React from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Map.module.css";

import { LuMapPinHouse } from "react-icons/lu";

const Map = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.mapOverlay}>
      <div className={styles.mapContainer}>
        <button className={styles.closeBtn} onClick={() => navigate(-1)}>
          ✕
        </button>
        <h3 className={styles.mapTitle}>Locația Noastră</h3>
        <div className={styles.mapPlaceholder}>
          <div className={styles.mapIcon}>
            <LuMapPinHouse />
          </div>
          <p className={styles.mapText}>
            Vizitați-ne la sediul nostru din localitatea Alba Iulia, județul
            Alba pentru consultații directe și discuții despre proiectele
            dumneavoastră.
          </p>
          <Link
            to="https://maps.app.goo.gl/EjgrswfkjiNHgACv5"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapButton}
          >
            Vezi Harta
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Map;
