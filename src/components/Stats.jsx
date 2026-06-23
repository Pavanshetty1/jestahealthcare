import { useEffect, useRef, useState } from "react";
import "./Stats.css";

function Stats() {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  const stats = [
    {
      number: 15,
      suffix: "+",
      text: "Trusted healthcare brands and product partners",
      color: "#0f8c53",
    },
    {
      number: 500,
      suffix: "+",
      text: "Medical, surgical and healthcare products supplied",
      color: "#444856",
    },
    {
      number: 1000,
      suffix: "+",
      text: "Hospitals, clinics and healthcare professionals served",
      color: "#13b980",
    },
    {
      number: 24,
      suffix: "/7",
      text: "Responsive support for product and supply requirements",
      color: "#32b6c8",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-header">
        <span>OUR IMPACT</span>
        {/* <h1>Numbers that reflect our healthcare commitment</h1> */}
        <p>
          Built on trusted partnerships, reliable supply and service support for
          healthcare professionals.
        </p>
      </div>

      <div className="stats-container">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <h2>
              {startCount ? <Counter end={item.number} /> : 0}
              {item.suffix}
            </h2>
            <p>{item.text}</p>
            <span style={{ background: item.color }}></span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Counter({ end }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1400;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return count;
}

export default Stats;