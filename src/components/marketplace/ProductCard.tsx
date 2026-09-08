import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';
import { Product } from '../../types/marketplace';
import { cn } from '../../utils/cn';
import { formatCurrency, formatEMIDisplay } from '../../utils/emi';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard = ({ product, className }: ProductCardProps) => {
  // Find the cheapest EMI plan for display
  const cheapestEMI = product.emiPlans.reduce((cheapest, plan) =>
    plan.monthlyEmi < cheapest.monthlyEmi ? plan : cheapest
  );

  return (
    <Link
      to={`/shop/marketplace/product/${product.id}`}
      className={cn(
        'card p-4 block transition-all hover:shadow-elevated active:scale-[0.995] focus-ring',
        className
      )}
      aria-label={`View ${product.name} details`}
    >
      <div className="flex gap-4">
        {/* Product image */}
        <div className="flex-shrink-0">
          <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-contain p-2"
            />
          </div>
        </div>

        {/* Product details */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 truncate">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.brand}</p>
            </div>
            {product.badges && product.badges.length > 0 && (
              <span className="ml-2 px-2 py-1 bg-primary-50 text-primary text-xs font-medium rounded-full">
                {product.badges[0]}
              </span>
            )}
          </div>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-1 mt-1">
              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-medium text-gray-900">{product.rating}</span>
              <span className="text-xs text-gray-500">
                ({product.reviewCount} reviews)
              </span>
            </div>
          )}

          {/* Price and EMI */}
          <div className="mt-3">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-gray-900">
                {formatCurrency(product.price)}
              </span>
            </div>
            <div className="mt-2">
              <div className="flex items-center gap-1 text-sm">
                <ShoppingBag className="w-3 h-3 text-primary" />
                <span className="text-primary font-medium">
                  EMI from {formatEMIDisplay(cheapestEMI.monthlyEmi)}
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {cheapestEMI.tenureMonths} months • {cheapestEMI.interestRate === 0 ? '0% interest' : `${cheapestEMI.interestRate}% interest`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};