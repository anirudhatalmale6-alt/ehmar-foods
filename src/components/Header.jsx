import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Phone, MessageCircle, Search, ShoppingCart, Menu, X, Leaf } from 'lucide-react';
import { useCart } from '../data/cartContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getCartCount } = useCart();
  const cartCount = getCartCount();
  const navigate = useNavigate();

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Shop', to: '/shop' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="sticky top-0 z-50">
      {/* ── Top Bar ──────────────────────────────────────── */}
      <div className="bg-primary text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <a
              href="tel:+2348001234567"
              className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">+234 800 123 4567</span>
            </a>
            <a
              href="https://wa.me/2348001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
          <p className="text-white/90 text-xs sm:text-sm">
            Free delivery on orders over <strong className="text-secondary">&#8358;50,000</strong>
          </p>
        </div>
      </div>

      {/* ── Main Header ──────────────────────────────────── */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0 no-underline">
            <div className="bg-primary rounded-full p-2">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div className="leading-tight">
              <span className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
                Ehmar
              </span>
              <span className="text-xl sm:text-2xl font-bold text-secondary tracking-tight ml-1">
                Foods
              </span>
              <p className="text-[10px] sm:text-xs text-gray-500 -mt-0.5 tracking-wide uppercase">
                Fresh &bull; Quality &bull; Affordable
              </p>
            </div>
          </Link>

          {/* Search Bar (hidden on mobile, shown on md+) */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex flex-1 max-w-md mx-4"
          >
            <div className="flex w-full border-2 border-gray-200 rounded-lg overflow-hidden focus-within:border-primary transition-colors">
              <input
                type="text"
                placeholder="Search for groceries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2.5 text-sm outline-none font-[Poppins] text-gray-700 placeholder-gray-400"
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 hover:bg-primary-dark transition-colors cursor-pointer"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </form>

          {/* Cart + Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/cart"
              className="relative flex items-center gap-1.5 text-gray-700 hover:text-primary transition-colors no-underline"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center leading-none">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
              <span className="hidden sm:inline text-sm font-medium">Cart</span>
            </Link>

            {/* Hamburger */}
            <button
              className="md:hidden p-1.5 text-gray-700 hover:text-primary transition-colors cursor-pointer bg-transparent border-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search (visible on mobile only) */}
        <form
          onSubmit={handleSearch}
          className="md:hidden px-4 pb-3"
        >
          <div className="flex w-full border-2 border-gray-200 rounded-lg overflow-hidden focus-within:border-primary transition-colors">
            <input
              type="text"
              placeholder="Search for groceries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-3 py-2 text-sm outline-none font-[Poppins] text-gray-700 placeholder-gray-400"
            />
            <button
              type="submit"
              className="bg-primary text-white px-3 hover:bg-primary-dark transition-colors cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>

      {/* ── Navigation Bar ───────────────────────────────── */}
      <nav className="bg-primary hidden md:block">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center gap-1 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="block px-5 py-3 text-white/90 text-sm font-medium hover:text-white hover:bg-white/10 rounded-t-lg transition-colors no-underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ── Mobile Navigation Menu ───────────────────────── */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <ul className="list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.to} className="border-b border-gray-50">
                <Link
                  to={link.to}
                  className="block px-6 py-3.5 text-gray-700 text-sm font-medium hover:bg-primary/5 hover:text-primary transition-colors no-underline"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
