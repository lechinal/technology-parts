import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

import logoWT from "../../assets/logo/logo-wText-small.svg";
import logoText from "../../assets/logo/logo-WhiteText-small.svg";

const Header = ({ openModal }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logoWT} alt="logo without text" className={styles.icon} />
      </div>
      <div className={styles.content}>
        <div className={styles.inner}>
          <img src={logoText} alt="logo only text" />
        </div>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link className={styles.linkButton} to="/">
              {" "}
              Home{" "}
            </Link>
          </li>
          <li>
            <button
              className={styles.linkButton}
              onClick={() => openModal("about")}
            >
              About
            </button>
          </li>
          <li>
            <button
              className={styles.linkButton}
              onClick={() => openModal("work")}
            >
              Work
            </button>
          </li>

          <li>
            <button
              className={styles.linkButton}
              onClick={() => openModal("contact")}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
