import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ContactForm.module.css";

function ContactForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.fields}>
        <div
          className={`${styles.field} ${formData.name ? styles.hasValue : ""}`}
        >
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nume complet"
          />
          <label htmlFor="name"></label>
          <div className={styles.bottomLine}></div>
        </div>

        <div
          className={`${styles.field} ${formData.email ? styles.hasValue : ""}`}
        >
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <label htmlFor="email"></label>
          <div className={styles.bottomLine}></div>
        </div>

        <div
          className={`${styles.field} ${
            formData.message ? styles.hasValue : ""
          }`}
        >
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Scrie mesajul tău"
          ></textarea>
          <label htmlFor="message"></label>
          <div className={styles.bottomLine}></div>
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
