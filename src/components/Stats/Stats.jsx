import styles from "./Stats.module.css";

const Stats = () => {
  const stats = [
    { number: "8+", label: "Ani de Experiență" },
    { number: "150+", label: "Proiecte Finalizate" },
    { number: "200+", label: "Clienți Mulțumiți" },
  ];
  return (
    <section className={styles.statsSection}>
      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statCard}>
            <div className={styles.statNumber}>{stat.number}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>

      <div className={styles.quote}>
        <p className={styles.quoteText}>
          "Recomandările constante și un portofoliu de lucrări în continuă
          creștere au asigurat continuitatea activității noastre, motivându-ne
          să avansăm cu încredere către următoarea etapă în evoluția companiei{" "}
          <strong className={styles.highlight}>Technology Parts</strong>.
          Fiecare proiect finalizat este o carte de vizită care reflectă
          dedicarea noastră pentru excelență și inovație."
        </p>
      </div>
    </section>
  );
};
export default Stats;
