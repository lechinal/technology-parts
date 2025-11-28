import React from "react";
import styles from "./Location.module.css";

import Map from "../Map/Map.jsx";
import { BsPinMapFill } from "react-icons/bs";

const Location = () => {
  return (
    <section className={styles.ctaLocation}>
      <p>Vino să ne cunoști personal</p>
      <p className={styles.locationAddress}>
        <strong>
          <BsPinMapFill /> Technology Parts
        </strong>{" "}
        | Strada Constructorilor 45, București
      </p>
      <p>
        Programează o vizită la sediul nostru pentru o consultanță detaliată și
        să vezi materiale de construcții de calitate.
      </p>
      <div className={styles.mapContainer}>
        <Map />
      </div>
    </section>
  );
};
export default Location;
