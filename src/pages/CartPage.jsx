import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../data/cartContext';
import { formatNaira } from '../data/products';

const DELIVERY_FEE = 3000;
const FREE_DELIVERY_THRESHOLD = 50000;

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  const deliveryFee = cartTotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
  const orderTotal = cartTotal + deliveryFee;

  /* ── Empty state ─────────────────────────────────────── */
  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-20">
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <ShoppingBag className="w-12 h-12 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-dark mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-8 text-center max-w-md">
          Looks like you haven't added any products yet. Browse our store to
          find premium Nigerian food products.
        </p>
        <Link to="/shop" className="btn-primary">
          <ShoppingBag className="w-5 h-5" />
          Shop Now
        </Link>
      </div>
    );
  }

  /* ── Cart with items ─────────────────────────────────── */
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="gradient-hero py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Shopping Cart
          </h1>
          <p className="text-white/80 mt-1">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in
            your cart
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="lg:grid lg:grid-cols-3 lg:gap-10">
          {/* ── Items list ──────────────────────────────── */}
          <div className="lg:col-span-2 space-y-4">
            {/* Desktop table header */}
            <div className="hidden md:grid grid-cols-12 gap-4 text-sm font-semibold text-gray-500 uppercase tracking-wide px-6 pb-2">
              <span className="col-span-5">Product</span>
              <span className="col-span-2 text-center">Price</span>
              <span className="col-span-2 text-center">Quantity</span>
              <span className="col-span-2 text-right">Total</span>
              <span className="col-span-1" />
            </div>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm p-4 md:p-6 md:grid md:grid-cols-12 md:gap-4 md:items-center"
              >
                {/* Product info */}
                <div className="flex items-center gap-4 md:col-span-5">
                  <div className="w-20 h-20 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <ShoppingBag className="w-8 h-8 text-gray-300" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-dark truncate">
                      {item.name}
                    </h3>
                    {item.category && (
                      <span className="badge-category mt-1">{item.category}</span>
                    )}
                  </div>
                </div>

                {/* Unit price */}
                <div className="hidden md:block md:col-span-2 text-center text-gray-600">
                  {formatNaira(item.price)}
                </div>

                {/* Quantity controls */}
                <div className="flex items-center justify-between mt-4 md:mt-0 md:col-span-2 md:justify-center">
                  <span className="text-sm text-gray-500 md:hidden">Qty</span>
                  <div className="inline-flex items-center border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-600"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-10 text-center font-semibold text-sm select-none">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-600"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Line total */}
                <div className="flex items-center justify-between mt-3 md:mt-0 md:col-span-2 md:justify-end">
                  <span className="text-sm text-gray-500 md:hidden">
                    Subtotal
                  </span>
                  <span className="font-bold text-primary text-lg">
                    {formatNaira(item.price * item.quantity)}
                  </span>
                </div>

                {/* Remove */}
                <div className="hidden md:flex md:col-span-1 justify-end">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-danger hover:bg-red-50 transition-colors"
                    aria-label={`Remove ${item.name}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Mobile remove */}
                <div className="mt-3 md:hidden">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-danger flex items-center gap-1"
                  >
                    <Trash2 className="w-4 h-4" />
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* Continue shopping link */}
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors mt-4"
            >
              <ArrowLeft className="w-5 h-5" />
              Continue Shopping
            </Link>
          </div>

          {/* ── Summary sidebar ────────────────────────── */}
          <div className="mt-10 lg:mt-0">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-6">
              <h2 className="text-xl font-bold text-dark mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>
                    Subtotal ({cartItems.reduce((s, i) => s + i.quantity, 0)}{' '}
                    items)
                  </span>
                  <span className="font-semibold text-dark">
                    {formatNaira(cartTotal)}
                  </span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Delivery Fee</span>
                  {deliveryFee === 0 ? (
                    <span className="font-semibold text-success">FREE</span>
                  ) : (
                    <span className="font-semibold text-dark">
                      {formatNaira(deliveryFee)}
                    </span>
                  )}
                </div>

                {cartTotal < FREE_DELIVERY_THRESHOLD && (
                  <p className="text-xs text-gray-400 pt-1">
                    Add{' '}
                    <span className="font-semibold text-primary">
                      {formatNaira(FREE_DELIVERY_THRESHOLD - cartTotal)}
                    </span>{' '}
                    more to qualify for free delivery
                  </p>
                )}

                <div className="border-t border-gray-100 pt-4 flex justify-between">
                  <span className="text-base font-bold text-dark">Total</span>
                  <span className="text-xl font-bold text-primary">
                    {formatNaira(orderTotal)}
                  </span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="btn-primary w-full mt-6 text-center"
              >
                Proceed to Checkout
              </Link>

              <p className="text-xs text-gray-400 text-center mt-4">
                Taxes included. Delivery fee calculated at checkout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
