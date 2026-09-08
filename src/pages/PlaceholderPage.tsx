import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Construction, CreditCard, TrendingUp, User } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { BottomNav } from '../components/layout/BottomNav';
import { cn } from '../utils/cn';

const PlaceholderPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  let title = '';
  let icon = Construction;
  let description = '';
  let actionLabel = '';
  let actionPath = '/';

  switch (path) {
    case '/emi-dues':
      title = 'EMI Dues';
      icon = CreditCard;
      description = 'Manage your active EMI plans, view payment schedules, and make payments.';
      actionLabel = 'Back to Home';
      actionPath = '/';
      break;
    case '/limit':
      title = 'Credit Limit';
      icon = TrendingUp;
      description = 'Check your available credit limit, spending history, and increase requests.';
      actionLabel = 'Back to Home';
      actionPath = '/';
      break;
    case '/profile':
      title = 'Profile';
      icon = User;
      description = 'View and manage your account details, preferences, and security settings.';
      actionLabel = 'Back to Home';
      actionPath = '/';
      break;
    default:
      title = 'Coming Soon';
      description = 'This feature is under development. Check back soon!';
      actionLabel = 'Go Back';
      actionPath = '/';
  }

  const Icon = icon;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white p-4 border-b border-gray-200">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 focus-ring"
          aria-label="Back"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
      </div>

      <div className="p-4 max-w-md mx-auto">
        {/* Illustration */}
        <div className="text-center py-12">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mx-auto mb-6">
            <Icon className="w-16 h-16 text-gray-400" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-3">{title}</h1>
          <p className="text-gray-600 max-w-sm mx-auto mb-8">
            {description}
          </p>

          {/* Features coming soon */}
          <div className="bg-white rounded-xl p-6 mb-8 text-left">
            <h2 className="font-bold text-gray-900 mb-4">Features Coming Soon</h2>
            <ul className="space-y-3">
              {path === '/emi-dues' && (
                <>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">View active EMI schedules</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Make early payments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-400 text-sm">•</span>
                    </div>
                    <span className="text-gray-500">Auto-debit management</span>
                  </li>
                </>
              )}
              {path === '/limit' && (
                <>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Check available limit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Spending analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-400 text-sm">•</span>
                    </div>
                    <span className="text-gray-500">Limit increase requests</span>
                  </li>
                </>
              )}
              {path === '/profile' && (
                <>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Account details</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Security settings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-400 text-sm">•</span>
                    </div>
                    <span className="text-gray-500">Document upload</span>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-3">
            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={() => navigate(actionPath)}
            >
              {actionLabel}
            </Button>
            <Button
              variant="outline"
              size="lg"
              fullWidth
              onClick={() => navigate('/shop')}
            >
              Browse Marketplace
            </Button>
          </div>
        </div>

        {/* Development notice */}
        <div className="mt-8 p-4 bg-gray-50 rounded-xl text-center text-sm text-gray-600">
          <p>
            <Construction className="w-4 h-4 inline mr-1" />
            This section is under active development.
          </p>
          <p className="mt-1">
            Expected launch: Q4 2026
          </p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default PlaceholderPage;