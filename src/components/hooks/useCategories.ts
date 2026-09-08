import { useState, useEffect } from 'react';
import { Category } from '../../types/marketplace';
import marketplaceApi from '../../services/marketplaceApi';

export const useCategories = () => {
  const [data, setData] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const categories = await marketplaceApi.getCategories();
      setData(categories);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch categories');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const retry = () => {
    fetchCategories();
  };

  return {
    data,
    isLoading,
    error,
    retry,
  };
};