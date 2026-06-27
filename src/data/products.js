/* ── Ehmar Foods – Product catalogue & helpers ───────────── */

export const categories = [
  { slug: 'nuts-snacks',  name: 'Nuts & Snacks',      emoji: '🥜' },
  { slug: 'seafood',      name: 'Seafood & Fish',      emoji: '🐟' },
  { slug: 'smoked-meats', name: 'Smoked Meats',        emoji: '🍖' },
  { slug: 'beans-grains', name: 'Beans & Grains',      emoji: '🌾' },
  { slug: 'oils',         name: 'Oils & Pantry',       emoji: '🫒' },
  { slug: 'frozen',       name: 'Frozen Foods',         emoji: '🧊' },
  { slug: 'teas',         name: 'Teas & Wellness',      emoji: '🍵' },
  { slug: 'kitchen',      name: 'Kitchen Accessories',  emoji: '🍽️' },
];

export const products = [
  // ── Nuts & Snacks ─────────────────────────────────────
  {
    id: 'ehm-001',
    name: 'Ehmar Foods Mixed Nuts',
    category: 'nuts-snacks',
    emoji: '🥜',
    price: 7500,
    unit: 'per pack',
    description:
      'Ehmar mixed nuts are snacks consisting of peanuts, cashews, almonds, walnuts, pecans & pistachios. A delicious blend of roasted premium quality nuts.',
    details: ['Premium quality blend', 'Roasted to perfection', 'Rich in protein & healthy fats', 'Resealable pack'],
  },
  {
    id: 'ehm-002',
    name: 'Ehmar Foods High Protein Dehydrated Refried Beans',
    category: 'beans-grains',
    emoji: '🫘',
    price: 3500,
    unit: 'per 3g pouch',
    description:
      'Premium high protein dehydrated refried beans, packaged in a convenient pouch. Made from premium quality beans.',
    details: ['High protein content', 'Dehydrated for long shelf life', 'Easy to prepare', 'Made from quality beans'],
  },
  {
    id: 'ehm-003',
    name: 'Dried Crayfish',
    category: 'seafood',
    emoji: '🦐',
    price: 25000,
    unit: '1kg pack',
    description:
      'Premium quality clean dried crayfish, carefully sorted and free from shells. Essential for Nigerian soups and stews.',
    details: ['1kg pack', 'Carefully sorted', 'Shell-free', 'Sun-dried for rich flavour'],
  },
  {
    id: 'ehm-004',
    name: 'Asa Fish (Large Catfish)',
    category: 'seafood',
    emoji: '🐟',
    price: 15000,
    unit: 'pack (2 large catfish)',
    description:
      'Fresh Asa fish — 2 large catfish per pack. A Nigerian favourite for pepper soup, stew, and grilling.',
    details: ['2 large catfish per pack', 'Fresh and cleaned', 'Perfect for pepper soup', 'Rich in omega-3'],
  },
  {
    id: 'ehm-005',
    name: 'Smoked Mangala Fish',
    category: 'seafood',
    emoji: '🐠',
    price: 20000,
    unit: 'pack (3 pieces)',
    description:
      'Rich, smoky flavour Mangala fish — 3 pieces per pack. Perfect for soups, stews, and traditional Nigerian dishes.',
    details: ['3 pieces per pack', 'Wood-smoked', 'Rich smoky flavour', 'Great for soups & stews'],
  },
  {
    id: 'ehm-006',
    name: 'Frozen French Fries',
    category: 'frozen',
    emoji: '🍟',
    price: 15000,
    unit: '2kg bag',
    description:
      'Premium frozen french fries, crispy and delicious. Perfect for home cooking. Crisp, straight-cut potatoes.',
    details: ['2kg bag', 'Straight-cut', 'Quick fry or oven bake', 'Premium quality potatoes'],
  },
  {
    id: 'ehm-007',
    name: 'White Mushrooms',
    category: 'frozen',
    emoji: '🍄',
    price: 2000,
    unit: 'per pack',
    description:
      'Fresh white mushrooms, great for soups, stews, stir-fries, and everyday cooking. Small, hand-picked button mushrooms.',
    details: ['Fresh pack', 'Hand-picked', 'Button variety', 'Ready to cook'],
  },
  {
    id: 'ehm-008',
    name: 'Stone-Free Clean Beans',
    category: 'beans-grains',
    emoji: '🫘',
    price: 2500,
    unit: '1kg',
    description:
      'Premium quality beans, carefully sorted and cleaned — completely stone-free. Ready to cook without extra sorting.',
    details: ['1kg pack', '100% stone-free', 'Carefully sorted', 'Premium quality'],
  },
  {
    id: 'ehm-009',
    name: 'Palm Oil (5L Container)',
    category: 'oils',
    emoji: '🫒',
    price: 20000,
    unit: '5L container',
    description:
      'Pure, unrefined red palm oil in a 5L plastic container. Rich in vitamins and natural colour. Essential for Nigerian cooking.',
    details: ['5 litres', '100% pure & natural', 'Rich red colour', 'No additives'],
  },
  {
    id: 'ehm-010',
    name: 'Palm Oil Private Label',
    category: 'oils',
    emoji: '🏷️',
    price: 3000,
    unit: 'per can',
    description:
      'Personalised Ehmar 60cl Palm Oil cans with your custom label — perfect for gifts, events, and branding.',
    details: ['60cl can', 'Custom label available', 'Pure palm oil', 'Great for gifting'],
  },
  {
    id: 'ehm-011',
    name: 'Large Snails',
    category: 'seafood',
    emoji: '🐌',
    price: 15000,
    unit: '5 snails',
    description:
      'Fresh, cleaned large snails. Great for pepper soup, stew, and traditional Nigerian dishes.',
    details: ['5 snails per pack', 'Cleaned and ready', 'Fresh quality', 'Perfect for pepper soup'],
  },
  {
    id: 'ehm-012',
    name: 'Benin Giant African Snails',
    category: 'seafood',
    emoji: '🐌',
    price: 40000,
    unit: '5 snails',
    description:
      'Premium Benin Giant African snails — the largest variety, prized for their rich, meaty texture.',
    details: ['5 giant snails', 'Benin variety', 'Extra large size', 'Premium quality'],
  },
  {
    id: 'ehm-013',
    name: 'Smoked Rabbit Meat',
    category: 'smoked-meats',
    emoji: '🐇',
    price: 45000,
    unit: 'whole rabbit',
    description:
      'One of the most tasty, tender, juicy, high protein meat around, slow-smoked to perfection and seasoned with our signature blend of spices. Great for daily enjoyment.',
    details: ['Whole rabbit', 'Slow smoked to perfection', 'High protein', 'Signature spice blend'],
  },
  {
    id: 'ehm-014',
    name: 'Palm Oil (60cl Can)',
    category: 'oils',
    emoji: '🫒',
    price: 30000,
    unit: 'pack of 12 (60cl cans)',
    description:
      'Pure, unrefined red palm oil in a 60cl sealed can. Rich in vitamins and natural nutrients. Bulk pack of 12 cans.',
    details: ['12 x 60cl cans', 'Bulk value pack', '100% natural', 'Long shelf life'],
  },
  {
    id: 'ehm-015',
    name: 'Giant African Snails',
    category: 'seafood',
    emoji: '🐌',
    price: 30000,
    unit: '5 snails',
    description:
      'Fresh, cleaned Giant African snails. Perfect for pepper soup, stew, and traditional Nigerian cooking.',
    details: ['5 snails per pack', 'Cleaned premium quality', 'Ready to cook', 'Rich in protein'],
  },
  {
    id: 'ehm-016',
    name: 'Dried Crayfish (Ground)',
    category: 'seafood',
    emoji: '🦐',
    price: 1500,
    unit: 'pack (250g)',
    description:
      'High-quality sun-dried crayfish, finely ground. Essential ingredient for egusi, jollof rice, and Nigerian stews.',
    details: ['250g pack', 'Finely ground', 'Sun-dried', 'Resealable packaging'],
  },
  {
    id: 'ehm-017',
    name: 'Smoked Fish (Eja Abo / Sole Fish)',
    category: 'seafood',
    emoji: '🐟',
    price: 2800,
    unit: 'pack (600g)',
    description:
      'Locally sourced and carefully smoked catfish and tilapia. Adds rich, authentic smoky flavour to soups and stews. Chunky cuts.',
    details: ['600g pack', 'Chunky cuts', 'Wood-smoked', 'Ready for cooking'],
  },

  // ── New additions ─────────────────────────────────────
  {
    id: 'ehm-018',
    name: 'Smoked Guinea Fowl',
    category: 'smoked-meats',
    emoji: '🍗',
    price: 35000,
    unit: 'whole bird',
    description:
      'Premium smoked guinea fowl, slow-smoked over wood fire for rich, gamey flavour. A delicacy prized across West Africa for its distinctive taste.',
    details: ['Whole guinea fowl', 'Wood-fire smoked', 'Rich gamey flavour', 'Free-range sourced'],
  },
  {
    id: 'ehm-019',
    name: 'Smoked Spiced Rabbit',
    category: 'smoked-meats',
    emoji: '🐇',
    price: 40000,
    unit: 'whole rabbit',
    description:
      'Tender, juicy rabbit slow-smoked to perfection and seasoned with a signature blend of Nigerian spices. Lean, high-protein delicacy.',
    details: ['Whole rabbit', 'Spice-seasoned', 'Slow smoked', 'High in protein, low in fat'],
  },
  {
    id: 'ehm-020',
    name: 'Bitter Leaf Tea',
    category: 'teas',
    emoji: '🍵',
    price: 5000,
    unit: 'pack (50 tea bags)',
    description:
      'Enjoy the full nutritional benefits of pure Bitter Leaf (Vernonia amygdalina). Natural tea bags with strong medicinal properties, backed by modern medical science. Traditionally used to support cholesterol, diabetes, and digestive health. Drink as tea, garnish on soups, salads or stews with leftovers from tea bags.',
    details: ['Natural tea bags', 'Pure Bitter Leaf', 'Medicinal properties', 'Young leaves, fresh and natural'],
  },
  {
    id: 'ehm-022',
    name: 'Ehmar Odorless Cassava Flour (25kg)',
    category: 'beans-grains',
    emoji: '🌾',
    price: 65000,
    unit: '25kg bag',
    description:
      'High quality cassava flour (HQCF). Gluten-free, processed with freshly harvested cassava roots in a nut and soy-free facility. Versatile flour with odorless flavour and powdery texture. Bulk bag perfect for restaurants, caterers, and large families.',
    details: ['25kg bulk bag', 'Gluten-free', 'Odorless & powdery', 'Nut & soy-free facility'],
  },
  {
    id: 'ehm-023',
    name: 'Ehmar Odorless Cassava Flour (16oz)',
    category: 'beans-grains',
    emoji: '🌾',
    price: 3500,
    unit: '16oz pack',
    description:
      'High quality cassava flour (HQCF). Gluten-free, processed with freshly harvested cassava roots in a nut and soy-free facility. Versatile flour with odorless flavour and powdery texture. Convenient retail pack for home cooking.',
    details: ['16oz resealable pack', 'Gluten-free', 'Odorless & powdery', 'Nut & soy-free facility'],
  },
  {
    id: 'ehm-021',
    name: 'Ehmar Food Warmer Mat',
    category: 'kitchen',
    emoji: '🔥',
    price: 38000,
    unit: 'per unit',
    description:
      'Electric food warming mat that keeps your meals hot and ready to serve. Sleek, modern design with digital temperature controls. Perfect for family dinners, parties, and everyday use. Place your plates and bowls directly on the mat and enjoy warm food for hours.',
    details: ['Electric heated surface', 'Digital temperature controls', 'Holds multiple plates', 'Easy to clean', 'Safe for all plate types'],
  },
];

export const FEATURED_IDS = ['ehm-001', 'ehm-003', 'ehm-004', 'ehm-013'];

export const STORE_INFO = {
  name: 'Ehmar Foods',
  tagline: 'Premium Nigerian Food Products',
  slogan: 'Fresh. Smoked. Authentic.',
  phone: '+234 800 123 4567',
  whatsapp: '+234 800 123 4567',
  email: 'info@ehmarfoods.com',
  address: 'Lagos, Nigeria',
  deliveryAreas: ['Lagos', 'Abuja', 'Port Harcourt', 'Ibadan', 'Benin City', 'Enugu', 'Warri', 'Kano'],
  freeDeliveryThreshold: 50000,
  deliveryFee: 3000,
};

export function formatNaira(amount) {
  return '₦' + amount.toLocaleString('en-NG');
}
