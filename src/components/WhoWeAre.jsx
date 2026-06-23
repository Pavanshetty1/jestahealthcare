import "./WhoWeAre.css";
import whoImg from "../assets/aboutjesta1.webp";

function WhoWeAre() {
  return (
    <section className="who-section">
      <div className="who-image">
        <img src={whoImg} alt="Who We Are" />
      </div>

      <div className="who-content">
        <span>WHO WE ARE</span>

        <h2>
          Building trust through
          <br />
          quality healthcare solutions
        </h2>

        <p>
          Jesta Healthcare is a trusted supplier of medical, surgical and
          healthcare products, supporting hospitals, clinics and healthcare
          professionals with reliable supply and responsive service.
        </p>

        <div className="who-points">
          <div>✓ Quality Products</div>
          <div>✓ Trusted Partnerships</div>
          <div>✓ Responsive Support</div>
        </div>

        <a href="/products">
          Explore Products <span>→</span>
        </a>
      </div>
    </section>
  );
}

export default WhoWeAre;
