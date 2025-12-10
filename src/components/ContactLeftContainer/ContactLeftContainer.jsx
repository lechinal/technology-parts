import ContactForm from "../ContactForm/ContactForm";
import styles from "./ContactLeftContainer.module.css";

function ContactLeftContainer() {
  return (
    <div className={styles.leftContainer}>
      <div className={styles.leftContainerHeader}>
        <h2 className={styles.leftContainerHeaderTitle}>Send Us a message</h2>
        <p className={styles.leftContainerHeaderText}>
          Trimite-ne un mesaj folosing formularul de mai jos:
        </p>
      </div>
      <div className={styles.leftContainerForm}>
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactLeftContainer;
