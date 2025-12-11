import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import styles from "./BackToHomeButton.module.css";

const BackToHomeButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Afișează butonul DOAR pe pagina de Contact
  const isContactPage = location.pathname === "/contact";

  useEffect(() => {
    if (!isContactPage) {
      setIsVisible(false);
      return;
    }

    const toggleVisibility = () => {
      const scrollY = window.scrollY;
      const shouldShow = scrollY > 100; // Apare mai devreme

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isAtFooter = scrollY + windowHeight >= documentHeight - 100;

      setIsVisible(shouldShow && !isAtFooter);
    };

    window.addEventListener("scroll", toggleVisibility);
    // Apelează o dată la mount pentru a seta starea inițială
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [isContactPage]);

  const goToHome = () => {
    navigate("/");
  };

  // Nu renderiza deloc dacă nu suntem pe pagina Contact
  if (!isContactPage) return null;

  return (
    <button
      onClick={goToHome}
      className={`${styles.backToHome} ${isVisible ? styles.visible : ""}`}
      aria-label="Înapoi la pagina principală"
    >
      <FaHome size={20} />
      <span className={styles.buttonText}>Acasă</span>
    </button>
  );
};

export default BackToHomeButton;
