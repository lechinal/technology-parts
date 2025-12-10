import styles from "./ContactRightContainer.module.css";

function ContactRightContainer() {
  return (
    <div className={styles.rightContainer}>
      <div className={styles.callUs}>
        <h2 className={styles.callUsTitle}>Call Us</h2>
        <p className={styles.callUsText}>suna-ne</p>
      </div>
      <div className={styles.vistUs}>
        <h2 className={styles.visitUsTitle}>Visit Us</h2>
        <p className={styles.visitUsText}>viziteaza-ne la adresa:</p>
      </div>
      <div className={styles.ctaContainer}>
        <h2 className={styles.ctaTitle}>CTA Title</h2>
        <p className={styles.ctaText}>Call To Action </p>
      </div>
    </div>
  );
}

export default ContactRightContainer;
