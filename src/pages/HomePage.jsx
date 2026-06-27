import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingCart,
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

            {/* Hero visual – CSS-only food collage */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-80 h-80">
                {/* Main circle */}
                <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <span className="text-8xl select-none">🥘</span>
                </div>
                {/* Orbiting items */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-secondary/90 flex items-center justify-center text-3xl shadow-lg">
                  🌶️
                </div>
                <div className="absolute top-1/2 -right-6 -translate-y-1/2 w-16 h-16 rounded-full bg-white/90 flex items-center justify-center text-3xl shadow-lg">
                  🍚
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-secondary/90 flex items-center justify-center text-3xl shadow-lg">
                  🐟
                </div>
                <div className="absolute top-1/2 -left-6 -translate-y-1/2 w-16 h-16 rounded-full bg-white/90 flex items-center justify-center text-3xl shadow-lg">
                  🥜
                </div>
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

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/shop/${cat.slug}`}
                className="group flex flex-col items-center gap-3 p-6 rounded-xl bg-gray-50 border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 no-underline"
              >
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {cat.emoji}
                </span>
                <span className="font-semibold text-dark group-hover:text-primary transition-colors">
                  {cat.name}
                </span>
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
                {/* Image placeholder */}
                <Link to={`/product/${product.id}`} className="no-underline">
                  <div className="relative h-52 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <span className="text-7xl select-none">{product.emoji}</span>
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
                desc: 'Sit back and relax while we carefully pack and deliver your order to your doorstep.',
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
