// src/pages/Work/Work.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Work.module.css";

const Work = ({ previewMode, closeModal }) => {
  const navigate = useNavigate();

  const handleGoToProjects = () => {
    if (closeModal) closeModal();
    navigate("/projects");
  };

  return (
    <section className={styles.work}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2>Proiecte</h2>
          <p>O selecție a proiectelor noastre recente.</p>
        </header>

        <div className={styles.projects}>
          <article className={styles.project}>
            <span className={styles.image}></span>
            <div className={styles.content}>
              <h3>Project One</h3>
              <p>Description of project one.</p>
            </div>
          </article>

          <article className={styles.project}>
            <span className={styles.image}></span>
            <div className={styles.content}>
              <h3>Project Two</h3>
              <p>Description of project two.</p>
            </div>
          </article>

          <article className={styles.project}>
            <span className={styles.image}></span>
            <div className={styles.content}>
              <h3>Project Three</h3>
              <p>Description of project three.</p>
            </div>
          </article>
        </div>

        {/* Butonul apare doar in modal) */}
        {previewMode && (
          <button
            type="button"
            className={styles.submit}
            onClick={handleGoToProjects}
          >
            Projects
          </button>
        )}
      </div>
    </section>
  );
};

export default Work;
