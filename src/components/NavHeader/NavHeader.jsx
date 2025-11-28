import styles from "./NavHeader.module.css";
import { useNavigate } from "react-router-dom";

const NavHeader = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.link}>
          <button
            className={styles.linkButton}
            onClick={() => scrollToSection("about")}
          >
            About
          </button>
        </li>
        <li>
          <button
            className={styles.linkButton}
            onClick={() => scrollToSection("services")}
          >
            Services
          </button>
        </li>
        <li>
          <button
            className={styles.linkButton}
            onClick={() => navigate("/projects")}
          >
            Projects
          </button>
        </li>

        <li>
          <button
            className={styles.linkButton}
            onClick={() => navigate("/contact")}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavHeader;
