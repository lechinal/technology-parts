import React from "react";
import styles from "./Header.module.css";

import NavHeader from "../NavHeader/NavHeader";
import LogoHeader from "../LogoHeader/LogoHeader";

const Header = ({ openModal }) => {
  return (
    <header className={styles.header}>
      <LogoHeader />
      <NavHeader openModal={openModal} />
    </header>
  );
};

export default Header;
