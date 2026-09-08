import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Gift, Bell, Shield } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { BottomNav } from '../components/layout/BottomNav';
import { cn } from '../utils/cn';

const CheckoutSuccess = () => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/shop');
  };

  const handleViewEMIDetails = () => {
    // In a real app, this would navigate to EMI management page
    navigate('/emi-dues');
  };

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

      <div className="p-4 max-w-md mx-auto space-y-6">
        {/* Success illustration */}
        <div className="text-center py-8">
          <div className="relative mx-auto w-32 h-32 mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-300 rounded-full opacity-20 animate-pulse" />
            <div className="absolute inset-4 bg-gradient-to-br from-primary-200 to-primary-400 rounded-full opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <CheckCircle className="w-16 h-16 text-primary" />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            EMI Plan Confirmed!
          </h1>
          <p className="text-gray-600 max-w-sm mx-auto">
            Your 1Fi EMI plan has been successfully activated. You'll receive a confirmation email shortly.
          </p>
        </div>

        {/* Next steps */}
        <div className="card p-6 space-y-4">
          <h2 className="font-bold text-lg text-gray-900 mb-2">What's Next</h2>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
              <Bell className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Confirmation Email</h3>
              <p className="text-gray-600 text-sm">
                Check your email for the EMI agreement and payment schedule. Keep it for your records.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
              <Gift className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Product Delivery</h3>
              <p className="text-gray-600 text-sm">
                Your order will be shipped within 24 hours. You'll receive tracking information via SMS.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">EMI Management</h3>
              <p className="text-gray-600 text-sm">
                Manage your EMI payments, view schedule, and make early payments in the EMI Dues section.
              </p>
            </div>
          </div>
        </div>

        {/* Important notes */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <h3 className="font-semibold text-yellow-800 mb-2">Important Notes</h3>
          <ul className="space-y-2 text-sm text-yellow-700">
            <li>• First EMI payment will be deducted on the next billing cycle</li>
            <li>• Ensure sufficient balance in your linked bank account</li>
            <li>• Contact 1Fi Support for any payment-related queries</li>
            <li>• Early repayment option available without penalty</li>
          </ul>
        </div>

        {/* CTA buttons */}
        <div className="space-y-3">
          <Button
            variant="primary"
            size="lg"
            fullWidth
            onClick={handleContinueShopping}
          >
            Continue Shopping
          </Button>
          <Button
            variant="outline"
            size="lg"
            fullWidth
            onClick={handleViewEMIDetails}
          >
            View EMI Details
          </Button>
          <button
            onClick={() => navigate('/')}
            className="w-full text-center text-gray-600 hover:text-gray-900 font-medium py-2"
          >
            Return to Home
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default CheckoutSuccess;