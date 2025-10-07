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
      <h2 className={styles.title}>Ce am făcut?</h2>
      <p className={styles.intro}>
        În cei 8 ani de experiență, am executat lucrări din următoarele
        categorii:
      </p>
      <ul className={styles.list}>
        <li>Structuri metalice</li>
        <li>Reabilitarea structurilor de zidărie și beton</li>
        <li>Structuri din beton</li>
        <li>Finisaje interioare și lucrări de pavaj</li>
        <li>Structuri de lemn</li>
      </ul>

      <h3 className={styles.subtitle}>Proiecte internaționale</h3>
      <div className={styles.projects}>
        <div>
          <strong>Amazon – Koln, Germania</strong>
          <p>Structură metalică pe 3 etaje, 3600 mp, livrată în 43 zile.</p>
        </div>
        <div>
          <strong>Mercedes – Stuttgart, Germania</strong>
          <p>Demontare fără întreruperea producției, planificare riguroasă.</p>
        </div>
        <div>
          <strong>Garaj – Brașov, România</strong>
          <p>Structură metalică + panouri sandwich.</p>
        </div>
        <div>
          <strong>Fabrica – Gummerbasch, Germania</strong>
          <p>Rafturi industriale pentru industria auto.</p>
        </div>
      </div>

      <h3 className={styles.subtitle}>Proiecte locale – Alba Iulia</h3>
      <div className={styles.projects}>
        <div>
          <strong>Fundatie casa privată</strong>
          <p>Beton armat, cofrare, armare, hidroizolație pensulabilă.</p>
        </div>
        <div>
          <strong>Canal auto – garaj</strong>
          <p>Diafragme din beton, finisaj hidroizolant rezistent la uleiuri.</p>
        </div>
        <div>
          <strong>Casa individuală</strong>
          <p>Zidărie Ytong, șarpantă din lemn, finalizat în 5 luni.</p>
        </div>
        <div>
          <strong>Cameretă vizitare – Petroșani</strong>
          <p>Săpătură manuală, cofrare conductă, hidroizolație pensulabilă.</p>
        </div>
      </div>
      {/* Butonul apare doar in modal) */}
      {previewMode && (
        <div className={styles.buttonBox}>
          <button
            type="button"
            className={styles.button}
            onClick={handleGoToProjects}
          >
            Projects
          </button>
        </div>
      )}
    </section>
  );
};

export default Work;
