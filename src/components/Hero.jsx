import "./Hero.css";
import kid from "../assets/kid.webp";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span>TRUSTED HEALTHCARE PARTNER</span>

        <h1>
          Delivering Care,
          <br />
          Quality & Trust
        </h1>

        <p>
          Supporting hospitals, clinics and healthcare professionals with
          reliable medical products and trusted distribution services.
        </p>

        <div className="hero-links">
          <a href="/">Explore Products →</a>
          <a href="/contact">Contact Us →</a>
        </div>
      </div>

      <div className="hero-image">
        <img src={kid} alt="" />
      </div>
    </section>
  );
}

export default Hero;
