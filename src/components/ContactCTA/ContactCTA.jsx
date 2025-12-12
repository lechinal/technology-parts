import ContactFAQ from "../ContactFAQ/ContactFAQ";
import GradientText from "../GradientText/GradientText";
import styles from "./ContactCTA.module.css";

function ContactCTA() {
  return (
    <section className={styles.ctaContactSection}>
      <div className={styles.ctaLeftContactContainer}>
        <h1 className={styles.ctaLeftContainerTitle}>
          <GradientText>Mai ai nelămuriri ?</GradientText>
        </h1>
        <p className={styles.ctaLeftContainerText}>
          Consultanța noastră gratuită este primul pas spre proiectul tău visat.
          Contactează-ne pentru discuții detaliate și soluții personalizate.
        </p>
      </div>
      <ContactFAQ />
    </section>
  );
}

export default ContactCTA;
