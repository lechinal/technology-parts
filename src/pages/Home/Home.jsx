import React from "react";
import styles from "./Home.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main/Main";
import Services from "../Services/Services";
import About from "../About/About";
import Stats from "../../components/Stats/Stats";

const Home = () => {
  return (
    <section className={styles.home}>
      <Header />
      <Main />
      <About />
      <Services />
      <Stats />
      <Footer />
    </section>
  );
};
export default Home;
