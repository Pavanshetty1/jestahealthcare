import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../config";
import "./ProductDetails.css";
import SEO from "./SEO";
import Breadcrumb from "./Breadcrumb";

function ProductDetails() {
  const { productSlug } = useParams();

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [packContents, setPackContents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const productRes = await fetch(
          `${API_URL}/api/products/${productSlug}`,
        );
        const productData = await productRes.json();

        setProduct(productData);

        if (productData?.id) {
          const packRes = await fetch(
            `${API_URL}/api/products/${productData.id}/pack-contents`,
          );
          const packData = await packRes.json();
          setPackContents(packData || []);
        }

        if (productData?.category_id) {
          const relatedRes = await fetch(
            `${API_URL}/api/products/related/${productData.category_id}/${productData.slug}`,
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
    return <section className="pd-details">Loading...</section>;
  }

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <>
      {product && (
        <SEO
          title={product.title}
          description={
            product.description ||
            `${product.title} supplied by Jesta Healthcare for hospitals, clinics and healthcare professionals.`
          }
          canonical={`/products/${product.slug || productSlug}`}
          image={product.image || "/og-image.jpg"}
          type="product"
        />
      )}
      <Breadcrumb
        items={[
          {
            label: "Products",
            link: "/products",
          },
          {
            label: product.category_name,
            link: `/products/${product.category_slug}`,
          },
          {
            label: product.title,
          },
        ]}
      />
      <section className="pd-details">
        <div className="pd-container">
          <div className="pd-image">
            <img src={product.image} alt={product.title} />
          </div>

          <div className="pd-content">
            <h1>{product.title}</h1>
            <p>{product.description}</p>

            {product.features && (
              <div className="pd-features">
                <h3>Key Features</h3>

                <ul>
                  {product.features.split("|").map((feature, index) => (
                    <li key={index}>{feature.trim()}</li>
                  ))}
                </ul>
              </div>
            )}

            <Link to="/contact" className="pd-btn">
              <span className="pd-btn-icon">↗</span>
              Enquire Now
            </Link>
          </div>
        </div>

        {packContents.length > 0 && (
          <div className="pd-pack">
            <h2>Pack Contents</h2>

            <div className="pd-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Qty</th>
                    <th>Size</th>
                  </tr>
                </thead>

                <tbody>
                  {packContents.map((item) => (
                    <tr key={item.id}>
                      <td>{item.description}</td>
                      <td>{item.qty}</td>
                      <td>{item.size || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

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
    </>
  );
}

export default ProductDetails;
