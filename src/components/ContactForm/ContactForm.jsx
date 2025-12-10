import { useNavigate } from "react-router-dom";

import styles from "./ContactForm.module.css";

function ContactForm() {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate("/");
  };
  return (
    <form className={styles.form}>
      <div className={styles.fields}>
        <div className={styles.field}>
          <label htmlFor="name">Nume</label>
          <input type="text" id="name" name="name" placeholder="Nume complet" />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" />
        </div>
        <div className={styles.field}>
          <label htmlFor="message">Mesaj</label>
          <textarea
            id="message"
            name="message"
            placeholder="Scrie mesajul tău"
          ></textarea>
        </div>
      </div>

      <ul className={styles.actions}>
        <li>
          <button type="submit" className={styles.actionSubmit}>
            Trimite
          </button>
        </li>

        <li>
          <button
            type="button"
            className={styles.actionGoHome}
            onClick={handleGoHome}
          >
            Închide
          </button>
        </li>
      </ul>
    </form>
  );
}

export default ContactForm;
