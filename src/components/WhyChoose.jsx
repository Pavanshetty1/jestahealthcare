import "./WhyChoose.css";

function WhyChoose() {
  const items = [
    {
      title: "Trusted Brands",
      text: "Partnering with reliable healthcare manufacturers and product suppliers.",
    },
    {
      title: "Quality Products",
      text: "Supplying carefully selected medical, surgical and patient-care products.",
    },
    {
      title: "Reliable Supply",
      text: "Ensuring timely product availability for hospitals, clinics and professionals.",
    },
    {
      title: "Responsive Support",
      text: "Providing quick assistance for product enquiries and supply requirements.",
    },
    {
      title: "Healthcare Focus",
      text: "Understanding the daily needs of healthcare teams and clinical environments.",
    },
    {
      title: "Customer Care",
      text: "Building long-term relationships through trust, service and consistency.",
    },
  ];

  return (
    <section className="why-section">
      <div className="why-header">
        <span>WHY CHOOSE US</span>
        <h2>Why choose Jesta Healthcare?</h2>
        <p>
          We focus on quality, reliability and responsive service to support
          healthcare professionals with confidence.
        </p>
      </div>

      <div className="why-grid">
        {items.map((item, index) => (
          <div className="why-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <span className="why-line"></span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;
