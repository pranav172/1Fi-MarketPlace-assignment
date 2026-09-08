export interface ProductVariant {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  specifications: Record<string, string>;
}

export interface EMIPlan {
  id: string;
  tenureMonths: number;
  monthlyEmi: number;
  interestRate: number;
  totalInterest: number;
  totalAmount: number;
  isRecommended?: boolean;
  badge?: string; // e.g., "Most Popular", "0% Interest"
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  productCount: number;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  images: string[];
  variants: ProductVariant[];
  category: Category;
  emiPlans: EMIPlan[];
  specifications: Record<string, string>;
  badges?: string[]; // e.g., ["Limited Time", "Trending"]
  rating?: number;
  reviewCount?: number;
}

export interface ShopTab {
  id: 'top-brands' | 'nearby-stores' | 'marketplace';
  name: string;
  description: string;
}