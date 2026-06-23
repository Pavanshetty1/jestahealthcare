import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../config";
import "./ProductDetails.css";

function ProductDetails() {
  const { productSlug } = useParams();

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const productRes = await fetch(`${API_URL}/api/products/${productSlug}`);
        const productData = await productRes.json();

        setProduct(productData);

        if (productData?.category_id) {
          const relatedRes = await fetch(
            `${API_URL}/api/products/related/${productData.category_id}/${productData.slug}`
          );
          const relatedData = await relatedRes.json();
          setRelatedProducts(relatedData);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProductDetails();
  }, [productSlug]);

  if (loading) {
    return (
      <section className="pd-details">
        <div className="pd-container">
          <div className="pd-image pd-skeleton-image"></div>

          <div className="pd-content">
            <div className="pd-skeleton-label"></div>
            <div className="pd-skeleton-title"></div>
            <div className="pd-skeleton-text"></div>
            <div className="pd-skeleton-text"></div>
            <div className="pd-skeleton-text short"></div>
            <div className="pd-skeleton-btn"></div>
          </div>
        </div>

        <div className="pd-related">
          <div className="pd-skeleton-related-title"></div>

          <div className="pd-related-grid">
            {[...Array(3)].map((_, index) => (
              <div className="pd-related-card" key={index}>
                <div className="pd-skeleton-related-image"></div>
                <div className="pd-skeleton-related-text"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <section className="pd-details">
      <div className="pd-container">
        <div className="pd-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="pd-content">
          <span>JESTA HEALTHCARE</span>
          <h1>{product.title}</h1>
          <p>{product.description}</p>

          <Link to="/contact" className="pd-btn">
            Enquire Now →
          </Link>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="pd-related">
          <h2>Related Products</h2>

          <div className="pd-related-grid">
            {relatedProducts.map((item) => (
              <Link
                to={`/product/${item.slug}`}
                className="pd-related-card"
                key={item.id}
              >
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default ProductDetails;