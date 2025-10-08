import React from "react";
import styles from "./Header.module.css";

import NavHeader from "../NavHeader/NavHeader";
import LogoHeader from "../LogoHeader/LogoHeader";

const Header = ({ openModal }) => {
  return (
    <header className={styles.header}>
      {/* <div className={styles.logo}>
        <img src={logoWT} alt="logo without text" className={styles.icon} />
      </div>
      <div className={styles.content}>
        <div className={styles.inner}>
          <img src={logoText} alt="logo text" />
        </div>
      </div> */}
      <LogoHeader />
      <NavHeader openModal={openModal} />
    </header>
  );
};

export default Header;
