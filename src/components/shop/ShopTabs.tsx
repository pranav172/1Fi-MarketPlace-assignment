import type { ShopTab } from '../../types/marketplace';
import { cn } from '../../utils/cn';

interface ShopTabsProps {
  tabs: ShopTab[];
  activeTab: ShopTab['id'];
  onTabChange: (tabId: ShopTab['id']) => void;
}

export const ShopTabs = ({ tabs, activeTab, onTabChange }: ShopTabsProps) => {
  return (
    <div className="w-full">
      {/* Shop header */}
      <div className="px-4 pt-6 pb-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Shop</h1>
        <p className="text-gray-600">Browse top brands, nearby stores, and 1Fi Marketplace</p>
      </div>

      {/* Tab navigation */}
      <div className="flex gap-2 px-4 overflow-x-auto pb-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              'pill flex-shrink-0 transition-colors focus-ring',
              activeTab === tab.id
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            )}
            aria-selected={activeTab === tab.id}
            role="tab"
          >
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
};