import React from "react";
import styles from "./CloseButton.module.css";

const CloseButton = ({ onClose }) => {
  return (
    <div className={styles.closeButtonContainer}>
      <button className={styles.closeButton} onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default CloseButton;
