import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

const SUBJECTS = [
  'General Inquiry',
  'Order Issue',
  'Product Question',
  'Bulk Order',
  'Other',
];

const CONTACT_INFO = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+234 800 000 0000',
    href: 'tel:+2348000000000',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+234 800 000 0000',
    href: 'https://wa.me/2348000000000',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@ehmarfoods.com',
    href: 'mailto:info@ehmarfoods.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Lagos, Nigeria',
    href: null,
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon - Sat: 8AM - 8PM\nSunday: 10AM - 6PM',
    href: null,
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
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
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    if (!form.subject) newErrors.subject = 'Please select a subject';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const inputBase =
    'w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors';
  const labelBase = 'block text-sm font-semibold text-gray-700 mb-1.5';

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="gradient-hero py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Have a question or need help with an order? We are here to assist
            you.
          </p>
        </div>
      </section>

      {/* ── Content ──────────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* ── Contact Form (left, 3 cols) ────────── */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-dark mb-6">
                  Send Us a Message
                </h2>

                {submitted && (
                  <div className="mb-6 p-4 rounded-lg bg-success/10 border border-success/20 flex items-start gap-3">
                    <Send className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-dark text-sm">
                        Message sent successfully!
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Thank you for reaching out. We will get back to you
                        within 24 hours.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className={labelBase}>
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        className={`${inputBase} ${errors.name ? 'border-danger' : ''}`}
                      />
                      {errors.name && (
                        <p className="text-danger text-xs mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className={labelBase}>
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@email.com"
                        value={form.email}
                        onChange={handleChange}
                        className={`${inputBase} ${errors.email ? 'border-danger' : ''}`}
                      />
                      {errors.email && (
                        <p className="text-danger text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className={labelBase}>
                        Phone (optional)
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+234 800 000 0000"
                        value={form.phone}
                        onChange={handleChange}
                        className={inputBase}
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className={labelBase}>
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className={`${inputBase} ${errors.subject ? 'border-danger' : ''}`}
                      >
                        <option value="">Select a subject</option>
                        {SUBJECTS.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      {errors.subject && (
                        <p className="text-danger text-xs mt-1">
                          {errors.subject}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelBase}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="How can we help you?"
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputBase} ${errors.message ? 'border-danger' : ''}`}
                    />
                    {errors.message && (
                      <p className="text-danger text-xs mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button type="submit" className="btn-primary">
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* ── Contact Info (right, 2 cols) ───────── */}
            <div className="lg:col-span-2 space-y-6">
              {/* Info card */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-xl font-bold text-dark mb-6">
                  Get in Touch
                </h2>

                <ul className="space-y-6">
                  {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                    <li key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-dark">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            target={href.startsWith('http') ? '_blank' : undefined}
                            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-sm text-gray-500 hover:text-primary transition-colors whitespace-pre-line"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm text-gray-500 whitespace-pre-line">
                            {value}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bulk order callout */}
              <div className="bg-secondary/10 border border-secondary/30 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="w-6 h-6 text-secondary-dark" />
                  <h3 className="font-bold text-dark">Bulk Orders</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  For bulk orders and wholesale inquiries, contact us directly
                  on WhatsApp for the best prices and faster processing.
                </p>
                <a
                  href="https://wa.me/2348000000000?text=Hi%20Ehmar%20Foods!%20I%27m%20interested%20in%20a%20bulk%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Map placeholder */}
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Map placeholder</p>
                    <p className="text-xs text-gray-400 mt-1">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
