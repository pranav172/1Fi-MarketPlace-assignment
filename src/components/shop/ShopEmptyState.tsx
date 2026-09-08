import React from 'react';
import { Store, Star } from 'lucide-react';
import { EmptyState } from '../ui/EmptyState';
import { cn } from '../../utils/cn';

interface ShopEmptyStateProps {
  type: 'top-brands' | 'nearby-stores';
}

export const ShopEmptyState = ({ type }: ShopEmptyStateProps) => {
  if (type === 'top-brands') {
    return (
      <div className={cn('p-8 text-center')}>
        <div className="w-20 h-20 rounded-full bg-yellow-50 flex items-center justify-center mx-auto mb-4">
          <Star className="w-10 h-10 text-yellow-500" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Top Brands Coming Soon</h3>
        <p className="text-gray-600 mb-2">
          We're curating the best brands for you. Check back soon to explore leading brands with exclusive offers.
        </p>
        <div className="mt-6 p-4 bg-gray-50 rounded-xl">
          <p className="text-sm text-gray-500">
            Top brands will include electronics, fashion, home appliances, and more with special EMI plans.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('p-8 text-center')}>
      <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
        <Store className="w-10 h-10 text-blue-500" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Enable Location</h3>
      <p className="text-gray-600 mb-4">
        Allow location access to discover stores near you. Browse physical stores offering in‑person pickup and services.
      </p>
      <button className="btn-secondary text-sm px-4 py-2">
        Enable Location Services
      </button>
      <div className="mt-6 p-4 bg-gray-50 rounded-xl text-sm text-gray-500">
        <p>Nearby stores feature coming soon. You'll be able to:</p>
        <ul className="mt-2 space-y-1 text-left">
          <li>• Find stores within 10km radius</li>
          <li>• Check store hours and availability</li>
          <li>• Book in‑store appointments</li>
        </ul>
      </div>
    </div>
  );
};