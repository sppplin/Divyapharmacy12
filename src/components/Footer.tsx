/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from "react-router-dom";
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter, 
  ChevronRight, 
  MapPin, 
  Phone, 
  Mail, 
  Clock 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-text-dark text-[#9A9070] pt-14 pb-7 px-6">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-display text-lg font-semibold text-white tracking-widest">DIVYA PHARMACY</span>
              <span className="font-devanagari text-xs text-saffron">दिव्य फार्मेसी</span>
            </div>
            <p className="text-sm leading-relaxed text-[#7A7060] max-w-xs">
              Authentic Ayurvedic formulations from the sacred ashram of Patanjali Yogpeeth, Haridwar. Healing with ancient wisdom since 2006.
            </p>
            <div className="flex gap-2.5">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-[#9A9070] hover:bg-saffron hover:border-saffron hover:text-white transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-[11px] tracking-[2px] text-[#EDE0C0] uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { name: "All Products", href: "/products" },
                { name: "Health Bundles", href: "/bundles" },
                { name: "About Us", href: "/about-us" },
                { name: "Contact Us", href: "/contact" },
                { name: "FAQ", href: "/faq" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-[13px] text-[#7A7060] hover:text-saffron transition-all flex items-center gap-1.5 group">
                    <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policy Pages */}
          <div>
            <h4 className="font-display text-[11px] tracking-[2px] text-[#EDE0C0] uppercase mb-4">Legal & Support</h4>
            <ul className="space-y-2.5">
              {[
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms of Service", href: "/terms-of-service" },
                { name: "Shipping Policy", href: "/shipping-policy" },
                { name: "Returns & Refund", href: "/refund-policy" },
                { name: "FAQ", href: "/faq" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-[13px] text-[#7A7060] hover:text-saffron transition-all flex items-center gap-1.5 group">
                    <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-[11px] tracking-[2px] text-[#EDE0C0] uppercase mb-4">Contact Info</h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 text-[13px] text-[#7A7060]">
                <MapPin size={16} className="text-saffron shrink-0 mt-0.5" />
                <span>Patanjali Yogpeeth, Maharshi Dayanand Gram, Delhi-Haridwar Highway, Haridwar, Uttarakhand 249405</span>
              </li>
              <li className="flex items-center gap-3 text-[13px] text-[#7A7060]">
                <Phone size={16} className="text-saffron shrink-0" />
                <a href="tel:+911334244107" className="hover:text-saffron transition-all">+91-1334-244107</a>
              </li>
              <li className="flex items-center gap-3 text-[13px] text-[#7A7060]">
                <Mail size={16} className="text-saffron shrink-0" />
                <a href="mailto:info@divyapharmacy.com" className="hover:text-saffron transition-all">info@divyapharmacy.com</a>
              </li>
              <li className="flex items-center gap-3 text-[13px] text-[#7A7060]">
                <Clock size={16} className="text-saffron shrink-0" />
                <span>Mon–Sat: 9:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-5 mt-4 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-[12px] text-[#666] text-center md:text-left">
            &copy; 2025 Divya Pharmacy. All rights reserved. | Pure Ayurvedic Wisdom from Patanjali Yogpeeth.
          </p>
          <div className="flex items-center gap-2">
            {["UPI", "VISA", "MASTERCARD", "NET BANKING", "COD"].map((p) => (
              <span key={p} className="bg-white/5 border border-white/10 rounded px-2 py-0.5 text-[9px] font-display text-[#666] tracking-wider">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
