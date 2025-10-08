import React, { useState, useRef, useEffect } from "react";
import styles from "./InfoBadge.module.css";
import BsInfos from "./Badges/BsInfos";

/**
 * Props:
 * - content: JSX | string (conținutul din popout)
 * - direction: "top" | "right" | "bottom" | "left" (poziția popout)
 * - size: "sm" | "md" | "lg"
 * - ariaLabel: string
 * - className: string (pentru poziționare custom)
 */
const InfoBadge = ({
  content,
  direction = "top",
  size = "md",
  ariaLabel = "Informații",
  className = "",
}) => {
  const [open, setOpen] = useState(false);
  const badgeRef = useRef(null);

  // close on outside click (useful when opened by click)
  useEffect(() => {
    const onDoc = (e) => {
      if (!badgeRef.current) return;
      if (!badgeRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  // accessibility: toggle on Enter/Space
  const onKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen((s) => !s);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div
      ref={badgeRef}
      className={`${styles.wrapper} ${styles[direction]} ${styles[size]} ${
        open ? styles.open : ""
      } ${className}`}
      onMouseEnter={() => window.innerWidth > 760 && setOpen(true)}
      onMouseLeave={() => window.innerWidth > 760 && setOpen(false)}
    >
      <button
        type="button"
        className={styles.badge}
        aria-label={ariaLabel}
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        onKeyDown={onKey}
      >
        <BsInfos />
      </button>

      <div className={styles.popout} role="dialog" aria-hidden={!open}>
        <div className={styles.popInner}>
          <div className={styles.popContent}>{content}</div>
          <div className={styles.popActions}>
            <a href="/contact" className={styles.popBtn}>
              Contact
            </a>
            <a href="/services" className={styles.popBtnGhost}>
              Servicii
            </a>
          </div>
        </div>
        <div className={styles.arrow} aria-hidden="true" />
      </div>
    </div>
  );
};

export default InfoBadge;

/**     
 * ! Info Badge implementare in componente
 * 
 * <InfoBadge
             content={
               <div>
                 <strong>Te interesează structurile metalice?</strong>
                 <p>
                   Avem experiență în hale industriale —{" "}
                   <em>citește proiectele</em>.
                 </p>
               </div>
             }
             direction="right"
             size="md"
             ariaLabel="Mai multe informații despre structuri metalice"
           />
 * 
 */
