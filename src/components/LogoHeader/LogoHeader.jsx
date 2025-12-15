import styles from "./LogoHeader.module.css";

import logoWT from "../../assets/logo/logo-wText-small.svg";
import logoText from "../../assets/logo/logo-WhiteText-small.svg";
import { useNavigate } from "react-router-dom";

const LogoHeader = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className={styles.logo} onClick={handleLogoClick}>
        <img
          src={logoWT}
          alt="logo without text"
          width={65}
          className={styles.icon}
        />
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
