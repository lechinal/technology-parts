import { useState } from "react";
import styles from "./ContactForm.module.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  // 'success' sau 'error'
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage("");

    // Web3Forms endpoint
    const formEndpoint = "https://api.web3forms.com/submit";

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

    //! Verific daca key-ul exista-pentru debugging)
    if (!accessKey) {
      console.error("Web3Forms access key is missing!");
      setSubmitStatus("error");
      setSubmitMessage("Eroare de configurare. Contactează administratorul.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          // Optional, putem adauga campuri noi
          subject: "Nou mesaj de la Technology Parts",
          timestamp: new Date().toISOString(),
          page_url: window.location.href,
          from_name: "Technology Parts Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setSubmitMessage("Mesajul tău a fost trimis cu succes!");

        // resetează formularul
        setFormData({
          name: "",
          email: "",
          message: "",
        });

        // ascunde mesajul după 5 secunde
        setTimeout(() => {
          setSubmitStatus(null);
          setSubmitMessage("");
        }, 5000);
      } else {
        setSubmitStatus("error");
        setSubmitMessage("A apărut o eroare. Te rugăm să încerci din nou.");
        console.error("Web3Forms error:", result.message);
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(
        "Eroare de conexiune. Verifică internetul și încearcă din nou."
      );
      console.error("Submit error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.fields}>
          <div
            className={`${styles.field} ${
              formData.name ? styles.hasValue : ""
            }`}
          >
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nume complet"
              required
              disabled={isSubmitting}
            />
            <label htmlFor="name"></label>
            <div className={styles.bottomLine}></div>
          </div>

          <div
            className={`${styles.field} ${
              formData.email ? styles.hasValue : ""
            }`}
          >
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              disabled={isSubmitting}
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
              required
              disabled={isSubmitting}
              rows={4}
            ></textarea>
            <label htmlFor="message"></label>
            <div className={styles.bottomLine}></div>
          </div>
        </div>

        {/* Mesaje de status */}
        {submitStatus && (
          <div className={`${styles.statusMessage} ${styles[submitStatus]}`}>
            {submitMessage}
          </div>
        )}

        <ul className={styles.actions}>
          <li>
            <button
              type="submit"
              className={styles.actionSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Se trimite..." : "Trimite mesajul"}
            </button>
          </li>
        </ul>

        {/* Text informativ Web3Forms */}
        <p className={styles.privacyNote}>
          Prin trimiterea acestui formular, ești de acord cu{" "}
          <a
            href="https://web3forms.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            politica de confidențialitate
          </a>{" "}
          a Web3Forms.
        </p>
      </form>
    </>
  );
}

export default ContactForm;
