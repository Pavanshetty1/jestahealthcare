import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../config";
import "./SearchOverlay.css";

function SearchOverlay({ onClose }) {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchText.trim()) {
      setProducts([]);
      setCategories([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const res = await fetch(
          `${API_URL}/api/search?q=${encodeURIComponent(searchText)}`
        );
        const data = await res.json();

        setProducts(data.products || []);
        setCategories(data.categories || []);
      } catch (error) {
        console.log(error);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchText]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const query = searchText.trim();
    if (!query) return;

    onClose();
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="search-overlay">
      <button className="search-close" onClick={onClose}>
        ×
      </button>

      <form className="search-overlay-box" onSubmit={handleSubmit}>
        <input
          autoFocus
          type="text"
          placeholder="Search products and categories..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {searchText && (
        <div className="search-suggestions">
          {products.length > 0 && (
            <>
              <h4>Products</h4>
              {products.slice(0, 5).map((item) => (
                <Link
                  to={`/product/${item.slug}`}
                  key={item.id}
                  onClick={onClose}
                  className="search-suggestion-item"
                >
                  <img src={item.image} alt={item.title} />
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.category_name}</span>
                  </div>
                </Link>
              ))}
            </>
          )}

          {categories.length > 0 && (
            <>
              <h4>Categories</h4>
              {categories.slice(0, 3).map((item) => (
                <Link
                  to={`/products/${item.slug}`}
                  key={item.id}
                  onClick={onClose}
                  className="search-suggestion-item"
                >
                  <img src={item.image} alt={item.name} />
                  <div>
                    <strong>{item.name}</strong>
                    <span>Category</span>
                  </div>
                </Link>
              ))}
            </>
          )}

          {products.length === 0 && categories.length === 0 && (
            <p className="search-no-result">No quick results found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchOverlay;