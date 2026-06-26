import { useState } from "react";
import "./Contact.css";
import { API_URL } from "../config";

function Contact() {
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("");
    setStatusType("");

    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Your enquiry has been sent successfully.");
        setStatusType("success");

        setFormData({
          name: "",
          phone: "",
          email: "",
          requirement: "",
          message: "",
        });
      } else {
        setStatus(data.message || "Something went wrong. Please try again.");
        setStatusType("error");
      }
    } catch (error) {
      setStatus("Failed to send enquiry. Please try again later.");
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <span>CONTACT US</span>
        <h1>Get in touch with Jesta Healthcare</h1>

        <p>
          Have a product requirement or enquiry? Send us your details and our
          team will get back to you.
        </p>
      </section>

      <section className="contact-section">
        <div className="contact-info">
          <h2>Let’s support your healthcare needs</h2>

          <p>
            We assist hospitals, clinics and healthcare professionals with
            reliable medical products and responsive service.
          </p>

          <div className="info-box">
            <h4>ADDRESS</h4>
            <p>
              Jesta Healthcare India Pvt. Ltd. (JHIPL)
              <br />
              #27, 3rd Cross, Sakamma Garden,
              <br />
              Basavanagudi,
              <br />
              Bengaluru, Karnataka – 560004
            </p>
          </div>

          <div className="info-box">
            <h4>EMAIL</h4>

            <p>jesta.healthcare@gmail.com</p>
          </div>

          <div className="info-box">
            <h4>PHONE</h4>

            <p>+91 7829530887 </p>
          </div>

          <div className="info-box">
            <h4>WORKING HOURS</h4>

            <p>Mon - Sat, 9:30 AM - 6:30 PM</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="requirement"
            placeholder="Product / Requirement"
            value={formData.requirement}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          {status && <p className={`form-status ${statusType}`}>{status}</p>}
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Enquiry →"}
          </button>
        </form>
      </section>

      <section className="map-section">
        <iframe
          src="https://maps.google.com/maps?q=1st%20Floor,%20Swathi%20Sankeema,%2011,%2027th%20Cross,%207th%20Block,%20Jayanagar,%20Bengaluru,%20Karnataka%20560070&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen=""
          title="Jesta Healthcare Location"
        ></iframe>
      </section>
    </main>
  );
}

export default Contact;
