import styles from "./ContactCTA.module.css";

function ContactCTA() {
  return (
    <section className={styles.ctaContactSection}>
      <div className={styles.ctaLeftContactContainer}>
        <h1 className={styles.ctaLeftContainerTitle}>
          cta Contact Section Title
        </h1>
        <p className={styles.ctaLeftContainerText}>cta Contact Section Text</p>
      </div>
      <div className={styles.ctaRightContactContainer}>
        <h2 className={styles.ctaRightContainerTitle}>
          cta Contact Right Title
        </h2>
        <p className={styles.ctaRightContainerText}>cta Right content text</p>
        <p className={styles.ctaRightContainerText}>cta Right content text2</p>
        <p className={styles.ctaRightContainerText}>cta Right content text3</p>
        <p className={styles.ctaRightContainerText}>cta Right content text4</p>
      </div>
    </section>
  );
}

export default ContactCTA;
