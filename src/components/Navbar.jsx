import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/jestalogo1.webp";
import SearchOverlay from "./SearchOverlay";

function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="site-header">
        <div className="header-top">
          <div className="logo-wrap">
            <img src={logo} alt="Company Logo" onClick={() => navigate("/")} />
          </div>

          <div className="header-actions">
            <a href="/contact">Support</a>
            <span>|</span>
            <span>IN</span>

            <div className="language-dropdown">
              <span className="globe">🌐</span>

              <div className="language-menu">
                <div className="active-language">✓ English</div>
              </div>
            </div>
          </div>
        </div>

        <div className="search-row">
          <div className="search-box" onClick={() => setSearchOpen(true)}>
            <input
              type="text"
              placeholder="Search products and solutions..."
              readOnly
            />
            <button type="button">⌕</button>
          </div>
        </div>

        <nav className="main-nav">
          <a href="/products">Products</a>
          <a href="/#brands">Brands</a>
          <a href="/#blogs">Insights</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </>
  );
}

export default Navbar;
