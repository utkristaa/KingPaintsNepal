import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Seo, { LocalBusinessSchema, StructuredData } from "./components/Seo.jsx";
import { SITE } from "./data/site.js";
import Breadcrumbs from "./components/Breadcrumbs.jsx";
import LegalPage from "./pages/LegalPage.jsx";

const ROUTES = { home: "/", products: "/products", colours: "/colours", dealers: "/dealers", about: "/about", contact: "/contact", privacy: "/privacy", terms: "/terms", cookies: "/cookies", refunds: "/refunds" };

function getRoute() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  if (path === "/") return { page: "home", path };
  const productMatch = path.match(/^\/products\/([^/]+)$/);
  if (productMatch) return { page: "product-detail", path, productId: productMatch[1] };
  const page = Object.entries(ROUTES).find(([, route]) => route === path)?.[0];
  return { page: page || "not-found", path };
}

const PAGE_SEO = {
  home: ["King Paints Nepal | Paint Manufactured in Kathmandu", "King Paints Nepal manufactures paint in-house at its facility in Tarakeshwar Municipality, Kathmandu."],
  products: ["Paint Products | King Paints Nepal", "Explore paint categories manufactured by King Paints Nepal in Kathmandu."],
  colours: ["Colour Library | King Paints Nepal", "Browse the King Paints Nepal colour library and find a finish for your next project."],
  dealers: ["Find a Dealer | King Paints Nepal", "Find King Paints Nepal products and contact the team for dealer enquiries across Nepal."],
  about: ["About King Paints Nepal | Kathmandu Manufacturer", "Learn about King Paints Nepal's in-house paint manufacturing facility in Kathmandu."],
  contact: ["Contact King Paints Nepal", "Contact King Paints Nepal for product, dealer, project, and bulk order enquiries."],
  privacy: ["Privacy Policy | King Paints Nepal", "How King Paints Nepal handles information submitted through its website."],
  terms: ["Terms and Conditions | King Paints Nepal", "Terms for using the King Paints Nepal website and its product information."],
  cookies: ["Cookie Policy | King Paints Nepal", "Information about cookies and similar technologies used by the King Paints Nepal website."],
  refunds: ["Refund and Cancellation Policy | King Paints Nepal", "Refund and cancellation information for King Paints Nepal enquiries and purchases."],
};

export default function App() {
  const [{ page, path, productId }, setRoute] = useState(getRoute);
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (target) => {
    const nextPath = ROUTES[target] || "/";
    window.history.pushState({}, "", nextPath);
    setRoute({ page: target, path: nextPath });
    setMenuOpen(false);
    window.scrollTo({ top: 0 });
  };

  const viewProduct = (id) => {
    const nextPath = `/products/${id}`;
    window.history.pushState({}, "", nextPath);
    setRoute({ page: "product-detail", path: nextPath, productId: id });
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    const handlePopState = () => setRoute(getRoute());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem("kp_theme") === "dark";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("kp_theme", darkMode ? "dark" : "light");
    } catch {}
  }, [darkMode]);

  const toggleDark = () => setDarkMode((prev) => !prev);

  const selectedProduct = PRODUCTS.find((p) => p.id === productId);
  const [title, description] = page === "product-detail" && selectedProduct
    ? [`${selectedProduct.name} | King Paints Nepal`, `${selectedProduct.description} Explore specifications and enquire with King Paints Nepal in Kathmandu.`]
    : PAGE_SEO[page] || ["Page Not Found | King Paints Nepal", "The page you requested could not be found on the King Paints Nepal website."];
  const schema = page === "product-detail" && selectedProduct
    ? {
      "@context": "https://schema.org",
      "@type": "Product",
      name: selectedProduct.name,
      description: selectedProduct.description,
      image: `${SITE.website}${selectedProduct.image}`,
      category: selectedProduct.category,
      brand: { "@type": "Brand", name: SITE.name },
      manufacturer: { "@type": "Organization", name: SITE.legalName, address: SITE.factory.full },
      url: `${SITE.website}/products/${selectedProduct.id}`,
    }
    : { "@context": "https://schema.org", "@type": "WebSite", name: SITE.name, url: SITE.website };

  return (
    <div className={`varna-root ${darkMode ? "dark" : ""}`}>
      <Seo title={title} description={description} path={path} type={page === "product-detail" ? "product" : "website"} />
      <LocalBusinessSchema />
      <StructuredData data={schema} />
      <Navbar page={page} go={go} menuOpen={menuOpen} setMenuOpen={setMenuOpen} darkMode={darkMode} toggleDark={toggleDark} />
      {page !== "home" && <div className="v-shell"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: page === "not-found" ? "Page Not Found" : (page === "product-detail" ? "Products" : PAGE_SEO[page][0]) }]} /></div>}

      {page === "home" && <HomePage go={go} viewProduct={viewProduct} />}
      {page === "products" && <ProductsPage go={go} viewProduct={viewProduct} />}
      {page === "product-detail" && <ProductDetailPage product={selectedProduct} go={go} viewProduct={viewProduct} />}
      {page === "colours" && <ColourLibraryPage />}
      {page === "dealers" && <DealerPage />}
      {page === "about" && <AboutPage go={go} />}
      {page === "contact" && <ContactPage />}
      {page === "privacy" && <LegalPage kind="privacy" />}
      {page === "terms" && <LegalPage kind="terms" />}
      {page === "cookies" && <LegalPage kind="cookies" />}
      {page === "refunds" && <LegalPage kind="refund" />}
      {(page === "not-found" || (page === "product-detail" && !selectedProduct)) && <NotFoundPage go={go} />}

      <Footer go={go} />

      <motion.div
        className="v-whatsapp-float"
        initial={{ opacity: 0, scale: 0.8, y: 16 }}
        animate={{
          opacity: menuOpen ? 0 : 1,
          scale: menuOpen ? 0.8 : 1,
          y: menuOpen ? 16 : 0,
        }}
        style={{ pointerEvents: menuOpen ? "none" : "auto" }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <WhatsAppButton label="WhatsApp Us" />
      </motion.div>
    </div>
  );
}
