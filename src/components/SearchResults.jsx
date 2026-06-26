import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { API_URL } from "../config";
import "./SearchResults.css";

function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSearchResults() {
      try {
        setLoading(true);

        const res = await fetch(
          `${API_URL}/api/search?q=${encodeURIComponent(query)}`
        );
        const data = await res.json();

        setProducts(data.products || []);
        setCategories(data.categories || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  if (loading) {
    return <section className="search-page">Searching...</section>;
  }

  return (
    <section className="search-page">
      <h1>Search Results</h1>
      <p>
        Showing results for <b>"{query}"</b>
      </p>

      {products.length === 0 && categories.length === 0 ? (
        <div className="search-empty">
          <h2>No results found</h2>
          <p>Try searching Surgical Drapes, CSSD Products, Gloves or Gown.</p>
          <Link to="/products">Browse Products</Link>
        </div>
      ) : (
        <>
          {products.length > 0 && (
            <div className="search-block">
              <h2>Products</h2>

              <div className="search-grid">
                {products.map((item) => (
                  <Link
                    to={`/product/${item.slug}`}
                    className="search-card"
                    key={item.id}
                  >
                    <img src={item.image} alt={item.title} />
                    <div>
                      <h3>{item.title}</h3>
                      <span>{item.category_name}</span>
                      <p>{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {categories.length > 0 && (
            <div className="search-block">
              <h2>Categories</h2>

              <div className="search-grid">
                {categories.map((item) => (
                  <Link
                    to={`/products/${item.slug}`}
                    className="search-card"
                    key={item.id}
                  >
                    <img src={item.image} alt={item.name} />
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default SearchResults;