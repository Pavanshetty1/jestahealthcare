import "./Footer.css";
import logo from "../assets/jestalogo1.webp";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h4>OUR COMPANY</h4>
          <a href="/about">About Us</a>
          <a href="/#blogs">Blogs</a>
          <a href="/contact">Contact Us</a>
          {/* <a href="/partners">Our Partners</a>  */}
        </div>

        <div className="footer-col">
          <h4>PRODUCTS</h4>
          <a href="/products">Medical Products</a>
          <a href="/products">Surgical Supplies</a>
          {/* <a href="/products">Healthcare Solutions</a> */}
          <a href="/#brands">Brands</a>
        </div>

        <div className="footer-col">
          <h4>RESOURCES</h4>
          <a href="/#blogs">Insights</a>
          <a href="/#blogs">Healthcare Updates</a>
          <a href="/#blogs">Product Knowledge</a>
        </div>

        <div className="footer-col">
          <h4>SUPPORT</h4>
          <a href="/contact">Help Center</a>
          <a href="/contact">Request Quote</a>
          <a href="/contact">Customer Support</a>
        </div>

        <div className="footer-col">
          <h4>FOLLOW US</h4>
          <div className="social-links">
            <a href="/" className="linkedin">
              <FaLinkedinIn />
            </a>

            <a href="/" className="facebook">
              <FaFacebookF />
            </a>

            <a href="/" className="youtube">
              <FaYoutube />
            </a>

            <a href="/" className="instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <img src={logo} alt="Company Logo" />

        <div className="footer-bottom-content">
          <p>
            <a href="/privacy">Privacy</a> |
            <a href="/terms"> Terms & Conditions</a> 
            {/* <a href="/sitemap"> Site Map</a> */}
          </p>

          <p>© 2026 Jesta Healthcare. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
