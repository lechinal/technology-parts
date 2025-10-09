import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProjectDetails.module.css";
import { projectData } from "../../utils/projectsData.js";
import NavigationButtons from "../../components/NavigationButtons/NavigationButtons";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === id);

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!project)
    return <p>Proiectul nu a fost găsit. Poate a fost mutat sau șters.</p>;

  const images = project.images;

  // Deschide imaginea fullscreen (lightbox)
  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setImageLoaded(false);
  };

  // Închide imaginea fullscreen
  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  // Imagine următoare
  const showNextImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setImageLoaded(false);
  };

  // Imagine anterioară
  const showPrevImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setImageLoaded(false);
  };

  // Navigare cu tastatura (← → + ESC)
  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowRight") showNextImage(e);
      else if (e.key === "ArrowLeft") showPrevImage(e);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, images.length]);

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
            onClick={() => handleImageClick(index)}
            className={styles.thumbnail}
          />
        ))}
      </div>

      {/* LIGHTBOX */}
      {selectedImageIndex !== null && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button className={styles.arrowLeft} onClick={showPrevImage}>
            ❮
          </button>

          <img
            src={images[selectedImageIndex]}
            alt="Fullscreen"
            className={`${styles.lightboxImage} ${
              imageLoaded ? styles.show : ""
            }`}
            onLoad={() => setImageLoaded(true)}
            onClick={(e) => e.stopPropagation()} // prevenim inchiderea la click pe imagine
          />

          <button className={styles.arrowRight} onClick={showNextImage}>
            ❯
          </button>
          <button className={styles.closeBtn} onClick={closeLightbox}>
            ✕
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectDetails;
