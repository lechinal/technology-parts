import React from "react";
import { useParams } from "react-router-dom";
import styles from "./ProjectDetails.module.css";
import { projectData } from "../../utils/projectsData.js";
import NavigationButtons from "../../components/NavigationButtons/NavigationButtons";

const ProjectDetails = () => {
  const { id } = useParams();

  // Găsim proiectul după id (string, deoarece ai id-uri de genul "ap-001")
  const project = projectData.find((p) => p.id === id);

  if (!project)
    return <p>Proiectul nu a fost găsit. Poate a fost mutat sau șters.</p>;

  return (
    <section className={styles.projectDetails}>
      <NavigationButtons />
      <h1>{project.title}</h1>
      <p>{project.description}</p>

      <div className={styles.images}>
        {project.images.map((img, index) => (
          <img key={index} src={img} alt={`${project.title} ${index + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default ProjectDetails;
