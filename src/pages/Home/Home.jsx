import React from "react";
import styles from "./Home.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main/Main";

const Home = ({ openModal }) => {
  return (
    <section className={styles.home}>
      <Header openModal={openModal} />
      <Main />
      <Footer />
    </section>
  );
};
export default Home;
