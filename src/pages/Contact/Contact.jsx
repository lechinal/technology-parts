import React from "react";

import styles from "./Contact.module.css";

// import NavigationButtons from "../../components/NavigationButtons/NavigationButtons";
import ContactLeftContainer from "../../components/ContactLeftContainer/ContactLeftContainer";
import ContactRightContainer from "../../components/ContactRightContainer/ContactRightContainer";
import ContactCTA from "../../components/ContactCTA/ContactCTA";
import Map from "../Map/Map";

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.headerContainer}>
        <h1 className={styles.headerTitle}>Get in touch</h1>
      </div>
      <section className={styles.contentContainer}>
        <ContactLeftContainer />
        <ContactRightContainer />
      </section>
      <Map />
      <ContactCTA />
    </section>
  );
};

export default Contact;
