import { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ShoppingCart,
  Minus,
  Plus,
  ChevronRight,
  ArrowRight,
  CheckCircle,
  Package,
  Truck,
  Shield,
} from 'lucide-react';
import { products, categories, formatNaira } from '../data/products';
import { useCart } from '../data/cartContext';

/* ══════════════════════════════════════════════════════════════
   ProductPage — single product detail view
   ══════════════════════════════════════════════════════════════ */

export default function ProductPage() {
  const { id } = useParams();
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === id);

  const related = useMemo(() => {
    if (!product) return [];
    return products
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 4);
  }, [product]);

  /* ── Not found ───────────────────────────────────────────── */

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <span className="text-7xl block mb-6">🛒</span>
          <h1 className="text-3xl font-bold text-dark mb-3">Product Not Found</h1>
          <p className="text-gray-500 mb-8">
            Sorry, we could not find the product you are looking for. It may have been
            removed or the link might be incorrect.
          </p>
          <Link to="/shop" className="btn-primary no-underline">
            <ShoppingCart className="w-5 h-5" /> Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const catObj = categories.find((c) => c.slug === product.category);

  const handleAdd = () => {
    addItem(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Breadcrumb ───────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-1 text-sm text-gray-400 flex-wrap">
            <Link to="/" className="hover:text-primary no-underline text-gray-400">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
            <Link to="/shop" className="hover:text-primary no-underline text-gray-400">
              Shop
            </Link>
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
            <Link
              to={`/shop/${product.category}`}
              className="hover:text-primary no-underline text-gray-400"
            >
              {catObj?.name}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="text-dark font-medium truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* ── Product Detail ───────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Image area */}
            <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/5 flex items-center justify-center min-h-[320px] lg:min-h-[480px]">
              {/* Decorative circles */}
              <div className="absolute top-8 right-8 w-24 h-24 rounded-full bg-primary/5" />
              <div className="absolute bottom-12 left-12 w-16 h-16 rounded-full bg-secondary/10" />
              <span className="text-[8rem] sm:text-[10rem] select-none relative z-10">
                {product.emoji}
              </span>
              <span className="badge-category absolute top-4 left-4 text-sm">
                {catObj?.name}
              </span>
            </div>

            {/* Info */}
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col">
              <div>
                <Link
                  to={`/shop/${product.category}`}
                  className="badge-category no-underline hover:bg-primary/20 transition-colors"
                >
                  {catObj?.emoji} {catObj?.name}
                </Link>

                <h1 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-dark leading-tight">
                  {product.name}
                </h1>

                <p className="mt-4 text-gray-500 leading-relaxed text-base sm:text-lg">
                  {product.description}
                </p>

                {/* Price */}
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-bold text-primary">
                    {formatNaira(product.price)}
                  </span>
                </div>
              </div>

              {/* Quantity + Add to cart */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-gray-600">Quantity:</span>
                  <div className="inline-flex items-center border border-gray-200 rounded-lg">
                    <button
                      type="button"
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      className="px-3 py-2 text-gray-500 hover:text-dark hover:bg-gray-50 transition-colors rounded-l-lg"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-5 py-2 text-center font-semibold text-dark min-w-[3rem] border-x border-gray-200">
                      {qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQty((q) => q + 1)}
                      className="px-3 py-2 text-gray-500 hover:text-dark hover:bg-gray-50 transition-colors rounded-r-lg"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleAdd}
                  className={`w-full sm:w-auto px-10 py-3.5 rounded-lg font-semibold text-base inline-flex items-center justify-center gap-2 transition-all duration-300 ${
                    added
                      ? 'bg-success text-white'
                      : 'bg-primary text-white hover:bg-primary-dark hover:shadow-lg'
                  }`}
                >
                  {added ? (
                    <>
                      <CheckCircle className="w-5 h-5" /> Added to Cart!
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" /> Add to Cart
                    </>
                  )}
                </button>
              </div>

              {/* Trust badges */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { icon: Truck, label: 'Fast Delivery' },
                    { icon: Shield, label: 'Quality Guaranteed' },
                    { icon: Package, label: 'Secure Packaging' },
                  ].map((badge) => (
                    <div
                      key={badge.label}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <badge.icon className="w-4 h-4 text-primary flex-shrink-0" />
                      {badge.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Product Details / Specs ──────────────────────────── */}
        {product.details && product.details.length > 0 && (
          <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-dark mb-5">Product Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.details.map((detail) => (
                <div key={detail} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── You Might Also Like ─────────────────────────────── */}
        {related.length > 0 && (
          <div className="mt-12">
            <div className="flex items-end justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-dark">You Might Also Like</h2>
                <p className="mt-1 text-gray-500">
                  More from {catObj?.name}
                </p>
              </div>
              <Link
                to={`/shop/${product.category}`}
                className="hidden sm:inline-flex items-center gap-1 text-primary font-semibold hover:gap-2 transition-all no-underline"
              >
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((rel) => (
                <div key={rel.id} className="card-product flex flex-col">
                  <Link to={`/product/${rel.id}`} className="no-underline">
                    <div className="relative h-44 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      <span className="text-6xl select-none">{rel.emoji}</span>
                    </div>
                  </Link>
                  <div className="p-4 flex flex-col flex-1">
                    <Link
                      to={`/product/${rel.id}`}
                      className="font-semibold text-dark hover:text-primary transition-colors no-underline text-sm"
                    >
                      {rel.name}
                    </Link>
                    <p className="mt-1 text-xs text-gray-500 line-clamp-2 flex-1">
                      {rel.description}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="price-tag text-base">{formatNaira(rel.price)}</span>
                      <button
                        type="button"
                        className="btn-cart text-xs px-3 py-1.5"
                        onClick={() => addItem(rel)}
                      >
                        <ShoppingCart className="w-3.5 h-3.5" /> Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile "view all" link */}
            <div className="sm:hidden mt-6 text-center">
              <Link
                to={`/shop/${product.category}`}
                className="inline-flex items-center gap-1 text-primary font-semibold no-underline"
              >
                View all {catObj?.name} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
