import { useState, useEffect, useRef } from "react";
import styles from "./Stats.module.css";

const Stats = () => {
  const [counts, setCounts] = useState([0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { number: 8, label: "Ani de Experiență", suffix: "+" },
    { number: 150, label: "Proiecte Finalizate", suffix: "+" },
    { number: 200, label: "Clienți Mulțumiți", suffix: "+" },
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Configuram cate stats numaram simultan
          stats.forEach((stat, index) => {
            const target = stat.number;
            const step = target <= 50 ? 1 : Math.ceil(target / 50); // pași mai mari pentru numere mari
            let current = 0;
            // console.log(step);
            const timer = setInterval(() => {
              current += step;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }

              setCounts((prev) => {
                const newCounts = [...prev];
                newCounts[index] = current;
                return newCounts;
              });
              // viteza animatiei, micsoram pentru mai rapid
            }, 30);
          });
        }
      },
      // cand 30% din sectiune e vizibila
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className={styles.statsSection}>
      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statCard}>
            <div className={styles.statNumber}>
              {counts[index]}
              {stat.suffix}
            </div>
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
