/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Search, 
  User, 
  Heart, 
  ShoppingBag, 
  Menu, 
  X, 
  Home, 
  Package, 
  Layers, 
  Grid, 
  Star, 
  Info, 
  Phone 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useSearch } from "../context/SearchContext";
import { useDrawer } from "../context/DrawerContext";
import { useCart } from "../context/CartContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { openSearch } = useSearch();
  const { openCart } = useDrawer();
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Bundles", href: "/bundles" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Topbar */}
      <div className="bg-deep-green text-[#C8B88A] text-center py-2 px-5 font-display text-[11px] tracking-[2px] relative z-[900]">
        Free Shipping on Orders Above ₹499 &nbsp;|&nbsp; <span className="text-saffron-light underline underline-offset-4">Use Code: AYUR10 for 10% off</span>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-[800] bg-warm-white transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'border-bottom border-border py-4'}`}>
        <div className="max-w-[1300px] mx-auto px-5 flex items-center justify-between gap-4 h-11 md:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-10 h-10 flex items-center justify-center">
              <img src="https://divyayoga.com/wp-content/uploads/2022/03/Logo.webp" alt="Divya Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base font-semibold text-text-dark tracking-wide line-height-[1]">Divya Pharmacy</span>
              <span className="font-devanagari text-[11px] text-saffron leading-tight">दिव्य फार्मेसी</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-display text-[11px] font-medium tracking-wide text-text-mid py-2 px-3 rounded px-2 transition-all relative group ${location.pathname === link.href ? 'text-saffron' : 'hover:text-saffron'}`}
              >
                {link.name}
                <span className={`absolute bottom-1 left-3 right-3 h-[1px] bg-saffron transition-transform duration-300 ${location.pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </Link>
            ))}
          </nav>

          {/* Search */}
          <div className="hidden md:flex relative flex-1 max-w-[300px]">
            <button 
              onClick={openSearch}
              className="w-full border border-border bg-cream rounded-full py-2 pl-4 pr-10 text-xs font-sans text-text-light text-left outline-none focus:border-saffron transition-all hover:bg-white"
            >
              Search products...
              <div className="absolute right-1 top-1/2 -translate-y-1/2 bg-saffron text-white rounded-full w-7 h-7 flex items-center justify-center">
                <Search size={14} />
              </div>
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button 
              onClick={openSearch}
              className="md:hidden w-9 h-9 flex items-center justify-center text-text-mid hover:text-saffron transition-all"
            >
              <Search size={22} />
            </button>
            <button className="w-9 h-9 flex items-center justify-center border border-border rounded-full text-text-mid hover:border-saffron hover:text-saffron transition-all md:flex hidden">
              <User size={18} />
            </button>
            <button className="w-9 h-9 flex items-center justify-center border border-border rounded-full text-text-mid hover:border-saffron hover:text-saffron transition-all md:flex hidden">
              <Heart size={18} />
            </button>
            <button 
              onClick={openCart}
              className="w-9 h-9 flex items-center justify-center border border-border rounded-full text-text-mid hover:border-saffron hover:text-saffron transition-all relative"
            >
              <ShoppingBag size={18} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-saffron text-white rounded-full w-4 h-4 text-[10px] font-semibold flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button 
              className="lg:hidden p-1.5 text-text-dark"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-[1000]"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-[280px] bg-warm-white z-[1001] shadow-2xl flex flex-col"
            >
              <div className="p-5 border-b border-border flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-display text-lg font-semibold text-text-dark tracking-wide">Divya Pharmacy</span>
                  <span className="font-devanagari text-[11px] text-saffron">दिव्य फार्मेसी</span>
                </div>
                <button onClick={() => setIsMenuOpen(false)} className="text-text-mid">
                  <X size={20} />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto py-4">
                {[
                  { name: "Home", href: "/", icon: Home },
                  { name: "All Products", href: "/products", icon: Package },
                  { name: "Health Bundles", href: "/bundles", icon: Layers },
                  { name: "About Us", href: "/about-us", icon: Info },
                  { name: "Contact Us", href: "/contact", icon: Phone },
                ].map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 px-6 py-3.5 font-display text-xs tracking-wide text-text-mid border-b border-[#f5f0e8] hover:bg-saffron-pale hover:text-saffron transition-all"
                  >
                    <item.icon size={16} className="text-saffron" />
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="p-5 border-t border-border bg-cream/50">
                <p className="text-xs text-text-light mb-4">Authentic Ayurvedic healing since Vedic times</p>
                <button className="w-full bg-saffron text-white py-3 rounded-sm font-display text-[11px] tracking-[2px] hover:bg-saffron-light transition-all">SIGN IN</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
