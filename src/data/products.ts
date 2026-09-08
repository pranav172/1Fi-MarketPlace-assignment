import { Product, ProductVariant, EMIPlan, Category } from '../types/marketplace';

// Helper to generate consistent product images using SVG data URLs
const generateProductImage = (color: string = '#3B82F6'): string =>
  `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200"><rect width="200" height="200" rx="20" fill="${color}" opacity="0.1"/><rect x="40" y="40" width="120" height="120" rx="16" fill="${color}" opacity="0.2"/><rect x="60" y="60" width="80" height="80" rx="12" fill="${color}"/></svg>`;

// Categories
export const categories: Category[] = [
  { id: 'smartphones', name: 'Smartphones', icon: '📱', productCount: 8 },
  { id: 'laptops', name: 'Laptops', icon: '💻', productCount: 6 },
  { id: 'tablets', name: 'Tablets', icon: '📟', productCount: 4 },
  { id: 'headphones', name: 'Headphones', icon: '🎧', productCount: 5 },
  { id: 'smartwatches', name: 'Smartwatches', icon: '⌚', productCount: 3 },
  { id: 'electronics', name: 'Electronics', icon: '⚡', productCount: 12 },
];

// EMI Plans (tenure options)
export const emiPlans: EMIPlan[] = [
  { id: '3m', tenureMonths: 3, monthlyEmi: 0, interestRate: 0, totalInterest: 0, totalAmount: 0, badge: '0% Interest' },
  { id: '6m', tenureMonths: 6, monthlyEmi: 0, interestRate: 0, totalInterest: 0, totalAmount: 0 },
  { id: '9m', tenureMonths: 9, monthlyEmi: 0, interestRate: 0, totalInterest: 0, totalAmount: 0 },
  { id: '12m', tenureMonths: 12, monthlyEmi: 0, interestRate: 0, totalInterest: 0, totalAmount: 0, isRecommended: true, badge: 'Most Popular' },
  { id: '18m', tenureMonths: 18, monthlyEmi: 0, interestRate: 5.5, totalInterest: 0, totalAmount: 0 },
  { id: '24m', tenureMonths: 24, monthlyEmi: 0, interestRate: 6.5, totalInterest: 0, totalAmount: 0 },
];

// Product Variants
const smartphoneVariants: ProductVariant[] = [
  { id: '128gb-black', name: '128GB Black', description: '128GB storage, Black color', price: 64999, imageUrl: generateProductImage('#1F2937'), specifications: { Storage: '128GB', Color: 'Black', RAM: '8GB' } },
  { id: '256gb-black', name: '256GB Black', description: '256GB storage, Black color', price: 74999, imageUrl: generateProductImage('#1F2937'), specifications: { Storage: '256GB', Color: 'Black', RAM: '8GB' } },
  { id: '512gb-blue', name: '512GB Blue', description: '512GB storage, Blue color', price: 89999, imageUrl: generateProductImage('#3B82F6'), specifications: { Storage: '512GB', Color: 'Blue', RAM: '12GB' } },
];

const laptopVariants: ProductVariant[] = [
  { id: '8gb-256gb', name: '8GB/256GB', description: '8GB RAM, 256GB SSD', price: 89999, imageUrl: generateProductImage('#6B7280'), specifications: { RAM: '8GB', Storage: '256GB SSD', Processor: 'M2' } },
  { id: '16gb-512gb', name: '16GB/512GB', description: '16GB RAM, 512GB SSD', price: 114999, imageUrl: generateProductImage('#6B7280'), specifications: { RAM: '16GB', Storage: '512GB SSD', Processor: 'M2 Pro' } },
];

const headphoneVariants: ProductVariant[] = [
  { id: 'black', name: 'Black', description: 'Classic Black', price: 19999, imageUrl: generateProductImage('#000000'), specifications: { Color: 'Black', Type: 'Over‑ear', Battery: '30h' } },
  { id: 'white', name: 'White', description: 'Clean White', price: 19999, imageUrl: generateProductImage('#FFFFFF'), specifications: { Color: 'White', Type: 'Over‑ear', Battery: '30h' } },
  { id: 'navy', name: 'Navy Blue', description: 'Navy Blue edition', price: 21999, imageUrl: generateProductImage('#1E3A8A'), specifications: { Color: 'Navy Blue', Type: 'Over‑ear', Battery: '30h' } },
];

// Products
export const products: Product[] = [
  {
    id: 'p1',
    name: 'UltraPhone X',
    brand: 'NexTech',
    description: 'Flagship smartphone with 6.7" OLED display, triple camera system, and all‑day battery.',
    price: 74999,
    images: [generateProductImage('#3B82F6'), generateProductImage('#1F2937'), generateProductImage('#EF4444')],
    variants: smartphoneVariants,
    category: categories[0],
    emiPlans: emiPlans.map(plan => ({ ...plan, monthlyEmi: Math.round(74999 / plan.tenureMonths) })),
    specifications: { Display: '6.7" OLED', Camera: 'Triple 48MP', Battery: '5000mAh', OS: 'Android 14' },
    badges: ['Limited Time', 'Trending'],
    rating: 4.7,
    reviewCount: 1248,
  },
  {
    id: 'p2',
    name: 'ProBook Air',
    brand: 'Pear',
    description: 'Ultra‑thin laptop with M2 chip, 13.6" Retina display, and 18‑hour battery life.',
    price: 114999,
    images: [generateProductImage('#6B7280'), generateProductImage('#1F2937')],
    variants: laptopVariants,
    category: categories[1],
    emiPlans: emiPlans.map(plan => ({ ...plan, monthlyEmi: Math.round(114999 / plan.tenureMonths) })),
    specifications: { Display: '13.6" Retina', Chip: 'M2', RAM: '8GB', Storage: '256GB SSD', Battery: '18h' },
    badges: ['Most Wanted'],
    rating: 4.9,
    reviewCount: 892,
  },
  {
    id: 'p3',
    name: 'SoundWave Pro',
    brand: 'Sonic',
    description: 'Premium over‑ear headphones with active noise cancellation and 30‑hour battery.',
    price: 19999,
    images: [generateProductImage('#000000'), generateProductImage('#FFFFFF')],
    variants: headphoneVariants,
    category: categories[3],
    emiPlans: emiPlans.map(plan => ({ ...plan, monthlyEmi: Math.round(19999 / plan.tenureMonths) })),
    specifications: { Type: 'Over‑ear', ANC: 'Yes', Battery: '30h', Connectivity: 'Bluetooth 5.3' },
    rating: 4.5,
    reviewCount: 567,
  },
  {
    id: 'p4',
    name: 'TabPlus 10',
    brand: 'NexTech',
    description: '10.9" tablet with stylus support, perfect for creativity and productivity.',
    price: 45999,
    images: [generateProductImage('#8B5CF6')],
    variants: [{ id: '64gb', name: '64GB', description: '64GB storage', price: 45999, imageUrl: generateProductImage('#8B5CF6'), specifications: { Storage: '64GB', Display: '10.9"' } }],
    category: categories[2],
    emiPlans: emiPlans.map(plan => ({ ...plan, monthlyEmi: Math.round(45999 / plan.tenureMonths) })),
    specifications: { Display: '10.9" LCD', RAM: '6GB', Storage: '64GB', Stylus: 'Included' },
    badges: ['New'],
    rating: 4.3,
    reviewCount: 231,
  },
  {
    id: 'p5',
    name: 'WatchFit 3',
    brand: 'FitTrack',
    description: 'Advanced fitness tracker with blood oxygen monitoring and 7‑day battery.',
    price: 12999,
    images: [generateProductImage('#10B981')],
    variants: [{ id: 'black-silicone', name: 'Black Silicone', description: 'Black silicone band', price: 12999, imageUrl: generateProductImage('#10B981'), specifications: { Band: 'Silicone', Color: 'Black' } }],
    category: categories[4],
    emiPlans: emiPlans.map(plan => ({ ...plan, monthlyEmi: Math.round(12999 / plan.tenureMonths) })),
    specifications: { Display: '1.78" AMOLED', Battery: '7 days', GPS: 'Built‑in', Waterproof: '5 ATM' },
    rating: 4.6,
    reviewCount: 654,
  },
  {
    id: 'p6',
    name: 'Gaming Laptop Pro',
    brand: 'GameForce',
    description: 'High‑performance gaming laptop with RTX 4060 and 165Hz refresh rate.',
    price: 139999,
    images: [generateProductImage('#DC2626')],
    variants: [{ id: '16gb-1tb', name: '16GB/1TB', description: '16GB RAM, 1TB SSD', price: 139999, imageUrl: generateProductImage('#DC2626'), specifications: { GPU: 'RTX 4060', RAM: '16GB', Storage: '1TB SSD' } }],
    category: categories[1],
    emiPlans: emiPlans.map(plan => ({ ...plan, monthlyEmi: Math.round(139999 / plan.tenureMonths) })),
    specifications: { GPU: 'RTX 4060', Display: '15.6" 165Hz', RAM: '16GB DDR5', Storage: '1TB SSD' },
    badges: ['Hot Deal'],
    rating: 4.8,
    reviewCount: 421,
  },
];

// Shop Tabs
export const shopTabs = [
  { id: 'top-brands' as const, name: 'Top Brands', description: 'Explore leading brands' },
  { id: 'nearby-stores' as const, name: 'Nearby Stores', description: 'Find stores near you' },
  { id: 'marketplace' as const, name: '1Fi Marketplace', description: 'Browse products with EMI' },
];