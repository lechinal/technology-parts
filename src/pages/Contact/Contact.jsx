// src/pages/Contact/Contact.jsx
import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2>Contact</h2>
          <p>Trimite-ne un mesaj sau contacteaza-ne direct.</p>
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
                placeholder="Scrie mesajul tau"
              ></textarea>
            </div>
          </div>
          <ul className={styles.actions}>
            <li>
              <button type="submit" className={styles.submit}>
                Trimite
              </button>
            </li>
          </ul>
        </form>
      </div>
    </section>
  );
};

export default Contact;
