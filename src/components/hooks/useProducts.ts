import { useState, useEffect } from 'react';
import { Product } from '../../types/marketplace';
import marketplaceApi from '../../services/marketplaceApi';

interface UseProductsOptions {
  categoryId?: string;
  search?: string;
  limit?: number;
  enabled?: boolean;
}

export const useProducts = (options: UseProductsOptions = {}) => {
  const { categoryId, search, limit, enabled = true } = options;
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    if (!enabled) return;

    setIsLoading(true);
    setError(null);

    try {
      const products = await marketplaceApi.getProducts({
        categoryId,
        search,
        limit,
      });
      setData(products);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch products');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [categoryId, search, limit, enabled]);

  const retry = () => {
    fetchProducts();
  };

  return {
    data,
    isLoading,
    error,
    retry,
    isEmpty: !isLoading && !error && data.length === 0,
  };
};