import React, { useState, useEffect } from "react";
import { PRODUCTS } from "./data/products.js";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import ColourLibraryPage from "./pages/ColourLibraryPage.jsx";
import DealerPage from "./pages/DealerPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (target) => {
    setPage(target);
    setMenuOpen(false);
    window.scrollTo({ top: 0 });
  };

  const viewProduct = (id) => {
    setSelectedProductId(id);
    setPage("product-detail");
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const selectedProduct = PRODUCTS.find((p) => p.id === selectedProductId);

  return (
    <div className="varna-root">
      <Navbar page={page} go={go} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {page === "home" && <HomePage go={go} viewProduct={viewProduct} />}
      {page === "products" && <ProductsPage go={go} viewProduct={viewProduct} />}
      {page === "product-detail" && <ProductDetailPage product={selectedProduct} go={go} viewProduct={viewProduct} />}
      {page === "colours" && <ColourLibraryPage />}
      {page === "dealers" && <DealerPage />}
      {page === "about" && <AboutPage go={go} />}
      {page === "contact" && <ContactPage />}

      <Footer go={go} />

      <div className="v-whatsapp-float">
        <WhatsAppButton label="WhatsApp Us" />
      </div>
    </div>
  );
}
