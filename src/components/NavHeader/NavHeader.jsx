import { useState } from "react";
import styles from "./NavHeader.module.css";
import { useNavigate } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const NavHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      {/* Hamburger — apare doar pe mobil/tabletă */}
      <button
        className={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="menu"
      >
        {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
      </button>

      {/* Lista — devine hidden pe mobil/tabletă */}
      <ul className={`${styles.navList} ${isOpen ? styles.open : ""}`}>
        <li>
          <button
            className={styles.linkButton}
            onClick={() => {
              scrollToSection("about");
              setIsOpen(false);
            }}
          >
            Despre noi
          </button>
        </li>
        <li>
          <button
            className={styles.linkButton}
            onClick={() => {
              scrollToSection("services");
              setIsOpen(false);
            }}
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
            Projects
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
