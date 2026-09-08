import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '../../utils/cn';

interface MarketplaceSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const MarketplaceSearch = ({
  value,
  onChange,
  placeholder = 'Search products, brands, categories...',
  className,
}: MarketplaceSearchProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    onChange('');
  };

  return (
    <div className={cn('relative', className)}>
      <div className={cn(
        'flex items-center px-4 py-3 bg-white border rounded-xl transition-all focus-ring',
        isFocused ? 'border-primary shadow-sm' : 'border-gray-300'
      )}>
        <Search className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="w-full outline-none text-gray-900 placeholder:text-gray-500 bg-transparent"
          aria-label="Search products"
        />
        {value && (
          <button
            onClick={handleClear}
            className="ml-2 p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Clear search"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
        )}
      </div>
    </div>
  );
};