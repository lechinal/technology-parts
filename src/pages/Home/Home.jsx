import React from "react";
import styles from "./Home.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Home = ({ openModal }) => {
  return (
    <section className={styles.home}>
      <Header openModal={openModal} />
      <Footer />
    </section>
  );
};
export default Home;
