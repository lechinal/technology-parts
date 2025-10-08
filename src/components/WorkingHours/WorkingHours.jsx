import styles from "./WorkingHours.module.css";

const WorkingHours = () => {
  return (
    <div className={styles.hours}>
      <h5>Program</h5>
      <p>Lun–Vin: 08:00 — 17:00</p>
      <p>Sâm: 09:00 — 13:00 | Dum: Închis</p>
    </div>
  );
};

export default WorkingHours;
