import { Link } from "react-router-dom";
import { FaArrowLeft, FaHeartbeat } from "react-icons/fa";
import "./NotFound.css";
import SEO from "./SEO";

function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for could not be found."
        canonical="/404"
        robots="noindex, nofollow"
      />
       <section className="notfound">
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <div className="notfound-content">
        <div className="number404">404</div>

        <div className="ecg">
          <svg viewBox="0 0 1000 120" preserveAspectRatio="none">
            <path
              d="
              M0 60
              L120 60
              L170 60
              L205 25
              L235 95
              L270 10
              L305 110
              L340 60
              L520 60
              L560 60
              L595 30
              L625 90
              L660 15
              L695 105
              L730 60
              L1000 60"
            />
          </svg>
        </div>

        <div className="heart">❤</div>

        <h2>Oops! You reached the wrong page.</h2>

        <p>
          The page you're trying to visit may have been moved, renamed or no
          longer exists. Let's get you back to the right place.
        </p>

        <div className="notfound-buttons">
          <Link to="/" className="primary-btn">
            <FaArrowLeft />
            Back Home
          </Link>

          <Link to="/products" className="secondary-btn">
            Explore Products
          </Link>
        </div>
      </div>
    </section>
    </>
  );
}

export default NotFound;
