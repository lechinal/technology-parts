import ContactForm from "../ContactForm/ContactForm";
import styles from "./ContactLeftContainer.module.css";

function ContactLeftContainer() {
  return (
    <div className={styles.leftContainer}>
      <div className={styles.leftContainerHeader}>
        <h2 className={styles.leftContainerHeaderTitle}>
          {" "}
          Completează detaliile pentru consultanța ta gratuită
        </h2>
        <p className={styles.leftContainerHeaderText}>
          Pentru a-ți oferi cea mai bună consultanță pentru proiectul tău de
          construcție, completează formularul cu informațiile de bază. Un
          specialist{" "}
          <strong className={styles.highlight}>Technology Parts</strong> te va
          contacta pentru o discuție detaliată și analiză personalizată.
        </p>
      </div>
      <div className={styles.leftContainerForm}>
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactLeftContainer;
