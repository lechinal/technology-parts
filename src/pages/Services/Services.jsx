import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Services.module.css";

const Services = ({ closeModal }) => {
  const navigate = useNavigate();
  const handleClickOffer = () => {
    navigate("/contact");
    if (typeof closeModal === "function") closeModal();
  };

  const services = [
    {
      id: 1,
      title: "Constructii beton",
      description:
        "Structuri solide din beton armat pentru fundatii, stalpi, grinzi si plansee. Executam lucrari de calitate cu respectarea standardelor tehnice.",
      icon: "🏗️",
    },
    {
      id: 2,
      title: "Constructii lemn",
      description:
        "Case si structuri din lemn, de la schelet la finisaje. Utilizam materiale certificate si tehnici moderne de constructie.",
      icon: "🪵",
    },
    {
      id: 3,
      title: "Constructii metalice",
      description:
        "Hale industriale, structuri metalice si confectii metalice. Experienta acumulata in Germania ne permite solutii tehnice avansate.",
      icon: "🔩",
    },
    {
      id: 4,
      title: "Constructii zidarie",
      description:
        "Zidarie traditionala si moderna din caramida, BCA si alte materiale. Executam pereti portanti si despartitori cu finisaje impecabile.",
      icon: "🧱",
    },
    {
      id: 5,
      title: "Finisaje interioare",
      description:
        "Glet, vopsitorie, montaj rigips, parchet si faianta. Transformam spatiile in conformitate cu viziunea ta.",
      icon: "🎨",
    },
    {
      id: 6,
      title: "Amenajari pavaje",
      description:
        "Pavaje exterioare din beton, piatra naturala si pavele autoblocante. Amenajari durabile pentru alei, curti si parcari.",
      icon: "🛤️",
    },
    {
      id: 7,
      title: "Reabilitari",
      description:
        "Consolidari, renovari si modernizari de cladiri existente. Aducem la viata spatii vechi cu solutii tehnice moderne.",
      icon: "🔧",
    },
  ];

  return (
    <section className={styles.services}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2>Serviciile Noastre</h2>
          <p className={styles.description}>
            Oferim o gama completa de servicii de constructii, de la fundatie
            pana la finisaje. Cu experienta acumulata din 2017 si standardele de
            calitate germane, garantam lucrari solide si durabile.
          </p>
        </header>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaText}>
            Ai un proiect in minte? Contacteaza-ne pentru o consultatie gratuita
            si o oferta personalizata.
          </p>
          <button
            type="button"
            className={styles.button}
            onClick={handleClickOffer}
          >
            Cere o oferta
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
