import { useState, useEffect } from 'react';
import { Product } from '../../types/marketplace';
import marketplaceApi from '../../services/marketplaceApi';

export const useProduct = (id: string | undefined) => {
  const [data, setData] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProduct = async () => {
    if (!id) return;

    setIsLoading(true);
    setError(null);

    try {
      const product = await marketplaceApi.getProductById(id);
      setData(product);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch product');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const retry = () => {
    fetchProduct();
  };

  return {
    data,
    isLoading,
    error,
    retry,
    notFound: !isLoading && !error && !data,
  };
};