import React from "react";
import styles from "./Home.module.css";

import Main from "../../components/Main/Main";
import Services from "../Services/Services";
import About from "../About/About";
import Stats from "../../components/Stats/Stats";

const Home = () => {
  return (
    <section id="home" className={styles.home}>
      <Main />
      <About />
      <Services />
      <Stats />
    </section>
  );
};
export default Home;
