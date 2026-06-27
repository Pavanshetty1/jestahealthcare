import { Link } from "react-router-dom";
import "./Blogs.css";
import { insights } from "../data/insightsData";
import SEO from "./SEO";

function Blogs() {
  return (
    <>
      <SEO
        title="Healthcare Insights"
        description="Read healthcare insights, product knowledge, infection prevention tips, medical product awareness and hospital care articles from Jesta Healthcare."
        canonical="/insights"
      />
    <section className="blogs-section" id="blogs">
      <div className="blogs-header">
        <span>INSIGHTS & RESOURCES</span>
        <h1>Stories, updates and healthcare perspectives</h1>
        <p>
          Discover useful insights, product knowledge and industry updates that
          support better healthcare decisions.
        </p>
      </div>

      <div className="blogs-grid">
        {insights.map((item, index) => (
          <Link to={`/insights/${item.slug}`} className="blog-card" key={index}>
            <video autoPlay muted loop playsInline>
              <source src={item.video} type="video/webm" />
            </video>

            <div className="blog-dark"></div>

            <div className="blog-content">
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <h4>Read Story →</h4>
            </div>
          </Link>
        ))}
      </div>
    </section>
    </>
  );
}

export default Blogs;
