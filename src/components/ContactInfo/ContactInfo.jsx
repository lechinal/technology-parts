import React from "react";
import styles from "./ContactInfo.module.css";

const ContactInfo = () => {
  return (
    <address className={styles.contact}>
      <h4 className={styles.sectionTitle}>Contact</h4>
      <ul className={styles.contactList}>
        <li>
          <a href="tel:+40740123456">+40 740 123 456</a>
        </li>
        <li>
          <a href="tel:+40740654321">+40 740 654 321</a>
        </li>
        <li>
          <a href="mailto:office@technologyparts.ro">
            office@technologyparts.ro
          </a>
        </li>
        <li className={styles.address}>Str. Constructorilor 25, Alba Iulia</li>
      </ul>
    </address>
  );
};
export default ContactInfo;
