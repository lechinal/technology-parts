import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { projectData, projectCategories } from "../../utils/projectsData.js";
import NavigationButtons from "../../components/NavigationButtons/NavigationButtons";
import styles from "./Projects.module.css";
import CloseButton from "../../components/CloseButton/CloseButton.jsx";
// import CloseButton from "../../components/CloseButton/CloseButton.jsx";

const Projects = () => {
  const navigate = useNavigate();

  // 1. Categoria activa pentru filtrare
  const [activeCategory, setActiveCategory] = useState("Toate Proiectele");

  // 2. Filtrarea proiectelor pe baza categoriei
  const filteredProjects = useMemo(() => {
    if (activeCategory === "Toate Proiectele") return projectData;
    return projectData.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className={styles.allProjects}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Toate Proiectele</h1>
          <p>
            O privire detaliată asupra lucrărilor realizate de Technology Parts.
          </p>
        </header>

        {/* Butoanele de filtrare */}
        <div className={styles.categoryFilters}>
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category ? styles.active : undefined
              }
            >
              {category}
            </button>
          ))}
        </div>

        {/* Lista proiectelor */}
        <div className={styles.grid}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <article key={project.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img src={project.images[0]} alt={project.title} />
                </div>
                <div className={styles.info}>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <button
                    onClick={() => navigate(`/projects/${project.id}`)}
                    className={styles.detailsBtn}
                  >
                    Vezi Detalii
                  </button>
                </div>
              </article>
            ))
          ) : (
            <p>
              Nu exista proiecte in categoria "{activeCategory}" deocamdata.
            </p>
          )}
        </div>
      </div>

      {/* Butoanele de navigare */}
      <NavigationButtons />
    </section>
  );
};

export default Projects;
