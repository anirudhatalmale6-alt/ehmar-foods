import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingCart,
  ShoppingBag,
  Truck,
  Shield,
  Star,
  Package,
  ArrowRight,
  CheckCircle,
  Leaf,
} from 'lucide-react';
import { products, categories, FEATURED_IDS, formatNaira } from '../data/products';
import { useCart } from '../data/cartContext';
import ProductImage from '../components/ProductImage';

/* ══════════════════════════════════════════════════════════════
   HomePage
   ══════════════════════════════════════════════════════════════ */

export default function HomePage() {
  const { addItem } = useCart();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const featured = products.filter((p) => FEATURED_IDS.includes(p.id));

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen">
      {/* ── 1. Hero ─────────────────────────────────────────── */}
      <section className="gradient-hero relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5" />
          <div className="absolute top-1/2 -left-16 w-64 h-64 rounded-full bg-white/5" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-secondary/10" />
          <div className="absolute top-20 right-1/3 w-32 h-32 rounded-full bg-secondary/8" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-secondary/20 text-secondary">
                <Leaf className="inline w-4 h-4 mr-1 -mt-0.5" />
                Fresh &amp; Authentic
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Premium Nigerian
                <br />
                <span className="text-secondary">Food Products</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-lg mx-auto lg:mx-0">
                Authentic taste, delivered to your door. From farm-fresh grains to
                savoury spices — everything you need for your kitchen.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/shop"
                  className="btn-secondary text-base px-8 py-3.5 rounded-lg font-semibold no-underline inline-flex items-center justify-center gap-2"
                >
                  Shop Now <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-colors no-underline"
                >
                  Browse Categories
                </Link>
              </div>
            </div>

            {/* Hero visual – real product showcase */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {['ehm-013', 'ehm-003', 'ehm-009', 'ehm-001'].map((pid, i) => {
                  const hp = products.find((p) => p.id === pid);
                  if (!hp) return null;
                  return (
                    <Link
                      key={pid}
                      to={`/product/${pid}`}
                      className={`block rounded-2xl overflow-hidden shadow-xl border border-white/20 aspect-square bg-white/10 no-underline ${
                        i % 2 === 1 ? 'translate-y-6' : ''
                      }`}
                    >
                      <img
                        src={hp.image}
                        alt={hp.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="eager"
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Category Cards ──────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark">
              Shop by Category
            </h2>
            <p className="mt-3 text-gray-500 text-lg">
              Find exactly what you need for your next meal
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/shop/${cat.slug}`}
                className="group flex flex-col rounded-xl overflow-hidden bg-gray-50 border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 no-underline"
              >
                <div className="relative h-36 sm:h-44 overflow-hidden bg-gray-100">
                  {cat.image ? (
                    <img
                      src={cat.image}
                      alt={cat.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <span className="flex items-center justify-center w-full h-full text-5xl">
                      {cat.emoji}
                    </span>
                  )}
                  <span className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                  <span className="absolute bottom-3 left-4 right-4 font-semibold text-white text-base drop-shadow-sm">
                    {cat.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Featured Products ───────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-dark">
                Featured Products
              </h2>
              <p className="mt-3 text-gray-500 text-lg">
                Hand-picked favourites our customers love
              </p>
            </div>
            <Link
              to="/shop"
              className="text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all no-underline"
            >
              View all products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((product) => (
              <div key={product.id} className="card-product flex flex-col">
                <Link to={`/product/${product.id}`} className="no-underline">
                  <div className="relative h-52 overflow-hidden">
                    <ProductImage product={product} size="lg" />
                    <span className="badge-category absolute top-3 left-3">
                      {categories.find((c) => c.slug === product.category)?.name}
                    </span>
                  </div>
                </Link>

                {/* Info */}
                <div className="p-5 flex flex-col flex-1">
                  <Link
                    to={`/product/${product.id}`}
                    className="font-semibold text-dark hover:text-primary transition-colors no-underline text-base"
                  >
                    {product.name}
                  </Link>
                  <p className="mt-1 text-sm text-gray-500 line-clamp-2 flex-1">
                    {product.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="price-tag">{formatNaira(product.price)}</span>
                    <button
                      type="button"
                      className="btn-cart"
                      onClick={() => addItem(product)}
                    >
                      <ShoppingCart className="w-4 h-4" /> Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Why Choose Ehmar Foods ──────────────────────── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark">
              Why Choose Ehmar Foods
            </h2>
            <p className="mt-3 text-gray-500 text-lg">
              We go the extra mile so you get the best
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Premium Quality',
                desc: 'Every product is carefully sourced and quality-checked before it reaches you.',
              },
              {
                icon: Truck,
                title: 'Fast Delivery',
                desc: 'Same-day and next-day delivery across Lagos. Nationwide shipping available.',
              },
              {
                icon: Star,
                title: 'Best Prices',
                desc: 'Competitive prices with regular discounts and loyalty rewards for returning customers.',
              },
              {
                icon: Leaf,
                title: 'Nigerian Authentic',
                desc: 'Sourced directly from trusted local farms and producers across Nigeria.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="text-center p-6 rounded-xl bg-gray-50 border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-dark">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4.5 Personal Shopping Service ──────────────────── */}
      <section className="py-16 sm:py-20 gradient-hero relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute bottom-0 -left-12 w-56 h-56 rounded-full bg-secondary/10 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20 max-w-md mx-auto">
                <img
                  src="/personal-shopper.jpg"
                  alt="Ehmar Foods personal shopper with a branded tote bag of products"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 mb-5 text-sm font-semibold rounded-full bg-secondary/20 text-secondary">
                <ShoppingBag className="inline w-4 h-4 mr-1 -mt-0.5" />
                Personal Shopping Service
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                Your Personal Shopper in
                <br className="hidden sm:block" /> Nigeria &amp; the USA
              </h2>
              <p className="mt-5 text-lg text-white/80 max-w-lg mx-auto lg:mx-0">
                We provide professional personal shopping services to approved,
                registered Ehmar Foods members. Our Shopper handles your shopping
                in both Nigeria and the United States and deliver your items
                directly to your doorsteps.
              </p>

              <ul className="mt-6 space-y-3 text-left max-w-md mx-auto lg:mx-0">
                {[
                  'Shopping in both Nigeria and the United States',
                  'Handled by trusted Ehmar Foods shoppers',
                  'Delivered directly to your doorsteps',
                  'Exclusive to approved, registered members',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/85">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://wa.me/2348038966536?text=Hello%20Ehmar%20Foods%2C%20I%27d%20like%20to%20register%20for%20the%20Personal%20Shopping%20Service."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-base px-8 py-3.5 rounded-lg font-semibold no-underline inline-flex items-center justify-center gap-2"
                >
                  Become a Member <ArrowRight className="w-5 h-5" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-colors no-underline"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. How It Works ────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark">
              How It Works
            </h2>
            <p className="mt-3 text-gray-500 text-lg">
              Getting your favourite Nigerian foods is easy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                step: '01',
                icon: Package,
                title: 'Browse & Select',
                desc: 'Explore our wide range of authentic Nigerian food products and add items to your cart.',
              },
              {
                step: '02',
                icon: CheckCircle,
                title: 'Place Your Order',
                desc: 'Review your cart, choose your delivery option, and complete your order securely.',
              },
              {
                step: '03',
                icon: Truck,
                title: 'We Deliver',
                desc: 'Sit back and relax while we carefully pack and deliver your order to your doorsteps.',
              },
            ].map((item, idx) => (
              <div key={item.step} className="relative text-center">
                {/* Connector line (hidden on mobile, hidden on last item) */}
                {idx < 2 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-primary/15" />
                )}
                <div className="relative z-10">
                  <div className="w-24 h-24 mx-auto mb-5 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                    <item.icon className="w-10 h-10 text-primary" />
                  </div>
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-bold rounded-full bg-secondary text-dark">
                    STEP {item.step}
                  </span>
                  <h3 className="font-bold text-xl text-dark">{item.title}</h3>
                  <p className="mt-2 text-gray-500 max-w-xs mx-auto leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Newsletter / CTA ────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-hero rounded-2xl px-6 sm:px-12 py-12 sm:py-16 text-center relative overflow-hidden">
            {/* Decorative shapes */}
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-secondary/10 pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold rounded-full bg-secondary/20 text-secondary">
                Special Offer
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Get 10% Off Your First Order
              </h2>
              <p className="mt-4 text-white/75 text-lg">
                Subscribe to our newsletter and receive an exclusive discount code
                plus updates on new arrivals and special deals.
              </p>

              {subscribed ? (
                <div className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/20 text-white font-semibold">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  You&apos;re subscribed! Check your email for your code.
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-5 py-3.5 rounded-lg text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                  <button
                    type="submit"
                    className="btn-secondary px-8 py-3.5 rounded-lg font-semibold whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
