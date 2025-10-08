import styles from "./LegalInfo.module.css";

const LegalInfo = () => {
  return (
    <div className={styles.legalWrap}>
      <p className={styles.legal}>CUI: RO12345678 • J01/123/2017</p>
      <a className={styles.privacy} href="/privacy">
        Politica de confidențialitate
      </a>
    </div>
  );
};

export default LegalInfo;
