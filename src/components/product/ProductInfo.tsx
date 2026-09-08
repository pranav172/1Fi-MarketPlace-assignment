import React from 'react';
import { Star, Tag, Shield } from 'lucide-react';
import { Product, ProductVariant } from '../../types/marketplace';
import { formatCurrency } from '../../utils/emi';
import { cn } from '../../utils/cn';

interface ProductInfoProps {
  product: Product;
  selectedVariant: ProductVariant;
  onVariantChange: (variant: ProductVariant) => void;
}

export const ProductInfo = ({
  product,
  selectedVariant,
  onVariantChange,
}: ProductInfoProps) => {
  const hasVariants = product.variants.length > 1;

  return (
    <div className="space-y-6">
      {/* Product name and brand */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
          {product.badges && product.badges.length > 0 && (
            <div className="flex gap-2">
              {product.badges.map((badge) => (
                <span
                  key={badge}
                  className="px-2 py-1 bg-primary-50 text-primary text-xs font-medium rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}
        </div>
        <p className="text-lg text-gray-600">{product.brand}</p>
      </div>

      {/* Rating */}
      {product.rating && (
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="font-semibold text-gray-900">{product.rating}</span>
          </div>
          <span className="text-gray-500">•</span>
          <span className="text-gray-600">
            {product.reviewCount?.toLocaleString()} reviews
          </span>
        </div>
      )}

      {/* Price */}
      <div>
        <div className="text-3xl font-bold text-gray-900 mb-2">
          {formatCurrency(selectedVariant.price)}
        </div>
        {hasVariants && (
          <p className="text-sm text-gray-600">
            Price for {selectedVariant.name}
          </p>
        )}
      </div>

      {/* Description */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
        <p className="text-gray-700 leading-relaxed">{product.description}</p>
      </div>

      {/* Specifications */}
      {Object.keys(product.specifications).length > 0 && (
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Specifications</h3>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div
                key={key}
                className="bg-gray-50 rounded-lg p-3"
              >
                <div className="text-xs text-gray-500 mb-1">{key}</div>
                <div className="font-medium text-gray-900">{value}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 1Fi Guarantee */}
      <div className="bg-primary-50 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">
              1Fi Purchase Guarantee
            </h4>
            <p className="text-sm text-gray-700">
              Your purchase is protected with 1Fi. Enjoy flexible returns, secure payments, and dedicated customer support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};