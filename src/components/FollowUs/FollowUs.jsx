import React from "react";
import styles from "./FollowUs.module.css";

import { CiFacebook } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const FollowUs = () => {
  return (
    <section className={styles.section}>
      <h4 className={styles.sectionTitle}>Urmărește-ne</h4>
      <ul className={styles.social}>
        <li>
          <a href="https://facebook.com" aria-label="Facebook">
            <CiFacebook size={35} />
          </a>
        </li>
        <li>
          <a href="https://instagram.com" aria-label="Instagram">
            <FaInstagram size={35} />
          </a>
        </li>
        <li>
          <a href="https://tiktom.com" aria-label="TikTok">
            <FaTiktok size={35} />
          </a>
        </li>
      </ul>
    </section>
  );
};
export default FollowUs;
