/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function PrivacyPolicy() {
  return (
    <div className="bg-cream min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto bg-warm-white p-8 md:p-16 rounded-2xl shadow-sm border border-border">
        <h1 className="font-serif text-4xl font-bold text-text-dark mb-2">Privacy Policy</h1>
        <div className="font-devanagari text-xl text-saffron mb-8">गोपनीयता नीति</div>
        <div className="section-divider ml-0 mb-10 w-20" />
        
        <div className="prose prose-stone prose-sm sm:prose-base max-w-none text-text-mid leading-relaxed space-y-6">
          <p>Last Updated: April 2025</p>
          
          <section>
            <h2 className="font-display text-lg text-text-dark tracking-wide uppercase mb-3">1. Information We Collect</h2>
            <p>At Divya Pharmacy, we collect information to provide better services to all our customers. This includes:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, physical address, and phone number when you register or make a purchase.</li>
              <li><strong>Payment Information:</strong> Credit/debit card details, UPI IDs, and billing information (processed securely through our payment partners).</li>
              <li><strong>Health Interests:</strong> Information about your health concerns to provide relevant product suggestions.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg text-text-dark tracking-wide uppercase mb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Process and fulfill your orders accurately.</li>
              <li>Send you updates about your order status.</li>
              <li>Improve our website and product range based on customer feedback.</li>
              <li>Communicate with you regarding health tips, newsletters, and exclusive offers (you can opt out at any time).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg text-text-dark tracking-wide uppercase mb-3">3. Data Security</h2>
            <p>We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems and are required to keep the information confidential.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-text-dark tracking-wide uppercase mb-3">4. Cookies</h2>
            <p>We use cookies to help us remember and process the items in your shopping cart, understand and save your preferences for future visits, and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-text-dark tracking-wide uppercase mb-3">5. Third-Party Disclosure</h2>
            <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-text-dark tracking-wide uppercase mb-3">6. Contact Us</h2>
            <p>If there are any questions regarding this privacy policy, you may contact us at <strong>privacy@divyapharmacy.com</strong>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
