import styles from "./LogoHeader.module.css";

import logoWT from "../../assets/logo/logo-wText-small.svg";
import logoText from "../../assets/logo/logo-WhiteText-small.svg";

const LogoHeader = () => {
  return (
    <>
      <div className={styles.logo}>
        <img src={logoWT} alt="logo without text" className={styles.icon} />
      </div>
      <div className={styles.content}>
        <div className={styles.inner}>
          <img src={logoText} alt="logo text" />
        </div>
      </div>
    </>
  );
};
export default LogoHeader;
