import { useState, useEffect } from 'react';
import { EMIPlan } from '../../types/marketplace';
import marketplaceApi from '../../services/marketplaceApi';

export const useEMIPlans = (productId: string | undefined, price?: number) => {
  const [data, setData] = useState<EMIPlan[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchEMIPlans = async () => {
    if (!productId) return;

    setIsLoading(true);
    setError(null);

    try {
      const plans = await marketplaceApi.getEMIPlansForProduct(productId, price);
      setData(plans);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch EMI plans');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEMIPlans();
  }, [productId, price]);

  const retry = () => {
    fetchEMIPlans();
  };

  return {
    data,
    isLoading,
    error,
    retry,
  };
};