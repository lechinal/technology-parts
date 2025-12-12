import styles from "./ContactFAQ.module.css";

function ContactFAQ() {
  return (
    <div className={styles.ctaRightContactContainer}>
      <h2 className={styles.ctaRightContainerTitle}>Întrebări frecvente</h2>
      <ul className={styles.faqList}>
        <li className={styles.faqItem}>
          <div className={styles.faqContent}>
            <h3 className={styles.faqQuestion}>
              Cât durează procesul de consultanță?
            </h3>
            <p className={styles.faqAnswer}>
              O consultanță inițială durează în medie 30-45 de minute.
            </p>
          </div>
        </li>

        <li className={styles.faqItem}>
          <div className={styles.faqContent}>
            <h3 className={styles.faqQuestion}>Este cu adevărat gratuită?</h3>
            <p className={styles.faqAnswer}>
              Da, prima consultanță este 100% gratuită și fără obligații.
            </p>
          </div>
        </li>

        <li className={styles.faqItem}>
          <div className={styles.faqContent}>
            <h3 className={styles.faqQuestion}>
              Ce informații trebuie să pregătesc?
            </h3>
            <p className={styles.faqAnswer}>
              Ideile tale de bază, bugetul estimat și orice schițe/imagini de
              referință.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ContactFAQ;
