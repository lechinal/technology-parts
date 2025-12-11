import React from "react";
import styles from "./MapInfo.module.css";

import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function MapInfo() {
  return (
    <div className={styles.mapInfo}>
      <p className={styles.mapText}>
        Vizitați-ne la sediul nostru din Alba Iulia pentru consultații:
      </p>
      <div className={styles.mapDetails}>
        <p>
          <FaLocationDot /> Str. Garda 41, Alba Iulia
        </p>
      </div>
    </div>
  );
}

export default MapInfo;
