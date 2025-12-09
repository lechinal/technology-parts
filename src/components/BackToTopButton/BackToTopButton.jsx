import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "./BackToTopButton.module.css";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      //* cat am scrollat deja de sus
      const scrollY = window.scrollY;

      //! butonul apare de la 800px
      const shouldShow = scrollY > 800;

      //! si se ascunde cand ajungem la Footer
      //*heightul vizibil al ferestrei ce se vede fara scroll
      const windowHeight = window.innerHeight;
      //* returnez heightul total a documentului, inclusiv partea care nu este vizibila
      const documentHeight = document.documentElement.scrollHeight;
      const isAtFooter = scrollY + windowHeight >= documentHeight - 400;

      //! arata doar daca suntem peste 800px si nu suntem la Footer
      setIsVisible(shouldShow && !isAtFooter);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${styles.backToTop} ${isVisible ? styles.visible : ""}`}
      aria-label="Înapoi sus"
    >
      <FaArrowUp size={24} />
    </button>
  );
};

export default BackToTopButton;
