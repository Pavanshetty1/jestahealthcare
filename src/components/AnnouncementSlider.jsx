import { useEffect, useState } from "react";
import "./AnnouncementSlider.css";

import drapes from "/images/equipppp.webp";
import gloves from "/images/glovesone.webp";
import bp from "/images/equip.webp";
import stetho from "/images/stetho.webp";
import stethoscope from "/images/steth.webp";

function AnnouncementSlider() {
  const slides = [
    {
      label: "SURGICAL ESSENTIALS",
      title: "Sterile products for everyday clinical care",
      text: "Explore surgical drapes, gauze swabs and dressing items.",
      image: drapes,
      link: "/products",
    },
    {
      label: "INFECTION PREVENTION",
      title: "Reliable protection for healthcare teams",
      text: "Medical gloves, sanitizers and essential safety products.",
      image: gloves,
      link: "/products",
    },
    {
      label: "DIAGNOSTIC SUPPORT",
      title: "Tools that support better patient monitoring",
      text: "BP machines, stethoscopes and diagnostic essentials.",
      image: bp,
      link: "/products",
    },
    {
      label: "TRUSTED BRANDS",
      title: "Quality healthcare products from reliable partners",
      text: "Supplying hospitals, clinics and healthcare professionals.",
      image: stethoscope,
      link: "/products",
    },
  ];

  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 400000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="announcement-slider">
      <button className="slider-arrow left" onClick={prevSlide}>
        ‹
      </button>

      <a
        href={slides[active].link}
        className="announcement-slide"
        key={active}
        onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          const touchEnd = e.changedTouches[0].clientX;
          const diff = touchStart - touchEnd;

          if (diff > 50) nextSlide();
          if (diff < -50) prevSlide();
        }}
      >
        <div className="slide-text">
          <span>{slides[active].label}</span>
          <h2>{slides[active].title}</h2>
          <p>{slides[active].text}</p>
          {
            /* <h4>Explore Now →</h4> */
            <div className="slide-action">
              <span>Explore Products</span>

              <div className="action-circle">↗</div>
            </div>
          }
        </div>

        <div className="slide-image">
          <img src={slides[active].image} alt={slides[active].title} />
        </div>
      </a>

      <button className="slider-arrow right" onClick={nextSlide}>
        ›
      </button>
    </section>
  );
}

export default AnnouncementSlider;
