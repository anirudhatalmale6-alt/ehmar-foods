import { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ShoppingCart, Search, SlidersHorizontal, X, ChevronRight } from 'lucide-react';
import { products, categories, formatNaira } from '../data/products';
import { useCart } from '../data/cartContext';

/* ══════════════════════════════════════════════════════════════
   ShopPage — product listing with sidebar filters & sorting
   ══════════════════════════════════════════════════════════════ */

const SORT_OPTIONS = [
  { value: 'default',    label: 'Default' },
  { value: 'price-asc',  label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc',   label: 'Name: A - Z' },
];

export default function ShopPage() {
  const { category: categoryParam } = useParams();
  const { addItem } = useCart();

  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('default');
  const [mobileSidebar, setMobileSidebar] = useState(false);

  /* ── derived data ────────────────────────────────────────── */

  const activeCategory = categoryParam || null;

  const filtered = useMemo(() => {
    let list = [...products];

    // Category filter
    if (activeCategory) {
      list = list.filter((p) => p.category === activeCategory);
    }

    // Search filter
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q),
      );
    }

    // Sort
    switch (sort) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return list;
  }, [activeCategory, search, sort]);

  const activeCategoryObj = categories.find((c) => c.slug === activeCategory);

  /* ── Sidebar content (shared mobile/desktop) ─────────────── */
  const SidebarContent = () => (
    <nav className="space-y-1">
      <Link
        to="/shop"
        className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors no-underline ${
          !activeCategory
            ? 'bg-primary text-white'
            : 'text-gray-600 hover:bg-gray-100 hover:text-dark'
        }`}
      >
        All Products
        <span className="ml-auto text-xs opacity-70">{products.length}</span>
      </Link>
      {categories.map((cat) => {
        const count = products.filter((p) => p.category === cat.slug).length;
        return (
          <Link
            key={cat.slug}
            to={`/shop/${cat.slug}`}
            onClick={() => setMobileSidebar(false)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors no-underline ${
              activeCategory === cat.slug
                ? 'bg-primary text-white'
                : 'text-gray-600 hover:bg-gray-100 hover:text-dark'
            }`}
          >
            <span className="text-lg">{cat.emoji}</span>
            {cat.name}
            <span className="ml-auto text-xs opacity-70">{count}</span>
          </Link>
        );
      })}
    </nav>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Header bar ───────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1 text-sm text-gray-400 mb-3">
            <Link to="/" className="hover:text-primary no-underline text-gray-400">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link
              to="/shop"
              className={`no-underline ${activeCategory ? 'text-gray-400 hover:text-primary' : 'text-primary font-medium'}`}
            >
              Shop
            </Link>
            {activeCategoryObj && (
              <>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-primary font-medium">{activeCategoryObj.name}</span>
              </>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-dark">
            {activeCategoryObj ? activeCategoryObj.name : 'All Products'}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* ── Desktop sidebar ────────────────────────────────── */}
          <aside className="hidden lg:block w-60 flex-shrink-0">
            <div className="sticky top-24 bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-4">
                Categories
              </h3>
              <SidebarContent />
            </div>
          </aside>

          {/* ── Main content ──────────────────────────────────── */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                />
                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Sort */}
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary cursor-pointer"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>

              {/* Mobile filter toggle */}
              <button
                type="button"
                onClick={() => setMobileSidebar(true)}
                className="lg:hidden inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" /> Filters
              </button>
            </div>

            {/* Result count */}
            <p className="text-sm text-gray-400 mb-4">
              Showing <span className="font-semibold text-dark">{filtered.length}</span>{' '}
              product{filtered.length !== 1 ? 's' : ''}
            </p>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <span className="text-6xl mb-4 block">🔍</span>
                <h3 className="text-xl font-bold text-dark mb-2">No products found</h3>
                <p className="text-gray-500 mb-6">
                  Try a different search term or browse another category.
                </p>
                <Link to="/shop" className="btn-primary no-underline">
                  View all products
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((product) => {
                  const catObj = categories.find((c) => c.slug === product.category);
                  return (
                    <div key={product.id} className="card-product flex flex-col">
                      {/* Image area */}
                      <Link to={`/product/${product.id}`} className="no-underline">
                        <div className="relative h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                          <span className="text-6xl select-none">{product.emoji}</span>
                          <span className="badge-category absolute top-3 left-3">
                            {catObj?.name}
                          </span>
                        </div>
                      </Link>

                      {/* Info */}
                      <div className="p-5 flex flex-col flex-1">
                        <Link
                          to={`/product/${product.id}`}
                          className="font-semibold text-dark hover:text-primary transition-colors no-underline"
                        >
                          {product.name}
                        </Link>
                        <p className="mt-1.5 text-sm text-gray-500 line-clamp-2 flex-1">
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
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Mobile sidebar overlay ─────────────────────────── */}
      {mobileSidebar && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileSidebar(false)}
          />
          {/* Panel */}
          <div className="absolute top-0 left-0 bottom-0 w-72 bg-white shadow-xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-lg text-dark">Categories</h3>
              <button
                type="button"
                onClick={() => setMobileSidebar(false)}
                className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <SidebarContent />
          </div>
        </div>
      )}
    </div>
  );
}
