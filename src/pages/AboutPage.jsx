import { Link } from 'react-router-dom';
import {
  Award,
  Users,
  MapPin,
  Clock,
  Heart,
  Leaf,
  Target,
  Truck,
} from 'lucide-react';

const VALUES = [
  {
    icon: Award,
    title: 'Quality',
    text: 'Every product is carefully selected and quality-checked to ensure only the best reaches your table.',
  },
  {
    icon: Leaf,
    title: 'Authenticity',
    text: 'We source directly from trusted local farms and producers to bring you genuine Nigerian flavours.',
  },
  {
    icon: Heart,
    title: 'Customer Service',
    text: 'Our dedicated team is always ready to help, from placing your order to delivery at your doorstep.',
  },
  {
    icon: Users,
    title: 'Community',
    text: 'We support local farmers and communities, creating a sustainable supply chain across Nigeria.',
  },
];

const STATS = [
  { value: '500+', label: 'Products', icon: Award },
  { value: '10,000+', label: 'Customers', icon: Users },
  { value: '20+', label: 'States Delivered', icon: MapPin },
  { value: '5', label: 'Years in Business', icon: Clock },
];

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="gradient-hero py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Ehmar Foods
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Bringing premium Nigerian food products to homes across Nigeria and
            the diaspora.
          </p>
        </div>
      </section>

      {/* ── Story ────────────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Ehmar Foods was founded with a simple but powerful mission: to
                make premium, authentic Nigerian food products accessible to
                everyone, no matter where they are. Whether you live in Lagos,
                Abuja, or anywhere across the diaspora, we believe you deserve
                access to the rich, flavourful ingredients that make Nigerian
                cuisine truly special.
              </p>
              <p>
                What started as a small family passion for quality food has grown
                into a trusted name in Nigerian grocery delivery. We work
                directly with local farmers, producers, and artisans across
                Nigeria to source the freshest grains, spices, oils, and
                traditional ingredients&mdash;ensuring that every product meets
                our rigorous quality standards.
              </p>
              <p>
                Today, we serve thousands of customers across over 20 states,
                and we are just getting started. Our commitment to quality,
                authenticity, and exceptional customer service remains at the
                heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission ──────────────────────────────────────── */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Target className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            &ldquo;To provide authentic, high-quality Nigerian food products
            with the convenience of online shopping&mdash;delivering freshness,
            flavour, and trust to every doorstep.&rdquo;
          </p>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-dark text-center mb-12">
            Our Values
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-dark text-lg mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────── */}
      <section className="gradient-hero py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center">
                <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-secondary" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {value}
                </p>
                <p className="text-sm text-white/70">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team / Family ────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-secondary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">
            A Family-Owned Business
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ehmar Foods is proudly a family-owned and operated business. Every
            order you place supports not just our family, but the hundreds of
            local farmers, producers, and delivery partners who make up the
            Ehmar Foods family. We treat every customer like a member of our
            own household.
          </p>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
            <Truck className="w-7 h-7 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-3">
            Start Shopping Today
          </h2>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto">
            Browse our collection of premium Nigerian food products and enjoy
            fast delivery straight to your doorstep.
          </p>
          <Link to="/shop" className="btn-primary">
            Browse Products
          </Link>
        </div>
      </section>
    </div>
  );
}
