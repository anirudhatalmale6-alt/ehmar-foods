/* ── Ehmar Foods – Product catalogue & helpers ───────────── */

export const categories = [
  { slug: 'snacks',    name: 'Snacks',    emoji: '🍿' },
  { slug: 'proteins',  name: 'Proteins',  emoji: '🥩' },
  { slug: 'grains',    name: 'Grains',    emoji: '🌾' },
  { slug: 'frozen',    name: 'Frozen',    emoji: '🧊' },
  { slug: 'spices',    name: 'Spices',    emoji: '🌶️' },
  { slug: 'beverages', name: 'Beverages', emoji: '🥤' },
];

export const products = [
  // ── Snacks ─────────────────────────────────────────────
  {
    id: 'snk-001',
    name: 'Plantain Chips (Salted)',
    category: 'snacks',
    emoji: '🍌',
    price: 1500,
    description:
      'Crispy, thinly sliced plantain chips seasoned with just the right amount of sea salt. A classic Nigerian snack perfect for any time of day.',
    details: ['150 g pack', 'Made from ripe plantains', 'No preservatives', 'Gluten-free'],
  },
  {
    id: 'snk-002',
    name: 'Chin Chin (Original)',
    category: 'snacks',
    emoji: '🍪',
    price: 1200,
    description:
      'Crunchy, sweet fried dough bites — the quintessential Nigerian chin chin made with premium flour and nutmeg.',
    details: ['200 g pack', 'Traditional recipe', 'Baked with nutmeg', 'Family-size option available'],
  },
  {
    id: 'snk-003',
    name: 'Kulikuli (Groundnut Snack)',
    category: 'snacks',
    emoji: '🥜',
    price: 800,
    description:
      'Savoury groundnut snack with a satisfying crunch. A protein-rich traditional treat from Northern Nigeria.',
    details: ['120 g pack', 'High protein', 'No artificial flavours', 'Traditional recipe'],
  },

  // ── Proteins ───────────────────────────────────────────
  {
    id: 'prt-001',
    name: 'Stockfish (Okporoko)',
    category: 'proteins',
    emoji: '🐟',
    price: 8500,
    description:
      'Premium dried stockfish, essential for authentic Nigerian soups like Egusi and Ogbono. Rich umami flavour.',
    details: ['500 g pack', 'Air-dried Norwegian cod', 'No additives', 'Long shelf life'],
  },
  {
    id: 'prt-002',
    name: 'Dried Crayfish',
    category: 'proteins',
    emoji: '🦐',
    price: 3500,
    description:
      'Finely ground dried crayfish — a must-have seasoning for Jollof Rice, stews, and soups.',
    details: ['250 g pack', 'Ground fresh', 'Wild-caught', 'Packed in resealable bag'],
  },
  {
    id: 'prt-003',
    name: 'Smoked Catfish',
    category: 'proteins',
    emoji: '🐠',
    price: 6000,
    description:
      'Whole smoked catfish, kiln-dried for intense flavour. Perfect for pepper soup and stews.',
    details: ['2 pieces', 'Kiln-smoked', 'High protein', 'Ready to cook'],
  },

  // ── Grains ─────────────────────────────────────────────
  {
    id: 'grn-001',
    name: 'Ofada Rice (Local)',
    category: 'grains',
    emoji: '🍚',
    price: 4500,
    description:
      'Unpolished short-grain Nigerian Ofada rice with a distinctive nutty aroma. Pairs perfectly with Ofada sauce.',
    details: ['2 kg bag', 'Unpolished', 'Locally sourced', 'Rich in fibre'],
  },
  {
    id: 'grn-002',
    name: 'Garri (White, Ijebu)',
    category: 'grains',
    emoji: '🥣',
    price: 2000,
    description:
      'Fine-grained white Ijebu garri — ideal for soaking (garri soaking) or making eba. Sour fermented flavour.',
    details: ['2 kg bag', 'Ijebu grade', 'Fine texture', 'Naturally fermented'],
  },
  {
    id: 'grn-003',
    name: 'Yam Flour (Elubo)',
    category: 'grains',
    emoji: '🫓',
    price: 3000,
    description:
      'Finely milled yam flour for making smooth amala. Made from sun-dried yam slices.',
    details: ['1 kg bag', 'Sun-dried', 'No additives', 'Smooth texture'],
  },

  // ── Frozen ─────────────────────────────────────────────
  {
    id: 'frz-001',
    name: 'Frozen Whole Chicken',
    category: 'frozen',
    emoji: '🍗',
    price: 7500,
    description:
      'Premium frozen whole chicken, cleaned and ready to cook. Great for stews, grills, and pepper soup.',
    details: ['1.5 kg avg', 'Flash-frozen', 'Halal certified', 'Hormone-free'],
  },
  {
    id: 'frz-002',
    name: 'Frozen Croaker Fish',
    category: 'frozen',
    emoji: '🐟',
    price: 5500,
    description:
      'Wild-caught Atlantic croaker, individually quick-frozen to lock in freshness. Ideal for frying or grilling.',
    details: ['1 kg pack', 'Wild-caught', 'IQF processed', 'Scaled & gutted'],
  },
  {
    id: 'frz-003',
    name: 'Frozen Goat Meat',
    category: 'frozen',
    emoji: '🥩',
    price: 9000,
    description:
      'Chopped goat meat cuts, perfect for Nigerian pepper soup, stew, or suya. Bone-in for extra flavour.',
    details: ['1 kg pack', 'Bone-in cuts', 'Halal certified', 'Flash-frozen'],
  },

  // ── Spices ─────────────────────────────────────────────
  {
    id: 'spc-001',
    name: 'Ground Cameroon Pepper',
    category: 'spices',
    emoji: '🌶️',
    price: 2500,
    description:
      'Fiery ground Cameroon pepper (ata rodo) for authentic heat in soups, stews, and jollof rice.',
    details: ['200 g jar', 'Pure ground', 'Intense heat', 'Sealed glass jar'],
  },
  {
    id: 'spc-002',
    name: 'Locust Beans (Iru/Dawadawa)',
    category: 'spices',
    emoji: '🫘',
    price: 1800,
    description:
      'Fermented locust beans — a traditional umami seasoning that elevates Egusi, Efo Riro, and more.',
    details: ['150 g pack', 'Naturally fermented', 'Pungent flavour', 'Rich in protein'],
  },
  {
    id: 'spc-003',
    name: 'Suya Spice Mix (Yaji)',
    category: 'spices',
    emoji: '🧂',
    price: 1500,
    description:
      'Authentic Yaji spice blend with ground peanuts, ginger, and chilli. The secret to perfect suya.',
    details: ['200 g pack', 'Groundnut-based', 'Medium heat', 'Ready to use'],
  },

  // ── Beverages ──────────────────────────────────────────
  {
    id: 'bev-001',
    name: 'Zobo Drink (Hibiscus)',
    category: 'beverages',
    emoji: '🥤',
    price: 1000,
    description:
      'Refreshing chilled zobo drink made from dried hibiscus flowers with hints of ginger and clove.',
    details: ['1 L bottle', 'All-natural', 'No artificial colour', 'Serve chilled'],
  },
  {
    id: 'bev-002',
    name: 'Palm Wine (Fresh)',
    category: 'beverages',
    emoji: '🍷',
    price: 3500,
    description:
      'Freshly tapped palm wine — sweet, mildly alcoholic, and traditionally Nigerian. Best enjoyed cold.',
    details: ['1 L bottle', 'Freshly tapped', 'Naturally fermented', 'Refrigerate on arrival'],
  },
  {
    id: 'bev-003',
    name: 'Kunu Aya (Tiger Nut Milk)',
    category: 'beverages',
    emoji: '🥛',
    price: 1200,
    description:
      'Creamy tiger nut milk blended with dates, coconut, and a touch of ginger. A refreshing dairy-free drink.',
    details: ['500 ml bottle', 'Dairy-free', 'No added sugar', 'Rich in vitamins'],
  },
];

/** IDs of products to feature on the homepage */
export const FEATURED_IDS = ['snk-001', 'prt-001', 'grn-001', 'spc-003'];

/** Format number as Nigerian Naira */
export function formatNaira(amount) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
