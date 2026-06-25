import "./Navbar.css";
import logo from "../assets/jestalogo1.webp";

function Navbar() {
  return (
    <header className="site-header">
      <div className="header-top">
        <div className="logo-wrap">
          <img
            src={logo}
            alt="Company Logo"
            onClick={() => (window.location.pathname = "/")}
          />
        </div>

        <div className="header-actions">
          <a href="/contact">Support</a>

          <span>|</span>

          <span>IN</span>

          <div className="language-dropdown">
            <span className="globe">🌐</span>

            <div className="language-menu">
              <div className="active-language">✓ English</div>
              {/* Future languages */}
              {/* <div>ಕನ್ನಡ</div>
      <div>हिन्दी</div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="search-row">
        <div className="search-box">
          <input type="text" placeholder="Search products and solutions..." />
          <button>⌕</button>
        </div>
      </div>

      <nav className="main-nav">
        <a href="/products">Products</a>
        {/* <a href="/solutions">Solutions</a> */}
        <a href="/#brands">Brands</a>
        <a href="/#blogs">Insights</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;
