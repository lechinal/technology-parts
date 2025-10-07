import React from "react";
import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <section className={styles.intro}>
      <h2>Bun venit la Technology Parts</h2>
      <p>Solutii solide și experiență garantată pentru fiecare proiect.</p>
      <button type="submit" className={styles.submit}>
        Contact
      </button>
    </section>
  );
};
export default Intro;
