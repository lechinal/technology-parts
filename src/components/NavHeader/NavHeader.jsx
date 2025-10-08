import styles from "./NavHeader.module.css";

const NavHeader = ({ openModal }) => {
  return (
    <nav className={styles.nav}>
      <ul>
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
            onClick={() => openModal("services")}
          >
            Services
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
  );
};

export default NavHeader;
