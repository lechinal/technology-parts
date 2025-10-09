import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProjectDetails.module.css";
import { projectData } from "../../utils/projectsData.js";
import NavigationButtons from "../../components/NavigationButtons/NavigationButtons";

const ProjectDetails = () => {
  const { id } = useParams();
  // Gasim proiectul dupa id (string, deoarece am id-uri de genul "ap-001")
  const project = projectData.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project)
    return <p>Proiectul nu a fost găsit. Poate a fost mutat sau șters.</p>;

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };
  /* inchide poza cu tasta ESC */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeLightbox();
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);
  return (
    <section className={styles.projectDetails}>
      <NavigationButtons />
      <h1>{project.title}</h1>
      <p>{project.description}</p>

      <div className={styles.images}>
        {project.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${project.title} ${index + 1}`}
            onClick={() => handleImageClick(img)}
            className={styles.thumbnail}
          />
        ))}
      </div>
      {/*Lightbox */}
      {selectedImage && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <img
            src={selectedImage}
            alt="Fullscreen"
            className={styles.lightboxImage}
          />
          <button className={styles.closeBtn} onClick={closeLightbox}>
            ✕
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectDetails;
