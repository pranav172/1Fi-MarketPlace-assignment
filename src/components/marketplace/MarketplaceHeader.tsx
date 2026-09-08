import React from 'react';
import { Sparkles } from 'lucide-react';

interface MarketplaceHeaderProps {
  title?: string;
  description?: string;
}

export const MarketplaceHeader = ({
  title = '1Fi Marketplace',
  description = 'Browse thousands of products with flexible EMI plans. Choose your favorite and pay monthly.',
}: MarketplaceHeaderProps) => {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};