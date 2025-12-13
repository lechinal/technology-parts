import styles from "./ContactRightContainer.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";

import { CiFacebook } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function ContactRightContainer() {
  return (
    <div className={styles.rightContainer}>
      <div className={styles.callUs}>
        <h2 className={styles.callUsTitle}>Sună-ne</h2>
        <p className={styles.callUsNote}>
          Construcțiile nu așteaptă, nici noi! Echipa noastră vă stă la
          dispoziție zilnic pentru consultații.
        </p>
        <div className={styles.contactInfo}>
          <div className={styles.phoneList}>
            <FaPhoneSquareAlt className={styles.icon} />
            <a href="tel:+40747662877" className={styles.phoneLink}>
              +40 747 662 877
            </a>
            <a href="tel:+40749290226" className={styles.phoneLink}>
              +40 749 290 226
            </a>
          </div>
        </div>
      </div>

      <div className={styles.visitUs}>
        <h2 className={styles.visitUsTitle}>Vizitează-ne</h2>
        <p className={styles.visitUsSubtitle}>
          Programeaza o consultație la sediul nostru.
        </p>

        <div className={styles.locationInfo}>
          <FaLocationDot className={styles.icon} />
          <span className={styles.visitUsText}>
            Str. Garda 41, Alba Iulia, 510338
          </span>
        </div>

        <div className={styles.followUsContainer}>
          <h2 className={styles.followUsTitle}>Urmărește-ne</h2>
          <ul className={styles.socialList}>
            <li>
              <a href="https://facebook.com" aria-label="Facebook">
                <CiFacebook className={styles.socialListIcon} />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" aria-label="Instagram">
                <FaInstagram className={styles.socialListIcon} />
              </a>
            </li>
            <li>
              <a href="https://tiktok.com" aria-label="TikTok">
                <FaTiktok className={styles.socialListIcon} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactRightContainer;
