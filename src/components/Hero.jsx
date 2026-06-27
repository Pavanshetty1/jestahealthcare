import "./Hero.css";
import kid from "../assets/kid.webp";
import SEO from "./SEO";

function Hero() {
  return (
    <>
      <SEO
        title="Medical & Surgical Products Supplier in India"
        description="Jesta Healthcare supplies trusted medical, surgical, diagnostic, infection control, CSSD and hospital products for healthcare professionals."
        canonical="/"
      />
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
          <div className="hero-actions">
            <a href="/products" className="hero-primary-btn">
              <span className="hero-btn-icon">↗</span>
              <span style={{ color: "white" }}>Explore Products</span>
            </a>

            <a href="/contact" className="hero-secondary-btn">
              <span className="hero-btn-icon" style={{ color: "green" }}>
                ↗
              </span>
              <span style={{ color: "white" }}>Contact Us</span>
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={kid} alt="" />
        </div>
      </section>
    </>
  );
}

export default Hero;
