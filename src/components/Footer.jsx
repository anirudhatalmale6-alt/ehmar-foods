import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle, Clock, Globe, Leaf } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'Shop', to: '/shop' },
    { label: 'About Us', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ];

  const customerService = [
    { label: 'Delivery Info', to: '/delivery-info' },
    { label: 'Return Policy', to: '/return-policy' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Terms & Conditions', to: '/terms' },
  ];

  return (
    <footer className="bg-primary-dark text-white">
      {/* ── Main Footer Grid ─────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white/10 rounded-full p-1.5">
                <Leaf className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <span className="text-lg font-bold text-white">Ehmar</span>
                <span className="text-lg font-bold text-secondary ml-1">Foods</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Ehmar Foods is your trusted online grocery store in Nigeria. We deliver
              fresh produce, pantry essentials, and authentic Nigerian food products
              straight to your doorstep at the best prices.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://ehmarfoods.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:bg-secondary hover:text-white transition-colors"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/2348001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:bg-secondary hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="list-none m-0 p-0 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/70 text-sm hover:text-secondary transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-white">Customer Service</h3>
            <ul className="list-none m-0 p-0 space-y-2.5">
              {customerService.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/70 text-sm hover:text-secondary transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-white">Contact Info</h3>
            <ul className="list-none m-0 p-0 space-y-3.5">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">
                  12 Market Street, Lekki Phase 1, Lagos, Nigeria
                </span>
              </li>
              <li>
                <a
                  href="tel:+2348001234567"
                  className="flex items-center gap-3 text-white/70 text-sm hover:text-secondary transition-colors no-underline"
                >
                  <Phone className="w-4 h-4 text-secondary shrink-0" />
                  +234 800 123 4567
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2348001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 text-sm hover:text-secondary transition-colors no-underline"
                >
                  <MessageCircle className="w-4 h-4 text-secondary shrink-0" />
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ehmarfoods.com"
                  className="flex items-center gap-3 text-white/70 text-sm hover:text-secondary transition-colors no-underline"
                >
                  <Mail className="w-4 h-4 text-secondary shrink-0" />
                  info@ehmarfoods.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-secondary shrink-0" />
                <span className="text-white/70 text-sm">Mon - Sat: 8am - 8pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Payment Methods & Copyright ──────────────────── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-white/50 text-xs">
            <span>Payment Methods:</span>
            <span className="bg-white/10 px-3 py-1 rounded text-white/70 font-medium">
              Bank Transfer
            </span>
            <span className="bg-white/10 px-3 py-1 rounded text-white/70 font-medium">
              Paystack
            </span>
          </div>
          <p className="text-white/50 text-xs">
            &copy; {currentYear} Ehmar Foods. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
