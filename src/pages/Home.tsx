import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, TrendingUp, Zap, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { BottomNav } from '../components/layout/BottomNav';
import { cn } from '../utils/cn';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero section */}
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Welcome to 1Fi
          </h1>
          <p className="text-gray-700 mb-6">
            Your personal finance companion. Shop now, pay later with flexible EMI options.
          </p>
          <Button
            variant="primary"
            size="lg"
            fullWidth
            onClick={() => navigate('/shop')}
            rightIcon={<ArrowRight className="w-5 h-5" />}
          >
            Start Shopping
          </Button>
        </div>
      </div>

      {/* Quick stats */}
      <div className="p-4 max-w-md mx-auto">
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 text-center">
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-2">
              <CreditCard className="w-5 h-5 text-green-500" />
            </div>
            <div className="text-sm text-gray-600">Active EMI</div>
            <div className="font-bold text-gray-900">2</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
            </div>
            <div className="text-sm text-gray-600">Available Limit</div>
            <div className="font-bold text-gray-900">₹85,000</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center">
            <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center mx-auto mb-2">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <div className="text-sm text-gray-600">Quick EMI</div>
            <div className="font-bold text-gray-900">Ready</div>
          </div>
        </div>

        {/* Marketplace preview */}
        <div className="card p-6 mb-8">
          <h2 className="font-bold text-lg text-gray-900 mb-4">
            1Fi Marketplace
          </h2>
          <p className="text-gray-600 mb-6">
            Browse thousands of products with flexible EMI plans. Electronics, appliances, fashion, and more.
          </p>
          <Button
            variant="outline"
            fullWidth
            onClick={() => navigate('/shop')}
          >
            Explore Marketplace
          </Button>
        </div>

        {/* Recent activity placeholder */}
        <div className="card p-6">
          <h2 className="font-bold text-lg text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium text-gray-900">UltraPhone X EMI</div>
                <div className="text-sm text-gray-600">Next payment: 10 Sep</div>
              </div>
              <div className="text-lg font-bold text-primary">₹6,249</div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium text-gray-900">SoundWave Pro EMI</div>
                <div className="text-sm text-gray-600">Next payment: 15 Sep</div>
              </div>
              <div className="text-lg font-bold text-primary">₹1,666</div>
            </div>
          </div>
        </div>

        {/* App info */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>1Fi Customer App • v2.4.1</p>
          <p className="mt-1">Need help? Visit our Help Center</p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Home;