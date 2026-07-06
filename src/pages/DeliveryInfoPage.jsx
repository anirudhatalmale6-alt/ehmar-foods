import { Truck, Clock, MapPin, Package } from 'lucide-react';
import { STORE_INFO, formatNaira } from '../data/products';

/* DeliveryInfoPage — delivery information */

export default function DeliveryInfoPage() {
  const cards = [
    {
      icon: Truck,
      title: 'Fast Delivery',
      desc: 'Same-day and next-day delivery available across Lagos. Nationwide shipping to all major cities.',
    },
    {
      icon: Clock,
      title: 'Delivery Times',
      desc: 'Orders placed before 2PM are processed the same day. You will receive updates on your order status.',
    },
    {
      icon: MapPin,
      title: 'Coverage Areas',
      desc: STORE_INFO.deliveryAreas.join(', ') + ' and more locations nationwide.',
    },
    {
      icon: Package,
      title: 'Careful Packaging',
      desc: 'Every order is carefully packed to keep your products fresh and protected in transit.',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="gradient-hero py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Delivery Information
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Everything you need to know about how we get your order to you.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-6">
            {cards.map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-2xl shadow-sm p-7 flex gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <c.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-1.5">{c.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white rounded-2xl shadow-sm p-7">
            <h2 className="text-lg font-bold text-dark mb-3">Delivery Fees</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center justify-between border-b border-gray-100 pb-2">
                <span>Standard delivery (Lagos)</span>
                <span className="font-semibold text-dark">
                  {formatNaira(STORE_INFO.deliveryFee)}
                </span>
              </li>
              <li className="flex items-center justify-between">
                <span>
                  Free delivery on orders over{' '}
                  {formatNaira(STORE_INFO.freeDeliveryThreshold)}
                </span>
                <span className="font-semibold text-primary">FREE</span>
              </li>
            </ul>
            <p className="text-sm text-gray-500 mt-4">
              For deliveries outside Lagos, fees vary by location. Contact us on
              WhatsApp at {STORE_INFO.whatsapp} for a delivery quote.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
