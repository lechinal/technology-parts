import React from "react";
import styles from "./ContactInfo.module.css";
import { Link } from "react-router-dom";

import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <address className={styles.contact}>
      <div className={styles.titleContainer}>
        <h4 className={styles.sectionTitle}>Date de contact</h4>
      </div>
      <ul className={styles.contactList}>
        <li className={styles.contactListLink}>
          <a href="tel:+40747662877">
            <FaPhoneSquareAlt className={styles.contactListIcon} /> +40 747 662
            877
          </a>
        </li>
        <li className={styles.contactListLink}>
          <a href="tel:+40749290226">
            {" "}
            <FaPhoneSquareAlt className={styles.contactListIcon} /> +40 749 290
            226
          </a>
        </li>
        <li className={styles.contactListLink}>
          <a href="mailto:technologyparts3@gmail.com">
            <MdEmail className={styles.contactListIcon} />
            technologyparts3@gmail.com
          </a>
        </li>
        <li className={styles.contactListLink}>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Str.+Constructorilor+25,+Alba+Iulia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLocationDot className={styles.contactListIcon} /> Str. Garda 41,
            Alba Iulia
          </a>
        </li>
      </ul>

      <div className={styles.ctaRow}>
        <p className={styles.ctaRowText}>
          Răspundem rapid la solicitări. Scrie-ne sau sună-ne pentru o
          consultanță gratuită.
        </p>
        <Link
          className={styles.ctaButton}
          href="/contact"
          aria-label="Contacteaza-ne"
        >
          Contacteaza-ne
        </Link>
      </div>
    </address>
  );
};
export default ContactInfo;
