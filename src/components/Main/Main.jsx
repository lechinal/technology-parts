import React from "react";
import styles from "./Main.module.css";

const Main = () => {
  const stats = [
    { number: "8+", label: "Ani de Experiență" },
    { number: "150+", label: "Proiecte Finalizate" },
    { number: "200+", label: "Clienți Mulțumiți" },
  ];

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
            <button className={styles.primaryBtn}>Cere o Ofertă</button>
            <button className={styles.secondaryBtn}>Vezi Proiecte</button>
            <button className={styles.secondaryBtn}>Localizare</button>
          </div>
        </div>

        <div className={styles.stats}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div className={styles.quote}>
          <p>
            "Recomandările și portofoliul de lucrări au asigurat continuitatea
            activității, iar portofoliul s-a extins considerabil, motivându-ne
            să avansăm cu încredere către următoarea etapă în evoluția companiei
            noastre!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Main;
