import React, { useState } from 'react';
import { ShopTabs } from '../components/shop/ShopTabs';
import { ShopEmptyState } from '../components/shop/ShopEmptyState';
import Marketplace from './Marketplace';
import { BottomNav } from '../components/layout/BottomNav';
import { shopTabs } from '../data/products';

const Shop = () => {
  const [activeTab, setActiveTab] = useState<'top-brands' | 'nearby-stores' | 'marketplace'>('marketplace');

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Shop header and tabs */}
      <div className="bg-white">
        <ShopTabs
          tabs={shopTabs}
          activeTab={activeTab}
          onTabChange={(tabId) => setActiveTab(tabId as typeof activeTab)}
        />
      </div>

      {/* Tab content */}
      <div className="px-4 py-6 max-w-md mx-auto">
        {activeTab === 'top-brands' && (
          <ShopEmptyState type="top-brands" />
        )}

        {activeTab === 'nearby-stores' && (
          <ShopEmptyState type="nearby-stores" />
        )}

        {activeTab === 'marketplace' && (
          <Marketplace />
        )}
      </div>

      {/* Bottom navigation */}
      <BottomNav />
    </div>
  );
};

export default Shop;