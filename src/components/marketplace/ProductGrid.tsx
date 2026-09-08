import React from 'react';
import { Product } from '../../types/marketplace';
import { ProductCard } from './ProductCard';
import { Skeleton, SkeletonGroup } from '../ui/Skeleton';
import { ErrorState } from '../ui/ErrorState';
import { EmptyState, SearchEmptyState } from '../ui/EmptyState';

interface ProductGridProps {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  onRetry: () => void;
  searchQuery?: string;
  isEmpty?: boolean;
}

export const ProductGrid = ({
  products,
  isLoading,
  error,
  onRetry,
  searchQuery,
  isEmpty = false,
}: ProductGridProps) => {
  // Loading state
  if (isLoading) {
    return (
      <div className="space-y-4">
        <SkeletonGroup count={6}>
          <div className="card p-4">
            <div className="flex gap-4">
              <Skeleton variant="rectangle" width="96px" height="96px" />
              <div className="flex-1">
                <Skeleton variant="text" width="70%" className="mb-2" />
                <Skeleton variant="text" width="40%" className="mb-4" />
                <Skeleton variant="text" width="50%" className="mb-2" />
                <Skeleton variant="text" width="60%" />
              </div>
            </div>
          </div>
        </SkeletonGroup>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <ErrorState
        title="Unable to load products"
        message={error}
        onRetry={onRetry}
      />
    );
  }

  // Empty state for search
  if (searchQuery && isEmpty) {
    return <SearchEmptyState query={searchQuery} />;
  }

  // General empty state
  if (isEmpty) {
    return (
      <EmptyState
        title="No products available"
        description="There are currently no products in this category. Check back soon!"
      />
    );
  }

  // Product grid
  return (
    <div className="space-y-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};