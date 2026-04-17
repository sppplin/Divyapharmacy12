import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ShippingPolicy from "./pages/ShippingPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import FAQ from "./pages/FAQ";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Bundles from "./pages/Bundles";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import { CartProvider } from "./context/CartContext";
import { ToastProvider } from "./context/ToastContext";
import { SearchProvider } from "./context/SearchContext";
import { ModalProvider } from "./context/ModalContext";
import { DrawerProvider } from "./context/DrawerContext";
import GlobalComponents from "./components/GlobalComponents";
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  useEffect(() => {
    // Simulate initial loading time for assets
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ToastProvider>
        <CartProvider>
          <SearchProvider>
            <ModalProvider>
              <DrawerProvider>
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    <LoadingScreen key="loader" />
                  ) : (
                    <motion.div
                      key="main-content"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Layout>
                        <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                          <Route path="/terms-of-service" element={<TermsOfService />} />
                          <Route path="/shipping-policy" element={<ShippingPolicy />} />
                          <Route path="/refund-policy" element={<RefundPolicy />} />
                          <Route path="/faq" element={<FAQ />} />
                          <Route path="/products" element={<Products />} />
                          <Route path="/bundles" element={<Bundles />} />
                          <Route path="/contact" element={<Contact />} />
                          <Route path="/about-us" element={<AboutUs />} />
                          <Route path="/product/:handle" element={<ProductDetail />} />
                        </Routes>
                      </Layout>
                      <GlobalComponents />
                    </motion.div>
                  )}
                </AnimatePresence>
              </DrawerProvider>
            </ModalProvider>
          </SearchProvider>
        </CartProvider>
      </ToastProvider>
    </Router>
  );
}
