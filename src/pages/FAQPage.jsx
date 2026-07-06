import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { STORE_INFO, formatNaira } from '../data/products';

/* FAQPage — frequently asked questions */

const FAQS = [
  {
    q: 'How do I place an order?',
    a: 'Browse our shop, add the items you want to your cart, then head to checkout. Fill in your delivery details and complete your order. Our team will confirm and process it right away.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept bank transfer and Paystack. Payment details are shown at checkout, and our team will confirm once your payment is received.',
  },
  {
    q: 'Where do you deliver?',
    a: `We deliver across Lagos with same-day and next-day options, and ship nationwide to ${STORE_INFO.deliveryAreas.join(', ')} and more.`,
  },
  {
    q: 'How much is delivery?',
    a: `Standard delivery within Lagos is ${formatNaira(STORE_INFO.deliveryFee)}. Orders over ${formatNaira(STORE_INFO.freeDeliveryThreshold)} qualify for free delivery. Fees for other locations vary — contact us for a quote.`,
  },
  {
    q: 'Are your products fresh?',
    a: 'Yes. Every product is carefully sourced and quality-checked before it reaches you. Perishable items are packed to stay fresh in transit.',
  },
  {
    q: 'Can I return an item?',
    a: 'Perishable food items cannot be returned once delivered, but if there is any quality issue contact us within 24 hours and we will make it right. Kitchen items can be returned within 7 days if unused. See our Return Policy for details.',
  },
  {
    q: 'How do I contact you?',
    a: `Call us on ${STORE_INFO.phone} or message us on WhatsApp at ${STORE_INFO.whatsapp}. We are happy to help with any questions.`,
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer bg-transparent border-none"
      >
        <span className="font-semibold text-dark">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 -mt-1">
          <p className="text-gray-600 leading-relaxed text-[15px]">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="gradient-hero py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Quick answers to the questions we hear most often.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 space-y-3">
          {FAQS.map((f) => (
            <FAQItem key={f.q} {...f} />
          ))}
        </div>
      </section>
    </div>
  );
}
