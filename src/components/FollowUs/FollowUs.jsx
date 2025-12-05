import React from "react";
import styles from "./FollowUs.module.css";

import { CiFacebook } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const FollowUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.titleContainer}>
        <h4 className={styles.sectionTitle}>Urmărește-ne</h4>
      </div>
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
          <a href="https://tiktom.com" aria-label="TikTok">
            <FaTiktok className={styles.socialListIcon} />
          </a>
        </li>
      </ul>
    </section>
  );
};
export default FollowUs;
