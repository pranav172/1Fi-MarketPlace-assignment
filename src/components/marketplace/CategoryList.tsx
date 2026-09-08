import React from 'react';
import { Category } from '../../types/marketplace';
import { cn } from '../../utils/cn';

interface CategoryListProps {
  categories: Category[];
  selectedCategoryId?: string;
  onCategorySelect: (categoryId: string | undefined) => void;
  isLoading?: boolean;
}

export const CategoryList = ({
  categories,
  selectedCategoryId,
  onCategorySelect,
  isLoading = false,
}: CategoryListProps) => {
  if (isLoading) {
    return (
      <div className="flex gap-3 overflow-x-auto pb-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-24 h-24 rounded-xl bg-gray-200 animate-pulse"
          />
        ))}
      </div>
    );
  }

  const handleCategoryClick = (categoryId: string) => {
    if (selectedCategoryId === categoryId) {
      onCategorySelect(undefined); // Deselect if already selected
    } else {
      onCategorySelect(categoryId);
    }
  };

  return (
    <div className="flex gap-3 overflow-x-auto pb-4">
      <button
        onClick={() => onCategorySelect(undefined)}
        className={cn(
          'flex-shrink-0 w-24 h-24 rounded-xl border-2 flex flex-col items-center justify-center transition-all focus-ring',
          !selectedCategoryId
            ? 'border-primary bg-primary-50'
            : 'border-gray-200 bg-white hover:border-gray-300'
        )}
        aria-pressed={!selectedCategoryId}
      >
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-2">
          <span className="text-xl">⚡</span>
        </div>
        <span className={cn(
          'text-sm font-medium',
          !selectedCategoryId ? 'text-primary' : 'text-gray-700'
        )}>
          All
        </span>
      </button>

      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryClick(category.id)}
          className={cn(
            'flex-shrink-0 w-24 h-24 rounded-xl border-2 flex flex-col items-center justify-center transition-all focus-ring',
            selectedCategoryId === category.id
              ? 'border-primary bg-primary-50'
              : 'border-gray-200 bg-white hover:border-gray-300'
          )}
          aria-pressed={selectedCategoryId === category.id}
        >
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-2">
            <span className="text-xl">{category.icon}</span>
          </div>
          <span className={cn(
            'text-sm font-medium',
            selectedCategoryId === category.id ? 'text-primary' : 'text-gray-700'
          )}>
            {category.name}
          </span>
          <span className="text-xs text-gray-500 mt-1">
            {category.productCount} items
          </span>
        </button>
      ))}
    </div>
  );
};