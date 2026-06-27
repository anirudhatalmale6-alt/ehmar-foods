import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  CreditCard,
  Truck,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  Building,
} from 'lucide-react';
import { useCart } from '../data/cartContext';
import { formatNaira } from '../data/products';

const DELIVERY_FEE = 3000;
const FREE_DELIVERY_THRESHOLD = 50000;

const NIGERIAN_CITIES = [
  'Lagos',
  'Abuja',
  'Port Harcourt',
  'Kano',
  'Ibadan',
  'Benin City',
  'Kaduna',
  'Enugu',
  'Warri',
  'Calabar',
  'Aba',
  'Owerri',
  'Abeokuta',
  'Uyo',
  'Asaba',
  'Ilorin',
  'Jos',
  'Akure',
  'Onitsha',
  'Lokoja',
];

const NIGERIAN_STATES = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue',
  'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu',
  'FCT Abuja', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina',
  'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo',
  'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara',
];

function generateOrderNumber() {
  const prefix = 'EHM';
  const random = Math.floor(100000 + Math.random() * 900000);
  return `${prefix}-${random}`;
}

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { cartItems, cartTotal, clearCart } = useCart();

  const deliveryFee = cartTotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
  const orderTotal = cartTotal + deliveryFee;

  const [showSuccess, setShowSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    street: '',
    city: '',
    state: '',
    landmark: '',
    notes: '',
    paymentMethod: 'bank-transfer',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    if (!form.street.trim()) newErrors.street = 'Street address is required';
    if (!form.city) newErrors.city = 'City is required';
    if (!form.state) newErrors.state = 'State is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const num = generateOrderNumber();
    setOrderNumber(num);
    setShowSuccess(true);
  };

  const handleCloseModal = () => {
    clearCart();
    setShowSuccess(false);
    navigate('/');
  };

  /* ── Redirect if cart empty ─────────────────────────── */
  if (cartItems.length === 0 && !showSuccess) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-20">
        <p className="text-gray-500 mb-4">Your cart is empty.</p>
        <Link to="/shop" className="btn-primary">
          Go to Shop
        </Link>
      </div>
    );
  }

  const inputBase =
    'w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors';
  const labelBase = 'block text-sm font-semibold text-gray-700 mb-1.5';

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="gradient-hero py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Checkout
          </h1>
          <p className="text-white/80 mt-1">Complete your order</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <form
          onSubmit={handleSubmit}
          className="lg:grid lg:grid-cols-3 lg:gap-10"
        >
          {/* ── Left: Form ───────────────────────────── */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Information */}
            <section className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-lg font-bold text-dark">
                  Contact Information
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className={labelBase}>
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="John Doe"
                    value={form.fullName}
                    onChange={handleChange}
                    className={`${inputBase} ${errors.fullName ? 'border-danger' : ''}`}
                  />
                  {errors.fullName && (
                    <p className="text-danger text-xs mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className={labelBase}>
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+234 800 000 0000"
                    value={form.phone}
                    onChange={handleChange}
                    className={`${inputBase} ${errors.phone ? 'border-danger' : ''}`}
                  />
                  {errors.phone && (
                    <p className="text-danger text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="email" className={labelBase}>
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className={`${inputBase} pl-10 ${errors.email ? 'border-danger' : ''}`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-danger text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
            </section>

            {/* Delivery Address */}
            <section className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-lg font-bold text-dark">
                  Delivery Address
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <label htmlFor="street" className={labelBase}>
                    Street Address
                  </label>
                  <input
                    id="street"
                    name="street"
                    type="text"
                    placeholder="123 Main Street, Lekki"
                    value={form.street}
                    onChange={handleChange}
                    className={`${inputBase} ${errors.street ? 'border-danger' : ''}`}
                  />
                  {errors.street && (
                    <p className="text-danger text-xs mt-1">{errors.street}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="city" className={labelBase}>
                    City
                  </label>
                  <select
                    id="city"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    className={`${inputBase} ${errors.city ? 'border-danger' : ''}`}
                  >
                    <option value="">Select city</option>
                    {NIGERIAN_CITIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  {errors.city && (
                    <p className="text-danger text-xs mt-1">{errors.city}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="state" className={labelBase}>
                    State
                  </label>
                  <select
                    id="state"
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    className={`${inputBase} ${errors.state ? 'border-danger' : ''}`}
                  >
                    <option value="">Select state</option>
                    {NIGERIAN_STATES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.state && (
                    <p className="text-danger text-xs mt-1">{errors.state}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="landmark" className={labelBase}>
                    Landmark / Description
                  </label>
                  <input
                    id="landmark"
                    name="landmark"
                    type="text"
                    placeholder="Near the shopping mall, beside the white building"
                    value={form.landmark}
                    onChange={handleChange}
                    className={inputBase}
                  />
                </div>
              </div>
            </section>

            {/* Delivery Notes */}
            <section className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Truck className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-lg font-bold text-dark">Delivery Notes</h2>
              </div>

              <textarea
                name="notes"
                rows={3}
                placeholder="Any special instructions for delivery? (e.g., call before delivery, gate code, etc.)"
                value={form.notes}
                onChange={handleChange}
                className={inputBase}
              />
            </section>

            {/* Payment Method */}
            <section className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-lg font-bold text-dark">Payment Method</h2>
              </div>

              <div className="space-y-4">
                {/* Bank Transfer */}
                <label
                  className={`flex items-start gap-4 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                    form.paymentMethod === 'bank-transfer'
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank-transfer"
                    checked={form.paymentMethod === 'bank-transfer'}
                    onChange={handleChange}
                    className="mt-1 accent-primary"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-dark">
                        Bank Transfer
                      </span>
                    </div>
                    {form.paymentMethod === 'bank-transfer' && (
                      <div className="mt-3 p-3 bg-white rounded-lg border border-gray-100 text-sm space-y-1">
                        <p className="text-gray-500">Transfer to:</p>
                        <p className="font-semibold text-dark">
                          Bank: Access Bank
                        </p>
                        <p className="font-semibold text-dark">
                          Account Name: Ehmar Foods Ltd
                        </p>
                        <p className="font-semibold text-dark">
                          Account Number: 0123456789
                        </p>
                        <p className="text-xs text-gray-400 mt-2">
                          Please use your order number as the transfer reference.
                        </p>
                      </div>
                    )}
                  </div>
                </label>

                {/* Pay on Delivery */}
                <label
                  className={`flex items-start gap-4 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                    form.paymentMethod === 'pay-on-delivery'
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="pay-on-delivery"
                    checked={form.paymentMethod === 'pay-on-delivery'}
                    onChange={handleChange}
                    className="mt-1 accent-primary"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-dark">
                        Pay on Delivery
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Pay with cash or POS when your order arrives.
                    </p>
                  </div>
                </label>
              </div>
            </section>

            {/* Submit - mobile */}
            <div className="lg:hidden">
              <button type="submit" className="btn-primary w-full text-center">
                Place Order &mdash; {formatNaira(orderTotal)}
              </button>
            </div>
          </div>

          {/* ── Right: Order Summary ─────────────────── */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-6">
              <h2 className="text-lg font-bold text-dark mb-5">
                Order Summary
              </h2>

              <div className="space-y-4 max-h-64 overflow-y-auto pr-1">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gray-100 flex-shrink-0 flex items-center justify-center overflow-hidden">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-dark truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-dark whitespace-nowrap">
                      {formatNaira(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 mt-5 pt-5 space-y-3 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
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
                <div className="border-t border-gray-100 pt-3 flex justify-between">
                  <span className="font-bold text-dark">Total</span>
                  <span className="text-xl font-bold text-primary">
                    {formatNaira(orderTotal)}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary w-full mt-6 text-center"
              >
                Place Order
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* ── Success Modal ──────────────────────────────── */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center animate-[fadeIn_0.3s_ease]">
            <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="w-10 h-10 text-success" />
            </div>

            <h2 className="text-2xl font-bold text-dark mb-2">
              Order Placed Successfully!
            </h2>

            <p className="text-gray-500 mb-4">
              Your order number is
            </p>
            <p className="text-xl font-bold text-primary mb-4">
              {orderNumber}
            </p>

            <p className="text-sm text-gray-500 mb-6">
              We will contact you shortly to confirm your order. Please keep
              your order number for reference.
            </p>

            <div className="space-y-3">
              <a
                href={`https://wa.me/2348000000000?text=${encodeURIComponent(
                  `Hi Ehmar Foods! I just placed order ${orderNumber}. I'd like to confirm my order.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
              >
                <Phone className="w-4 h-4" />
                Confirm on WhatsApp
              </a>

              <button
                onClick={handleCloseModal}
                className="btn-secondary w-full justify-center"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
