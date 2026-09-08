import React from 'react';
import { Search, ShoppingBag } from 'lucide-react';
import { cn } from '../../utils/cn';

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  action?: React.ReactNode;
  className?: string;
}

export const EmptyState = ({
  icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) => {
  const defaultIcon = <ShoppingBag className="w-12 h-12 text-gray-400" />;

  return (
    <div className={cn('flex flex-col items-center justify-center p-8 text-center', className)}>
      <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center mb-4">
        {icon || defaultIcon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6 max-w-sm">{description}</p>
      {action}
    </div>
  );
};

interface SearchEmptyStateProps {
  query: string;
}

export const SearchEmptyState = ({ query }: SearchEmptyStateProps) => {
  return (
    <EmptyState
      icon={<Search className="w-12 h-12 text-gray-400" />}
      title="No results found"
      description={`We couldn't find any products matching "${query}". Try searching for something else.`}
    />
  );
};

interface CategoryEmptyStateProps {
  categoryName: string;
}

export const CategoryEmptyState = ({ categoryName }: CategoryEmptyStateProps) => {
  return (
    <EmptyState
      title={`No products in ${categoryName}`}
      description={`We don't have any products in the ${categoryName} category right now. Check back soon!`}
    />
  );
};