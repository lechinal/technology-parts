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
          <h1 className={styles.mainTitle}>
            TEHNOLOGIE. CONSTRUCȚII. PERFORMANȚĂ.
          </h1>
          <h2 className={styles.subtitle}>
            De la fundație la finisaje, construim cu pasiune și expertiză
            germană.
          </h2>

          <div className={styles.ctaButtons}>
            <button
              className={styles.primaryBtn}
              onClick={() => navigate("/projects")}
            >
              Vezi Proiecte
            </button>
            <button
              className={styles.secondaryBtn}
              onClick={() => navigate("/contact")}
            >
              Solicita Ofertă
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
