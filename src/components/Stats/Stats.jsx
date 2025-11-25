import styles from "./Stats.module.css";

const Stats = () => {
  const stats = [
    { number: "8+", label: "Ani de Experiență" },
    { number: "150+", label: "Proiecte Finalizate" },
    { number: "200+", label: "Clienți Mulțumiți" },
  ];
  return (
    <section className={styles.statsSection}>
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
          activității, iar portofoliul s-a extins considerabil, motivându-ne să
          avansăm cu încredere către următoarea etapă în evoluția companiei
          noastre!"
        </p>
      </div>
    </section>
  );
};
export default Stats;
