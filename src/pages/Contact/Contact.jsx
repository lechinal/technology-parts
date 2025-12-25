import React from "react";
import styles from "./Contact.module.css";

// import NavigationButtons from "../../components/NavigationButtons/NavigationButtons";
import ContactLeftContainer from "../../components/ContactLeftContainer/ContactLeftContainer";
import ContactRightContainer from "../../components/ContactRightContainer/ContactRightContainer";
import ContactCTA from "../../components/ContactCTA/ContactCTA";
import Map from "../Map/Map";
import GradientText from "../../components/GradientText/GradientText";
import { FiHome } from "react-icons/fi";
import BackToHomeButton from "../../components/BackToHomeButton/BackToHomeButton";
import svgExclamation from "../../assets/svg/exclamation-alert.svg";

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <BackToHomeButton />
      <div className={styles.headerContainer}>
        <h1 className={styles.headerTitle}>
          <GradientText>
            Solicită o consultanță{" "}
            <span className={styles.uppercaseText}>
              gratuită{" "}
              <img
                src={svgExclamation}
                alt="Exlamation Alert"
                className={styles.headerSVG}
              />
            </span>
          </GradientText>
        </h1>
      </div>
      <div className={styles.contentContainer}>
        <ContactLeftContainer />
        <ContactRightContainer />
      </div>
      <Map />
      <ContactCTA />
    </section>
  );
};

export default Contact;
