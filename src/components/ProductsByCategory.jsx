import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../config";
import "./ProductsByCategory.css";
import { FaEye } from "react-icons/fa";

function ProductsByCategory() {
  const { categorySlug } = useParams();

  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategoryProducts() {
      try {
        const categoryRes = await fetch(
          `${API_URL}/api/categories/${categorySlug}`,
        );
        const categoryData = await categoryRes.json();

        const productsRes = await fetch(
          `${API_URL}/api/products/category/${categorySlug}`,
        );
        const productsData = await productsRes.json();

        setCategory(categoryData);
        setProducts(productsData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCategoryProducts();
  }, [categorySlug]);

  if (loading) {
    return (
      <section className="category-page">
        <div className="category-products-grid">
          {[...Array(6)].map((_, index) => (
            <div className="category-product-card skeleton-card" key={index}>
              <div className="skeleton-image"></div>

              <div>
                <div className="skeleton-title"></div>
                <div className="skeleton-text"></div>
                <div className="skeleton-text short"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (!category) {
    return <h2>Category not found</h2>;
  }

  return (
    <section className="category-page">
      <div className="category-hero">
        <span>JESTA HEALTHCARE PRODUCTS</span>
        <h1>{category.name}</h1>
        <p>{category.description}</p>
      </div>

      <div className="category-products-grid">
        {products.map((product) => (
          <Link
            to={`/product/${product.slug}`}
            className="category-product-card"
            key={product.id}
          >
            <img src={product.image} alt={product.title} />

            <div>
              <h3>{product.title}</h3>
              {/* <p>{product.description}</p> */}
              <p>{product.description.slice(0, 120)}...</p>
              {/* <span>View Details →</span> */}
              <button className="view-details-btn">
  <span className="btn-icon">↗</span>
  <span>View Details</span>
</button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ProductsByCategory;
