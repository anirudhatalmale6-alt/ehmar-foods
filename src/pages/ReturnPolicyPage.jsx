import { STORE_INFO } from '../data/products';

/* ReturnPolicyPage — returns & refunds policy */

export default function ReturnPolicyPage() {
  const sections = [
    {
      title: 'Perishable & Food Items',
      body: 'Because we deal in fresh and perishable food products, these items cannot be returned once delivered. If there is a quality issue with your order, please contact us within 24 hours of delivery and we will make it right.',
    },
    {
      title: 'Damaged or Incorrect Items',
      body: 'If you receive a damaged, spoiled, or incorrect item, contact us immediately with a photo. We will arrange a replacement or a refund for that item at no extra cost to you.',
    },
    {
      title: 'Non-Perishable & Kitchen Items',
      body: 'Kitchen accessories and appliances may be returned within 7 days of delivery if unused and in their original packaging. Return shipping costs are the responsibility of the customer unless the item was faulty.',
    },
    {
      title: 'Refunds',
      body: 'Approved refunds are processed back to your original payment method or via bank transfer within 5–7 business days of the returned item being received and inspected.',
    },
    {
      title: 'How to Request a Return',
      body: `Reach out to our team on WhatsApp at ${STORE_INFO.whatsapp} or call ${STORE_INFO.phone} with your order details. We will guide you through the process quickly.`,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="gradient-hero py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Return &amp; Refund Policy
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Your satisfaction matters to us. Here is how we handle returns and
            refunds.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-10 space-y-8">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-lg font-bold text-dark mb-2">{s.title}</h2>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
