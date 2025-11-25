import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Main.module.css";

const Main = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.main}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <div className={styles.hero}>
          <h1 className={styles.mainTitle}>Construim Visul Tău</h1>
          <p className={styles.subtitle}>De la Fundație la Finisaje</p>

          <div className={styles.description}>
            <p>
              Din anul 2017, reîntorși cu experiență acumulată în Germania,
              frații Bisboaca, Corneliu și Ionuț, au fondat Technology Parts
              SRL, marcând începutul unei activități ingenioase!
            </p>
            <p>
              Cu un spirit adaptabil la cerințele clienților, ne-am concentrat
              permanent pe satisfacerea dorințelor acestora. Fiecare lucrare se
              transformă în propria noastră carte de vizită.
            </p>
          </div>

          <div className={styles.ctaButtons}>
            <button
              onClick={() => navigate("/services")}
              className={styles.secondaryBtn}
            >
              Servicii
            </button>
            <button
              className={styles.secondaryBtn}
              onClick={() => navigate("/projects")}
            >
              Vezi Proiecte
            </button>
            <button
              className={styles.primaryBtn}
              onClick={() => navigate("/contact")}
            >
              Cere Ofertă
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
