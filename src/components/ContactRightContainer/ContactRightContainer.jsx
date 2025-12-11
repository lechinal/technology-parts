import styles from "./ContactRightContainer.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ContactRightContainer() {
  const navigate = useNavigate();

  const handleViewProjects = () => {
    navigate("/projects");
  };

  return (
    <div className={styles.rightContainer}>
      <div className={styles.callUs}>
        <h2 className={styles.callUsTitle}>Sună-ne</h2>
        <p className={styles.callUsNote}>
          Construcțiile nu așteaptă, nici noi! Echipa noastră vă stă la
          dispoziție zilnic pentru consultații.
        </p>
        <div className={styles.contactInfo}>
          <div className={styles.phoneList}>
            <FaPhoneSquareAlt className={styles.icon} />
            <a href="tel:+40747662877" className={styles.phoneLink}>
              +40 747 662 877
            </a>
            <a href="tel:+40749290226" className={styles.phoneLink}>
              +40 749 290 226
            </a>
          </div>
        </div>
      </div>

      <div className={styles.visitUs}>
        <h2 className={styles.visitUsTitle}>Vizitează-ne</h2>
        <p className={styles.visitUsSubtitle}>
          Programeaza o consultație la sediul nostru.
        </p>
        <div className={styles.locationInfo}>
          <FaLocationDot className={styles.icon} />
          <span className={styles.visitUsText}>
            Str. Garda 41, Alba Iulia, 510338
          </span>
        </div>
        {/* <p className={styles.visitUsNote}>
          Recomandăm programarea în prealabil pentru a vă asigura că un
          specialist este disponibil să vă primească.
        </p> */}
      </div>

      <div className={styles.ctaContainer}>
        <h2 className={styles.ctaTitle}>Transformă-ți visul în realitate</h2>

        <p className={styles.ctaText}>
          De la planificare la finalizare, suntem partenerul tău de încredere în
          construcții. Cu peste 7 ani de experiență și tehnologii moderne,
          transformăm orice idee în proiect concret.
        </p>
        {/* <p className={styles.ctaNote}>
          Vezi proiectele finalizate și inspiră-te pentru construcția ta.
        </p> */}
        <div className={styles.ctaButtonContainer}>
          <button className={styles.ctaButton} onClick={handleViewProjects}>
            Explorează portofoliul
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactRightContainer;
