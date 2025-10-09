import React from "react";
import styles from "./ButtonUp.module.css";

const ButtonUp = ({ onBackToTop } = {}) => {
  const handleBackToTop = () => {
    if (typeof onBackToTop === "function") return onBackToTop();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const IconArrowUp = () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      width="18"
      height="18"
    >
      <path
        d="M12 5v14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 12l7-7 7 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  return (
    <div className={styles.actions}>
      <button
        className={styles.topBtn}
        onClick={handleBackToTop}
        aria-label="Începutul paginii"
      >
        <IconArrowUp />
        <span className={styles.topLabel}>Sus</span>
      </button>
    </div>
  );
};

export default ButtonUp;
