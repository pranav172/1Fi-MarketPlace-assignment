import React from 'react';
import { ProductVariant } from '../../types/marketplace';
import { formatCurrency } from '../../utils/emi';
import { cn } from '../../utils/cn';

interface VariantSelectorProps {
  variants: ProductVariant[];
  selectedVariant: ProductVariant;
  onSelect: (variant: ProductVariant) => void;
  title?: string;
}

export const VariantSelector = ({
  variants,
  selectedVariant,
  onSelect,
  title = 'Available Variants',
}: VariantSelectorProps) => {
  if (variants.length <= 1) return null;

  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-3">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {variants.map((variant) => {
          const isSelected = variant.id === selectedVariant.id;
          const priceDiff = variant.price - variants[0].price;

          return (
            <button
              key={variant.id}
              onClick={() => onSelect(variant)}
              className={cn(
                'flex flex-col items-start p-4 rounded-xl border-2 transition-all focus-ring min-w-40',
                isSelected
                  ? 'border-primary bg-primary-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              )}
              aria-pressed={isSelected}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0">
                  <img
                    src={variant.imageUrl}
                    alt={variant.name}
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div className="text-left">
                  <div className="font-medium text-gray-900">{variant.name}</div>
                  <div className="text-sm text-gray-600">{variant.description}</div>
                </div>
              </div>
              <div className="w-full">
                <div className="text-lg font-bold text-gray-900">
                  {formatCurrency(variant.price)}
                </div>
                {priceDiff !== 0 && (
                  <div className={cn(
                    'text-sm',
                    priceDiff > 0 ? 'text-red-600' : 'text-green-600'
                  )}>
                    {priceDiff > 0 ? '+' : ''}{formatCurrency(priceDiff)}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};