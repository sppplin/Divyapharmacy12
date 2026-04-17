/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function TermsOfService() {
  return (
    <div className="bg-cream min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto bg-warm-white p-8 md:p-16 rounded-2xl shadow-sm border border-border">
        <h1 className="font-serif text-4xl font-bold text-text-dark mb-2">Terms of Service</h1>
        <div className="font-devanagari text-xl text-saffron mb-8">सेवा की शर्तें</div>
        <div className="section-divider ml-0 mb-10 w-20" />
        
        <div className="prose prose-stone prose-sm sm:prose-base max-w-none text-text-mid leading-relaxed space-y-6">
          <p>Welcome to Divya Pharmacy. By using our website, you agree to comply with and be bound by the following terms and conditions.</p>
          
          <section>
            <h2 className="font-display text-lg text-text-dark tracking-wide uppercase mb-3">1. Medical Disclaimer</h2>
            <p className="bg-saffron-pale p-4 border-l-4 border-saffron italic">
              The information on this website is provided for informational purposes only and is not intended as a substitute for the advice provided by your physician or other healthcare professional.
            </p>
            <p className="mt-4">You should not use the information on this website for diagnosing or treating a health problem or disease, or prescribing any medication or other treatment. You should always consult with a healthcare professional before starting any herbal or Ayurvedic treatment.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-text-dark tracking-wide uppercase mb-3">2. User Account</h2>
            <p>If you create an account on this website, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-text-dark tracking-wide uppercase mb-3">3. Product Accuracy</h2>
            <p>Divya Pharmacy attempts to be as accurate as possible with product descriptions. However, we do not warrant that product descriptions or other content of this site is accurate, complete, reliable, current, or error-free. If a product offered by Divya Pharmacy is not as described, your sole remedy is to return it in unused condition.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-text-dark tracking-wide uppercase mb-3">4. Pricing and Availability</h2>
            <p>While we strive to provide accurate pricing information, pricing or typographical errors may occur. In the event that a product is listed at an incorrect price due to an error, we reserve the right to cancel any orders placed for that product.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-text-dark tracking-wide uppercase mb-3">5. Intellectual Property</h2>
            <p>All content included on this site, such as text, graphics, logos, images, and software, is the property of Divya Pharmacy or its content suppliers and protected by international copyright laws.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-text-dark tracking-wide uppercase mb-3">6. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in Haridwar, Uttarakhand.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
