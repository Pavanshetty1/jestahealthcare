import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import { API_URL } from "../config";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/categories`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="products-section">
      <div className="products-header">
        <span>PRODUCTS</span>
      </div>

      <div className="products-grid">
        {products?.map((item, index) => (
          <Link
            to={`/products/${item.slug}`}
            className="product-card"
            key={item.id}
          >
            <div className="product-image">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="product-content">
              <span className="product-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{item.name}</h3>

              <span className="product-view">
                View <span>→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Products;