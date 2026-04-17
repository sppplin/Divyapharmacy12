/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function RefundPolicy() {
  return (
    <div className="bg-cream min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto bg-warm-white p-8 md:p-16 rounded-2xl shadow-sm border border-border">
        <h1 className="font-serif text-4xl font-bold text-text-dark mb-2">Returns & Refund Policy</h1>
        <div className="font-devanagari text-xl text-saffron mb-8">वापसी और धनवापसी नीति</div>
        <div className="section-divider ml-0 mb-10 w-20" />
        
        <div className="prose prose-stone prose-sm sm:prose-base max-w-none text-text-mid leading-relaxed space-y-6">
          <p>We want you to be completely satisfied with your purchase. If you are not satisfied, we are here to help.</p>
          
          <section>
            <h2 className="font-display text-lg text-text-dark tracking-wide uppercase mb-3">1. Returns Eligibility</h2>
            <p>You have <strong>7 calendar days</strong> to return an item from the date you received it. To be eligible for a return:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Your item must be unused and in the same condition that you received it.</li>
              <li>Your item must be in the original packaging.</li>
              <li>Your item needs to have the receipt or proof of purchase.</li>
              <li><strong>Non-returnable items:</strong> Perishable herbs, personalized formulations, and items on final clearance.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg text-text-dark tracking-wide uppercase mb-3">2. Refund Process</h2>
            <p>Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item.</p>
            <p className="mt-4">If your return is approved, we will initiate a refund to your original method of payment (Credit Card, UPI, etc.). You will receive the credit within 5-10 business days, depending on your card issuer's or bank's policies.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-text-dark tracking-wide uppercase mb-3">3. Exchange Policy</h2>
            <p>We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at <strong>returns@divyapharmacy.com</strong> and send your item to: <em>Patanjali Yogpeeth, Maharshi Dayanand Gram, Haridwar, Uttarakhand 249405</em>.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-text-dark tracking-wide uppercase mb-3">4. Cancellation Policy</h2>
            <p>You can cancel your order within 2 hours of placing it for a full refund. Once the order has been dispatched from our facility, it cannot be cancelled.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-text-dark tracking-wide uppercase mb-3">5. Shipping Costs for Returns</h2>
            <p>You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund unless the return is due to a defect on our part.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
