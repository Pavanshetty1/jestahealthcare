import "./AboutHero.css";
import aboutHero from "../assets/aboutjesta.webp";

import WhoWeAre from "../components/WhoWeAre";
import WhyChoose from "../components/WhyChoose";

function AboutHero() {
  return (
    <>
      <section className="about-hero">
        <img src={aboutHero} alt="About Jesta Healthcare" />

        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <span>ABOUT JESTA HEALTHCARE</span>

          <h1>
            Trusted Healthcare
            <br />
            Products & Solutions
          </h1>

          <p>
            Supporting hospitals, clinics and healthcare professionals with
            quality medical products, reliable supply and responsive service.
          </p>
        </div>
      </section>

      <WhoWeAre />

      <WhyChoose />
    </>
  );
}

export default AboutHero;
