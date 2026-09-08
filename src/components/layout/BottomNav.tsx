import React from 'react';
import { Home, ShoppingBag, CreditCard, TrendingUp, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../utils/cn';

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/shop', label: 'Shop', icon: ShoppingBag },
  { path: '/emi-dues', label: 'EMI Dues', icon: CreditCard },
  { path: '/limit', label: 'Limit', icon: TrendingUp },
  { path: '/profile', label: 'Profile', icon: User },
];

export const BottomNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="max-w-md mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPath === item.path ||
              (item.path === '/shop' && currentPath.startsWith('/shop'));

            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'flex flex-col items-center justify-center w-16 transition-colors',
                  isActive ? 'text-primary' : 'text-gray-500 hover:text-gray-700'
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                <div className={cn(
                  'w-10 h-10 rounded-full flex items-center justify-center mb-1',
                  isActive ? 'bg-primary-50' : ''
                )}>
                  <Icon className={cn('w-5 h-5', isActive ? 'stroke-[2.5]' : '')} />
                </div>
                <span className={cn(
                  'text-xs font-medium',
                  isActive ? 'text-primary' : 'text-gray-500'
                )}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};