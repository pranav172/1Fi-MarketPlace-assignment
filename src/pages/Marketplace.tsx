import React, { useState, useEffect } from 'react';
import { MarketplaceHeader } from '../components/marketplace/MarketplaceHeader';
import { MarketplaceSearch } from '../components/marketplace/MarketplaceSearch';
import { CategoryList } from '../components/marketplace/CategoryList';
import { ProductGrid } from '../components/marketplace/ProductGrid';
import { useProducts } from '../components/hooks/useProducts';
import { useCategories } from '../components/hooks/useCategories';
import { Category } from '../types/marketplace';

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | undefined>(undefined);
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // Fetch categories
  const { data: categories, isLoading: categoriesLoading } = useCategories();

  // Fetch products with search and category filters
  const {
    data: products,
    isLoading: productsLoading,
    error: productsError,
    retry: retryProducts,
    isEmpty,
  } = useProducts({
    categoryId: selectedCategoryId,
    search: debouncedSearch,
  });

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleCategorySelect = (categoryId: string | undefined) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <div className="animate-fade-in">
      <MarketplaceHeader />

      {/* Search */}
      <MarketplaceSearch
        value={searchQuery}
        onChange={setSearchQuery}
        className="mb-6"
      />

      {/* Categories */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
        <CategoryList
          categories={categories as Category[]}
          selectedCategoryId={selectedCategoryId}
          onCategorySelect={handleCategorySelect}
          isLoading={categoriesLoading}
        />
      </div>

      {/* Products */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {selectedCategoryId
              ? categories?.find(c => c.id === selectedCategoryId)?.name || 'Products'
              : 'All Products'}
          </h3>
          <span className="text-sm text-gray-500">
            {products.length} {products.length === 1 ? 'item' : 'items'}
          </span>
        </div>

        <ProductGrid
          products={products}
          isLoading={productsLoading}
          error={productsError}
          onRetry={retryProducts}
          searchQuery={debouncedSearch}
          isEmpty={isEmpty}
        />
      </div>
    </div>
  );
};

export default Marketplace;