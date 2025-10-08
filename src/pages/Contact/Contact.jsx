// src/pages/Contact/Contact.jsx
import React from "react";
import styles from "./Contact.module.css";
import NavigationButtons from "../../components/NavigationButtons/NavigationButtons";

const Contact = ({ previewMode = false, closeModal }) => {
  return (
    <section
      className={`${styles.contact} ${
        previewMode ? styles.modalView : styles.pageView
      }`}
    >
      <NavigationButtons closeModal={closeModal} />
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2>Contact</h2>
          <p>Trimite-ne un mesaj sau contactează-ne direct.</p>
        </header>

        <form className={styles.form}>
          <div className={styles.fields}>
            <div className={styles.field}>
              <label htmlFor="name">Nume</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nume complet"
              />
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
              <button type="submit" className={styles.submit}>
                Trimite
              </button>
            </li>
            {previewMode && (
              <li>
                <button
                  type="button"
                  className={styles.submit}
                  onClick={closeModal}
                >
                  Închide
                </button>
              </li>
            )}
          </ul>
        </form>
      </div>
    </section>
  );
};

export default Contact;
