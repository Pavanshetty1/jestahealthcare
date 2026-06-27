import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import { API_URL } from "../config";
import SEO from "./SEO";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/categories`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <SEO
        title="Medical Products, Surgical Supplies & Hospital Equipment"
        description="Explore medical products including surgical drapes, gloves, diagnostic devices, CSSD products, medical footwear, sanitizers and dressing items."
        canonical="/products"
      />

      <section className="products-section" id="products">
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
<div className="product-view1">
  <span className="product-view-icon">↗</span>
  <span>View</span>
</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default Products;
