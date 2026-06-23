import "./CTA.css";

function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h2>
            Looking for reliable healthcare
            <br />
            products and solutions?
          </h2>

          <p>
            Our team is here to support hospitals, clinics and healthcare
            professionals with trusted products and responsive service.
          </p>
        </div>

        <div className="cta-action">
          <a href="/contact" className="split-btn">
            <span>Contact Us</span>
            <div className="split-arrow">↗</div>
          </a>
        </div>

        {/* <div className="cta-image">
          <img src={stethoscope} alt="Stethoscope" />
        </div> */}
      </div>
    </section>
  );
}

export default CTA;
