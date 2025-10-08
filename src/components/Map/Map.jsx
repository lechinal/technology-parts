import React from "react";
import styles from "./Map.module.css";

const Map = () => {
  return (
    <div className={styles.mapPreview} aria-hidden="true">
      <div className={styles.mapPlaceholder}>Hartă (preview)</div>
    </div>
  );
};

export default Map;
