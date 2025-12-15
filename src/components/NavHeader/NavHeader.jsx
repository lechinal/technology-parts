import { useState, useEffect } from "react";
import styles from "./NavHeader.module.css";
import { useNavigate, useLocation } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const NavHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Variabilă globală pentru a ține evidența secțiunii către care navigăm
  useEffect(() => {
    const handleSectionNavigation = () => {
      const hash = window.location.hash;
      if (hash && location.pathname === "/") {
        const sectionId = hash.replace("#", "");
        const element = document.getElementById(sectionId);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 100);
        }
      }
    };

    // Executa la incarcarea paginii
    handleSectionNavigation();

    window.addEventListener("hashchange", handleSectionNavigation);
    return () =>
      window.removeEventListener("hashchange", handleSectionNavigation);
  }, [location]);

  const handleScrollToSection = (sectionId) => {
    setIsOpen(false);

    if (location.pathname === "/") {
      // Suntem deja pe Home
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      // Setează hash în URL pentru bookmarking
      window.history.pushState(null, "", `#${sectionId}`);
    } else {
      // Navigăm la Home cu hash
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <nav className={styles.nav}>
      {/* Hamburger — apare doar pe mobil/tableta */}
      <button
        className={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="menu"
      >
        {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
      </button>

      {/* Lista — devine hidden pe mobil/tablet */}
      <ul className={`${styles.navList} ${isOpen ? styles.open : ""}`}>
        <li>
          <button
            className={styles.linkButton}
            onClick={() => handleScrollToSection("home")}
          >
            Acasa
          </button>
        </li>
        <li></li>
        <li>
          <button
            className={styles.linkButton}
            onClick={() => handleScrollToSection("about")}
          >
            Despre noi
          </button>
        </li>
        <li>
          <button
            className={styles.linkButton}
            onClick={() => handleScrollToSection("services")}
          >
            Servicii
          </button>
        </li>
        <li>
          <button
            className={styles.linkButton}
            onClick={() => {
              navigate("/projects");
              setIsOpen(false);
            }}
          >
            Proiecte
          </button>
        </li>
        <li>
          <button
            className={styles.linkButton}
            onClick={() => {
              navigate("/contact");
              setIsOpen(false);
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavHeader;
