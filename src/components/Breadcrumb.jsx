import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./Breadcrumb.css";

function Breadcrumb({ items }) {
  return (
    <section className="breadcrumb-section">
      <div className="breadcrumb-container">
        <nav className="breadcrumb">
          <Link to="/" className="breadcrumb-home">
            <FaHome />
          </Link>

          {items.map((item, index) => (
            <span key={index} className="breadcrumb-item">
              <span className="breadcrumb-separator">›</span>

              {item.link ? (
                <Link to={item.link}>{item.label}</Link>
              ) : (
                <span className="breadcrumb-current">
                  {item.label}
                </span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}

export default Breadcrumb;