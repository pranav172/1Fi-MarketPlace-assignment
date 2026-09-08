import { Product, Category, EMIPlan } from '../types/marketplace';
import { products, categories, emiPlans } from '../data/products';

const simulateDelay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const simulateError = (errorRate: number = 0.1) => Math.random() < errorRate;

export class MarketplaceApi {
  private static instance: MarketplaceApi;

  private constructor() {}

  static getInstance(): MarketplaceApi {
    if (!MarketplaceApi.instance) {
      MarketplaceApi.instance = new MarketplaceApi();
    }
    return MarketplaceApi.instance;
  }

  async getProducts(options?: {
    categoryId?: string;
    search?: string;
    limit?: number;
  }): Promise<Product[]> {
    await simulateDelay(500 + Math.random() * 500);
    if (simulateError(0.05)) throw new Error('Failed to fetch products. Please try again.');

    let filtered = [...products];

    if (options?.categoryId) {
      filtered = filtered.filter(p => p.category.id === options.categoryId);
    }

    if (options?.search) {
      const query = options.search.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );
    }

    if (options?.limit) {
      filtered = filtered.slice(0, options.limit);
    }

    return filtered;
  }

  async getProductById(id: string): Promise<Product | null> {
    await simulateDelay(300 + Math.random() * 300);
    if (simulateError(0.03)) throw new Error('Failed to fetch product details.');

    const product = products.find(p => p.id === id);
    return product || null;
  }

  async getCategories(): Promise<Category[]> {
    await simulateDelay(200 + Math.random() * 200);
    if (simulateError(0.02)) throw new Error('Failed to fetch categories.');
    return [...categories];
  }

  async getEMIPlansForProduct(productId: string, variantPrice?: number): Promise<EMIPlan[]> {
    await simulateDelay(200 + Math.random() * 200);
    if (simulateError(0.02)) throw new Error('Failed to fetch EMI plans.');

    const product = products.find(p => p.id === productId);
    if (!product) return [];

    const price = variantPrice ?? product.price;
    return emiPlans.map(plan => ({
      ...plan,
      monthlyEmi: Math.round(price / plan.tenureMonths),
      totalAmount: price,
      totalInterest: plan.interestRate > 0
        ? Math.round((price * plan.interestRate * plan.tenureMonths) / (12 * 100))
        : 0,
    }));
  }

  async searchProducts(query: string): Promise<Product[]> {
    return this.getProducts({ search: query });
  }

  async getProductsByCategory(categoryId: string): Promise<Product[]> {
    return this.getProducts({ categoryId });
  }
}

export default MarketplaceApi.getInstance();