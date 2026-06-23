import "./Brands.css";
import { useState, useEffect } from "react";
import threeM from "../assets/3m.webp";
import accsure from "../assets/accusure.webp";
import airways from "../assets/airways.webp";
import bonss from "../assets/bonss.webp";
import datt from "../assets/DATT.webp";
import deepak from "../assets/deepak.webp";
import gehealth from "../assets/gehealth.webp";
import medorah from "../assets/medorah.webp";
import onetouch from "../assets/onetouch.webp";
import poly from "../assets/polymed.svg";
import schluke from "../assets/schulke.webp";
import venus from "../assets/venus.webp";
import prathvi from "../assets/prathvi.webp";
import dhatri from "../assets/DHATRI.webp";
import romson from "../assets/romson.avif";
import mad from "../assets/mad.webp";

function Brands() {
  const brands = [
    threeM,
    gehealth,
    onetouch,
    prathvi,
    dhatri,
    venus,
    accsure,
    medorah,
    poly,
    datt,
    airways,
    schluke,
    bonss,
    deepak,
    romson,
    mad,
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % brands.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="brands-section" id="brands">
      <div className="brands-header">
        <span>TRUSTED BRANDS</span>

        <h1>Partnering with leading healthcare manufacturers</h1>

        <p>
          Delivering quality products and reliable solutions from trusted brands
          across healthcare specialties.
        </p>
      </div>
      <div className="brands-grid">
        {brands.map((brand, index) => (
          <div
            className={`brand-card ${activeIndex === index ? "active" : ""}`}
            key={index}
          >
            <img src={brand} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Brands;
