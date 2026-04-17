/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Truck, Globe, Clock, ShieldCheck } from "lucide-react";

export default function ShippingPolicy() {
  return (
    <div className="bg-cream min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto bg-warm-white p-8 md:p-16 rounded-2xl shadow-sm border border-border">
        <h1 className="font-serif text-4xl font-bold text-text-dark mb-2">Shipping Policy</h1>
        <div className="font-devanagari text-xl text-saffron mb-8">शिपिंग नीति</div>
        <div className="section-divider ml-0 mb-10 w-20" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-cream p-6 rounded-xl flex gap-4">
            <Truck className="text-saffron shrink-0" size={24} />
            <div>
              <h3 className="font-display text-xs font-semibold tracking-wide uppercase mb-1">Domestic Shipping</h3>
              <p className="text-xs text-text-light">Pan-India delivery in 3-5 business days. Free shipping on orders above ₹499.</p>
            </div>
          </div>
          <div className="bg-cream p-6 rounded-xl flex gap-4">
            <Globe className="text-saffron shrink-0" size={24} />
            <div>
              <h3 className="font-display text-xs font-semibold tracking-wide uppercase mb-1">International Shipping</h3>
              <p className="text-xs text-text-light">Delivering to 60+ countries. Shipping time varies by destination (7-15 days).</p>
            </div>
          </div>
          <div className="bg-cream p-6 rounded-xl flex gap-4">
            <Clock className="text-saffron shrink-0" size={24} />
            <div>
              <h3 className="font-display text-xs font-semibold tracking-wide uppercase mb-1">Dispatch Time</h3>
              <p className="text-xs text-text-light">Most orders are dispatched within 24 hours from our Haridwar ashram.</p>
            </div>
          </div>
          <div className="bg-cream p-6 rounded-xl flex gap-4">
            <ShieldCheck className="text-saffron shrink-0" size={24} />
            <div>
              <h3 className="font-display text-xs font-semibold tracking-wide uppercase mb-1">Packaging</h3>
              <p className="text-xs text-text-light">Secure, tamper-proof and temperature-controlled packaging for herb purity.</p>
            </div>
          </div>
        </div>

        <div className="prose prose-stone prose-sm sm:prose-base max-w-none text-text-mid leading-relaxed space-y-6">
          <section>
            <h2 className="font-display text-lg text-text-dark tracking-wide uppercase mb-3">1. Order Tracking</h2>
            <p>Once your order is shipped, you will receive an email and SMS with a tracking number and a link to trace your package in real-time. You can also track your order through the "Track My Order" section on our website.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-text-dark tracking-wide uppercase mb-3">2. Delivery Partners</h2>
            <p>We partner with reputed courier services including Delhivery, BlueDart, Ecom Express, and India Post for domestic shipments. International orders are fulfilled via FedEx and DHL.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-text-dark tracking-wide uppercase mb-3">3. Customs, Duties and Taxes</h2>
            <p>For international orders, Divya Pharmacy is not responsible for any customs and taxes applied to your order. All fees imposed during or after shipping are the responsibility of the customer (tariffs, taxes, etc.).</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-text-dark tracking-wide uppercase mb-3">4. Damages During Transit</h2>
            <p>Divya Pharmacy is liable for any products damaged or lost during shipping. If you received your order damaged, please save all packaging materials and damaged goods before filing a claim. Please reach out to us at <strong>support@divyapharmacy.com</strong> with photos of the damage.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
