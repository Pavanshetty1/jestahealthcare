import { useParams, Navigate } from "react-router-dom";
import { insights } from "../data/insightsData";
import "./InsightDetails.css";
import SEO from "./SEO";

function InsightDetails() {
  const { slug } = useParams();
  const insight = insights.find((item) => item.slug === slug);

  if (!insight) return <Navigate to="/" />;

  return (
    <>
      <SEO
        title={insights.title}
        description={insights.description}
        canonical={`/insights/${insights.slug}`}
        image={insights.image || "banner.webp"}
        type="article"
      />
      <main className="insight-details">
        <section className="insight-hero">
          <video autoPlay muted loop playsInline>
            <source src={insight.video} type="video/webm" />
          </video>

          <div className="insight-overlay"></div>

          <div className="insight-hero-content">
            {/* <span>{insight.label}</span> */}
            <h1>{insight.title}</h1>
            <p>{insight.desc}</p>
          </div>
        </section>

        <section className="insight-body">
          <div className="insight-intro">
            {insight.content.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>

          <div className="insight-cards">
            {insight.cards.map((card, index) => (
              <div className="insight-card" key={index}>
                <img src={card.image} alt={card.title} />

                <div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="insight-highlights">
            <h2>Key Highlights</h2>

            {insight.highlights.map((item, index) => (
              <div className="highlight-item" key={index}>
                <span>✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="insight-quote">
            <p>“{insight.quote}”</p>
          </div>

          <div className="insight-conclusion">
            <h2>Looking Ahead</h2>
            <p>{insight.conclusion}</p>
          </div>

          <a href="/contact" className="insight-link">
            Talk to Our Team →
          </a>
        </section>
      </main>
    </>
  );
}

export default InsightDetails;
