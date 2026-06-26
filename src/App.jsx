import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Products from "./components/Products";
import Brands from "./components/Brands";
import Blogs from "./components/Blogs";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

import AboutHero from "./components/AboutHero";
import AnnouncementSlider from "./components/AnnouncementSlider";
import Contact from "./components/Contact";
import InsightDetails from "./components/InsightDetails";
import ScrollToTop from "./components/ScrollToTop";

import ProductsByCategory from "./components/ProductsByCategory";
import ProductDetails from "./components/ProductDetails";
import ScrollToHash from "./components/ScrollToHash";
import PrivacyPolicy from "./components/Privacy";
import TermsConditions from "./components/Terms";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToHash />
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <AnnouncementSlider />
              <Products />
              <Stats />
              <Hero />
              <Brands />
            </>
          }
        />

        <Route path="/about" element={<AboutHero />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/insights/:slug" element={<InsightDetails />} />
        <Route
          path="/products/:categorySlug"
          element={<ProductsByCategory />}
        />
        <Route path="/product/:productSlug" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>

      <Blogs />
      <CTA />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
