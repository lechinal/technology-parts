import ButtonUp from "../ButtonUp/ButtonUp";
import styles from "./RowBottomFooter.module.css";

const RowBottomFooter = () => {
  return (
    <div className={styles.rowBottom}>
      <div className={styles.copy}>
        © {new Date().getFullYear()} Technology Parts. Toate drepturile
        rezervate.
      </div>
      <ButtonUp />
    </div>
  );
};

export default RowBottomFooter;
