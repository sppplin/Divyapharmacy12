/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  handle: string;
  name: string;
  hindi: string;
  vendor: string;
  type: string;
  category: string;
  price: number;
  mrp: number;
  badge?: 'gold' | 'bestseller' | 'ayush' | 'new' | null;
  badgeText?: string;
  desc: string;
  img: string;
  size: string;
  rating: number;
  reviews: number;
  ingredients?: string;
  benefits?: string;
  directions?: string;
}

export interface Category {
  id: string;
  name: string;
  hindi: string;
  count: string;
  icon: string;
  img: string;
}

export interface Bundle {
  name: string;
  hindi: string;
  tag: string;
  products: string[];
  price: number;
  original: number;
  save: number;
  imgs: string[];
}

export interface Review {
  name: string;
  location: string;
  initials: string;
  product: string;
  rating: number;
  text: string;
  date: string;
}

export const PRODUCTS: Product[] = [
  {
    handle: 'divya-madhunashni-vati-extra-power',
    name: 'Divya Madhunashni Vati Extra Power',
    hindi: 'दिव्य मधुनाशिनी वटी एक्स्ट्रा पावर',
    vendor: 'Divya Pharmacy',
    type: 'Tablet',
    category: 'diabetes',
    price: 299,
    mrp: 399,
    badge: 'bestseller',
    badgeText: 'Trust of 8L+ Patients',
    desc: 'Powerful Ayurvedic formulation to maintain healthy blood sugar levels. Made with Karela, Jamun & Vijaysar.',
    img: 'https://www.patanjaliayurved.net/assets/product_images/400x500/1764139919madhu1.webp',
    size: '120 Tabs',
    rating: 4.8,
    reviews: 8421,
    ingredients: 'Karela, Jamun Beej, Gurmar, Methi, Vijayasar',
    benefits: 'Controls blood sugar naturally, supports pancreatic function, improves metabolism',
    directions: '2 tablets twice daily, 30 minutes before meals with warm water.'
  },
  {
    handle: 'divya-swasari-pravahi',
    name: 'Divya Swasari Pravahi',
    hindi: 'दिव्य स्वासारि प्रवाही',
    vendor: 'Divya Pharmacy',
    type: 'Liquid',
    category: 'respiratory',
    price: 189,
    mrp: 250,
    badge: 'ayush',
    badgeText: 'Classic Formula',
    desc: 'Premium herbal tonic for comprehensive respiratory health. Soothes airways and clears congestion.',
    img: 'https://www.bbassets.com/media/uploads/p/l/40016327_4-patanjali-divya-swasari-pravahi.jpg',
    size: '250 ml',
    rating: 4.7,
    reviews: 1250,
    ingredients: 'Vasaka, Tulsi, Mulethi, Sitopaladi Churna, Pippali',
    benefits: 'Relieves cough and bronchitis, clear respiratory tract, supports lung function',
    directions: '10–15 ml twice daily, mixed in warm water.'
  },
  {
    handle: 'divya-swasari-gold-60',
    name: 'Divya Swasari Gold',
    hindi: 'दिव्य स्वासारि गोल्ड',
    vendor: 'Divya Pharmacy',
    type: 'Tablet',
    category: 'respiratory',
    price: 399,
    mrp: 499,
    badge: 'gold',
    badgeText: 'Gold Bhasma',
    desc: 'Superior Ayurvedic tablet enriched with Gold Bhasma for chronic respiratory relief.',
    img: 'https://core.mymedicalshop.com/media/products/E3A5C5Cproduct5C5Cp5C5Ca5C5Cpatanjali_divya_swasari_gold_60_n_-_t_1_52ea1ce7.jpeg',
    size: '60 Tabs',
    rating: 4.9,
    reviews: 2100,
    ingredients: 'Swarna Bhasma, Vasaka, Sitopaladi Churna, Abhrak Bhasma, Pippali',
    benefits: 'Strengthens respiratory immunity, long-lasting relief from asthma, supports lung capacity',
    directions: '1–2 tablets twice daily with honey or warm water after meals.'
  },
  {
    handle: 'divya-medha-vati-extra-power',
    name: 'Divya Medha Vati Extra Power',
    hindi: 'दिव्य मेधा वटी एक्स्ट्रा पावर',
    vendor: 'Divya Pharmacy',
    type: 'Tablet',
    category: 'brain',
    price: 329,
    mrp: 449,
    badge: 'bestseller',
    badgeText: 'Brain Tonic',
    desc: 'Advanced Ayurvedic formulation for mental clarity, memory and stress relief.',
    img: 'https://images.apollo247.in/pub/media/catalog/product/D/I/DIV0264_1-JULY23_1.jpg',
    size: '120 Tabs',
    rating: 4.7,
    reviews: 3450,
    ingredients: 'Brahmi, Shankhpushpi, Ashwagandha, Jatamansi, Mukta Pishti',
    benefits: 'Improves memory and focus, reduces stress and mental fatigue, supports cognitive performance',
    directions: '2 tablets twice daily on an empty stomach with milk or water.'
  },
  {
    handle: 'divya-mukta-vati-extra-power',
    name: 'Divya Mukta Vati Extra Power',
    hindi: 'दिव्य मुक्ता वटी एक्स्ट्रा पावर',
    vendor: 'Divya Pharmacy',
    type: 'Tablet',
    category: 'heart',
    price: 359,
    mrp: 499,
    badge: 'ayush',
    badgeText: 'Pearl Bhasma',
    desc: "India's trusted Ayurvedic remedy for high blood pressure management.",
    img: 'https://www.patanjaliayurved.net/assets/product_images/400x500/17643297541.webp',
    size: '120 Tabs',
    rating: 4.8,
    reviews: 12000,
    ingredients: 'Mukta Pishti, Brahmi, Shankhpushpi, Arjuna Chaal, Sarpagandha',
    benefits: 'Controls high blood pressure naturally, calms the nervous system, supports heart health',
    directions: '2 tablets twice daily, 30 minutes before meals with water.'
  },
  {
    handle: 'divya-ashwagandha-churna',
    name: 'Divya Ashwagandha Churna',
    hindi: 'दिव्य अश्वगंधा चूर्ण',
    vendor: 'Divya Pharmacy',
    type: 'Powder',
    category: 'herbs',
    price: 89,
    mrp: 120,
    badge: 'bestseller',
    badgeText: 'Strength Hero',
    desc: 'Pure Ashwagandha root powder to boost energy and build resilience to stress.',
    img: 'https://www.patanjaliayurved.net/assets/product_images/400x500/1764244936ashw1.webp',
    size: '100 gm',
    rating: 4.9,
    reviews: 15400,
    ingredients: 'Pure Ashwagandha Root Powder',
    benefits: 'Boosts energy and stamina, reduces cortisol levels, strengthens immunity',
    directions: '3–5g with warm milk and honey twice daily.'
  },
  {
    handle: 'triphala-churna',
    name: 'Divya Triphala Churna',
    hindi: 'दिव्य त्रिफला चूर्ण',
    vendor: 'Divya Pharmacy',
    type: 'Powder',
    category: 'herbs',
    price: 69,
    mrp: 99,
    badge: 'ayush',
    badgeText: 'Detox Master',
    desc: 'Classical blend of three sacred fruits for complete digestive health and detox.',
    img: 'https://www.santulan.in/wp-content/uploads/2020/04/Triphala-Churna.png',
    size: '100 gm',
    rating: 4.8,
    reviews: 9800,
    ingredients: 'Amalaki, Bibhitaki, Haritaki',
    benefits: 'Gently relieves constipation, detoxifies the colon, rich in Vitamin C',
    directions: '1 teaspoon with warm water at bedtime.'
  },
  {
    handle: 'divya-peedanil-gold-60',
    name: 'Divya Peedanil Gold',
    hindi: 'दिव्य पीड़ानिल गोल्ड',
    vendor: 'Divya Pharmacy',
    type: 'Tablet',
    category: 'joint',
    price: 349,
    mrp: 449,
    badge: 'gold',
    badgeText: 'Joint Care',
    desc: 'Advanced Premium joint pain formula enriched with Gold Bhasma.',
    img: 'https://www.patanjaliayurved.net/assets/product_images/400x500/1764149736peedanil20n1.webp',
    size: '60 Tabs',
    rating: 4.8,
    reviews: 5400,
    ingredients: 'Swarna Bhasma, Shallaki, Nirgundi, Guggulu, Rasna',
    benefits: 'Relieves arthritis and joint pain, reduces inflammation, improves mobility',
    directions: '1–2 tablets twice daily with warm water after meals.'
  },
  {
    handle: 'aastha-dhoop-batti',
    name: 'Aastha Dhoop Batti',
    hindi: 'आस्था धूप बत्ती',
    vendor: 'Aastha',
    type: 'Dhoop',
    category: 'pooja',
    price: 49,
    mrp: 75,
    badge: 'bestseller',
    badgeText: 'Sacred Fragrance',
    desc: 'Pure natural herbs and resins for a divine prayer atmosphere. Chemical-free.',
    img: 'https://5.imimg.com/data5/SELLER/Default/2021/1/RG/VV/RF/65524077/140-gm-sandal-aastha-wet-dhoop.jpg',
    size: '140 gm',
    rating: 4.9,
    reviews: 2100,
    ingredients: 'Natural herbs, resins, essential oils, aromatic woods',
    benefits: 'Purifies home environment, creates mental calm, traditional Vedic recipe',
    directions: 'Light one stick and place in a holder during puja or meditation.'
  },
  {
    handle: 'aastha-agar-batti',
    name: 'Aastha Agar Batti',
    hindi: 'आस्था अगर बत्ती',
    vendor: 'Aastha',
    type: 'Agarbatti',
    category: 'pooja',
    price: 39,
    mrp: 60,
    badge: 'bestseller',
    badgeText: 'Pure Oud',
    desc: 'Rare Agarwood essence blended with natural herbs for sacred puja rituals.',
    img: 'https://ayurvedalifeclinic.com/wp-content/uploads/2023/09/1688624625AgarbattiSandal150g1.png',
    size: '150 gm',
    rating: 4.8,
    reviews: 1800,
    ingredients: 'Agarwood essence, natural herbs, wood powder',
    benefits: 'Divine fragrance, removes negative energy, invites positive sattvik vibes',
    directions: 'Light for daily puja or festive occasions.'
  },
  {
    handle: 'aastha-pure-cow-ghee',
    name: 'Aastha Pure Cow Ghee',
    hindi: 'आस्था शुद्ध गाय का घी',
    vendor: 'Aastha',
    type: 'Ghee',
    category: 'pooja',
    price: 249,
    mrp: 320,
    badge: 'ayush',
    badgeText: 'Bilona Ghee',
    desc: 'Pure Desi Cow Ghee made using traditional Vedic Bilona method.',
    img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&h=600&fit=crop',
    size: '250ml',
    rating: 4.9,
    reviews: 4500,
    ingredients: '100% Pure Desi Cow Milk Ghee',
    benefits: 'Sattvik property, perfect for havan and puja, rich in vitamins',
    directions: 'Use for lamp offerings (diya), havan or Ayurvedic cooking.'
  },
  {
    handle: 'divya-swasari-gold-20',
    name: 'Divya Swasari Gold (Trial Pack)',
    hindi: 'दिव्य स्वासारि गोल्ड (ट्रायल पैक)',
    vendor: 'Divya Pharmacy',
    type: 'Tablet',
    category: 'respiratory',
    price: 149,
    mrp: 199,
    badge: 'new',
    badgeText: 'Trial Pack',
    desc: 'Travel-friendly pack of Swasari Gold with Swarna Bhasma.',
    img: 'https://core.mymedicalshop.com/media/products/E3A5C5Cproduct5C5Cp5C5Ca5C5Cpatanjali_divya_swasari_gold_60_n_-_t_1_52ea1ce7.jpeg',
    size: '20 Tabs',
    rating: 4.9,
    reviews: 450,
    ingredients: 'Swarna Bhasma, Vasaka, Sitopaladi Churna',
    benefits: 'Quick respiratory relief, travel-friendly',
    directions: '1–2 tablets twice daily with honey or warm water.'
  },
  {
    handle: 'divya-madhugrit-60',
    name: 'Divya Madhugrit',
    hindi: 'दिव्य मधुग्रिट',
    vendor: 'Divya Pharmacy',
    type: 'Tablet',
    category: 'diabetes',
    price: 249,
    mrp: 329,
    badge: 'ayush',
    badgeText: 'Classic',
    desc: 'Holistic diabetic wellness formula for blood sugar balance.',
    img: 'https://www.patanjaliayurved.net/assets/product_images/400x500/1764139919madhu1.webp',
    size: '60 Tabs',
    rating: 4.6,
    reviews: 1540,
    ingredients: 'Gurmar, Neem, Karela, Haridra, Jamun',
    benefits: 'Stabilises blood sugar, improves insulin sensitivity',
    directions: '2 tablets twice daily before meals.'
  },
  {
    handle: 'divya-bpgrit-60',
    name: 'Divya BPGrit',
    hindi: 'दिव्य बीपीग्रिट',
    vendor: 'Divya Pharmacy',
    type: 'Tablet',
    category: 'heart',
    price: 279,
    mrp: 369,
    badge: 'ayush',
    badgeText: 'Heart Care',
    desc: 'Comprehensive Ayurvedic support for healthy blood pressure.',
    img: 'https://www.patanjaliayurved.net/assets/product_images/400x500/17643297541.webp',
    size: '60 Tabs',
    rating: 4.7,
    reviews: 2100,
    ingredients: 'Arjuna Chaal, Pushkarmool, Sarpagandha, Brahmi',
    benefits: 'Maintains healthy BP, reduces stress-induced hypertension',
    directions: '2 tablets twice daily before meals.'
  },
  {
    handle: 'divya-peedanil-gold-100',
    name: 'Divya Peedanil Gold (Value Pack)',
    hindi: 'दिव्य पीड़ानिल गोल्ड (वैल्यू पैक)',
    vendor: 'Divya Pharmacy',
    type: 'Tablet',
    category: 'joint',
    price: 499,
    mrp: 649,
    badge: 'gold',
    badgeText: 'Best Value',
    desc: 'Economy pack for long-term joint pain and arthritis management.',
    img: 'https://www.patanjaliayurved.net/assets/product_images/400x500/1764149736peedanil20n1.webp',
    size: '100 Tabs',
    rating: 4.8,
    reviews: 3200,
    ingredients: 'Swarna Bhasma, Shallaki, Nirgundi, Guggulu',
    benefits: 'Chronic joint pain relief, better value per tablet',
    directions: '1–2 tablets twice daily after meals.'
  },
  {
    handle: 'divya-chandraprabha-vati-40',
    name: 'Divya Chandraprabha Vati (Starter)',
    hindi: 'दिव्य चंद्रप्रभा वटी (स्टार्टर)',
    vendor: 'Divya Pharmacy',
    type: 'Tablet',
    category: 'joint',
    price: 79,
    mrp: 109,
    badge: 'new',
    badgeText: 'Starter Pack',
    desc: 'Starter pack for kidney and urinary health support.',
    img: 'https://www.patanjaliayurved.net/assets/product_images/400x500/1764047283chandra1201.webp',
    size: '40 Tabs',
    rating: 4.5,
    reviews: 650,
    ingredients: 'Shilajit, Guggulu, Haridra',
    benefits: 'Kidney health support, UTI relief',
    directions: '2 tablets twice daily with warm water.'
  },
  {
    handle: 'divya-chandraprabha-vati-80',
    name: 'Divya Chandraprabha Vati (Reg.)',
    hindi: 'दिव्य चंद्रप्रभा वटी (रेगु.)',
    vendor: 'Divya Pharmacy',
    type: 'Tablet',
    category: 'joint',
    price: 139,
    mrp: 189,
    badge: 'ayush',
    badgeText: 'Regular Pack',
    desc: '80-tablet pack for comprehensive urinary wellness treatment.',
    img: 'https://www.patanjaliayurved.net/assets/product_images/400x500/1764047283chandra1201.webp',
    size: '80 Tabs',
    rating: 4.6,
    reviews: 1100,
    ingredients: 'Shilajit, Guggulu, Haridra',
    benefits: 'Kidney stone prevention, urinary system support',
    directions: '2 tablets twice daily with warm water.'
  },
  {
    handle: 'aastha-pure-cow-ghee-500',
    name: 'Aastha Pure Cow Ghee (500ml)',
    hindi: 'आस्था शुद्ध गाय का घी (५००मि.लि.)',
    vendor: 'Aastha',
    type: 'Ghee',
    category: 'pooja',
    price: 499,
    mrp: 640,
    badge: 'ayush',
    badgeText: 'Monthly Pack',
    desc: 'Desi Cow Ghee made using traditional Vedic Bilona method.',
    img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&h=600&fit=crop',
    size: '500ml',
    rating: 4.9,
    reviews: 2800,
    ingredients: 'Pure Desi Cow Milk Ghee',
    benefits: 'Daily puja rituals and Ayurvedic cooking',
    directions: 'Ideal for havan, lamps and consumption.'
  },
  {
    handle: 'aastha-pure-cow-ghee-1l',
    name: 'Aastha Pure Cow Ghee (1L)',
    hindi: 'आस्था शुद्ध गाय का घी (१ली.)',
    vendor: 'Aastha',
    type: 'Ghee',
    category: 'pooja',
    price: 899,
    mrp: 1150,
    badge: 'gold',
    badgeText: 'Economy Pack',
    desc: 'Litre pack of Bilona method Desi Cow Ghee for large ceremonies.',
    img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&h=600&fit=crop',
    size: '1 Litre',
    rating: 4.9,
    reviews: 3500,
    ingredients: 'Pure Desi Cow Milk Ghee',
    benefits: 'Perfect for major havans and family use',
    directions: 'Vedic method ghee for all spiritual needs.'
  },
  {
    handle: 'aastha-havan-samgri-100',
    name: 'Aastha Havan Samgri (100g)',
    hindi: 'आस्था हवन सामग्री (१००ग्रा.)',
    vendor: 'Aastha',
    type: 'Havan Samgri',
    category: 'pooja',
    price: 89,
    mrp: 130,
    badge: 'new',
    badgeText: 'Small Rituals',
    desc: 'Small pack of 40+ herb sacred blend for quick rituals.',
    img: 'https://melionsbrothers.com/cdn/shop/files/71acNDmz5xL._SL1500_-Photoroom_1_2_726115ff-1470-4feb-bcc8-bb41722bbfe8.jpg?v=1765364749&width=3840',
    size: '100gm',
    rating: 4.9,
    reviews: 800,
    ingredients: 'Sandalwood, Guggul, Tulsi and more',
    benefits: 'Atmospheric purification, antimicrobial smoke',
    directions: 'Offer to havan fire during small pujas.'
  },
  {
    handle: 'aastha-havan-samgri-500',
    name: 'Aastha Havan Samgri (500g)',
    hindi: 'आस्था हवन सामग्री (५००ग्रा.)',
    vendor: 'Aastha',
    type: 'Havan Samgri',
    category: 'pooja',
    price: 319,
    mrp: 450,
    badge: 'gold',
    badgeText: 'Festive Pack',
    desc: 'Large festive pack of 40+ herb blend for major yajnas.',
    img: 'https://melionsbrothers.com/cdn/shop/files/71acNDmz5xL._SL1500_-Photoroom_1_2_726115ff-1470-4feb-bcc8-bb41722bbfe8.jpg?v=1765364749&width=3840',
    size: '500gm',
    rating: 4.9,
    reviews: 1400,
    ingredients: 'Sandalwood, Guggul, Tulsi and more',
    benefits: 'Complete spiritual purification, value pack',
    directions: 'Offer during large ceremonies and regular weekly havan.'
  }
];

export const CATEGORIES: Category[] = [
  { 
    id: 'diabetes', 
    name: 'DIABETES CARE', 
    hindi: 'डायबिटीज केयर', 
    count: '12', 
    icon: 'Sparkles',
    img: 'https://krishnaayurved.com/cdn/shop/collections/Category_banner-02.jpg?v=1754031154&width=450'
  },
  { 
    id: 'respiratory', 
    name: 'RESPIRATORY', 
    hindi: 'श्वसन', 
    count: '18', 
    icon: 'Zap',
    img: 'https://static.wixstatic.com/media/7fa905_e3cd3b37178a40f28c6a44d08bfaf77b~mv2.jpg'
  },
  { 
    id: 'brain', 
    name: 'BRAIN & MEMORY', 
    hindi: 'मस्तिष्क स्मृति', 
    count: '14', 
    icon: 'Star',
    img: 'https://static.wixstatic.com/media/7fa905_7cb8ed2806a74428bbd4f10200968bee~mv2.jpg'
  },
  { 
    id: 'heart', 
    name: 'HEART & BP', 
    hindi: 'हृदय व बीपी', 
    count: '09', 
    icon: 'Star',
    img: 'https://krishnaayurved.com/cdn/shop/collections/Category_banner-01.jpg?v=1754030903&width=450'
  },
  { 
    id: 'joint', 
    name: 'JOINT CARE', 
    hindi: 'जोड़ देखभाल', 
    count: '22', 
    icon: 'Star',
    img: 'https://nutraceuticalbusinessreview.com/article-image-alias/bone-and-joint-health-ingredients-for.jpg'
  },
  { 
    id: 'pooja', 
    name: 'POOJA ESSENTIALS', 
    hindi: 'पूजन सामग्री', 
    count: '08', 
    icon: 'Flame',
    img: 'https://freshmills.in/cdn/shop/files/golden-champa-agarbatti-913650.png?v=1717361821&width=1214'
  },
  { 
    id: 'herbs', 
    name: 'ANCIENT HERBS', 
    hindi: 'प्राचीन जड़ी-बूटियाँ', 
    count: '45', 
    icon: 'Leaf',
    img: 'https://images.unsplash.com/photo-1540331547168-8b63109225b7?w=450&q=80'
  },
  { 
    id: 'immunity', 
    name: 'IMMUNITY', 
    hindi: 'रोग प्रतिरोधक', 
    count: '31', 
    icon: 'BadgeCheck',
    img: 'https://krishnaayurved.com/cdn/shop/collections/Category_banner-05.jpg?v=1754030368&width=450'
  }
];

export const BUNDLES: Bundle[] = [
  {
    name: 'Complete Respiratory Kit',
    hindi: 'संपूर्ण श्वास किट',
    tag: 'Most Popular',
    products: ['Divya Swasari Gold', 'Divya Swasari Pravahi'],
    price: 549,
    original: 749,
    save: 26,
    imgs: [
      'https://core.mymedicalshop.com/media/products/E3A5C5Cproduct5C5Cp5C5Ca5C5Cpatanjali_divya_swasari_gold_60_n_-_t_1_52ea1ce7.jpeg',
      'https://www.bbassets.com/media/uploads/p/l/40016327_4-patanjali-divya-swasari-pravahi.jpg'
    ]
  },
  {
    name: 'Mind & Heart Mastery',
    hindi: 'मन और हृदय किट',
    tag: 'Gold Series',
    products: ['Divya Medha Vati Extra Power', 'Divya Mukta Vati Extra Power'],
    price: 649,
    original: 948,
    save: 31,
    imgs: [
      'https://images.apollo247.in/pub/media/catalog/product/D/I/DIV0264_1-JULY23_1.jpg',
      'https://www.patanjaliayurved.net/assets/product_images/400x500/17643297541.webp'
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    name: 'Suresh Kumar',
    location: 'Lucknow, UP',
    initials: 'SK',
    product: 'Divya Swasari Gold',
    rating: 5,
    text: 'My chronic asthma of 12 years has reduced by 80% in just 3 months. No more steroid inhalers. The gold bhasma formula truly works miracles.',
    date: 'March 2025'
  },
  {
    name: 'Priya Sharma',
    location: 'Delhi',
    initials: 'PS',
    product: 'Divya Ashwagandha Churna',
    rating: 5,
    text: 'Energy levels are through the roof. I was dealing with severe anxiety and fatigue post-COVID. Two months of Ashwagandha and I feel like myself again.',
    date: 'Feb 2025'
  },
  {
    name: 'Rajendra Singh',
    location: 'Jaipur, RJ',
    initials: 'RS',
    product: 'Divya Peedanil Gold',
    rating: 5,
    text: "75 years old and my knee pain is gone. I was scheduled for knee replacement surgery. Started Peedanil Gold 4 months ago and I walk 2 km daily now.",
    date: 'Jan 2025'
  }
];
