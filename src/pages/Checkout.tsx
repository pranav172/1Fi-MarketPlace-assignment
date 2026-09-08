import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Shield, Calendar, CreditCard } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { BottomNav } from '../components/layout/BottomNav';
import { Product, ProductVariant, EMIPlan } from '../types/marketplace';
import { formatCurrency, formatEMIDisplay } from '../utils/emi';
import { cn } from '../utils/cn';

interface CheckoutLocationState {
  product: Product;
  variant: ProductVariant;
  plan: EMIPlan;
}

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as CheckoutLocationState;

  if (!state || !state.product || !state.variant || !state.plan) {
    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        <div className="p-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <div className="text-center p-8">
            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-red-500" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Missing Information</h2>
            <p className="text-gray-600 mb-6">
              Please select a product, variant, and EMI plan before proceeding to checkout.
            </p>
            <Button variant="primary" onClick={() => navigate('/shop')}>
              Browse Marketplace
            </Button>
          </div>
        </div>
        <BottomNav />
      </div>
    );
  }

  const { product, variant, plan } = state;
  const today = new Date();
  const nextMonth = new Date(today);
  nextMonth.setMonth(nextMonth.getMonth() + 1);
  const formattedDate = nextMonth.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const handleConfirm = () => {
    // In a real app, this would submit to a backend
    // For this demo, show success state
    navigate('/shop/marketplace/product/checkout/success', { replace: true });
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
        {/* Success header */}
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Your EMI Plan is Ready
          </h1>
          <p className="text-gray-600">
            Review your selection and confirm to proceed with 1Fi EMI
          </p>
        </div>

        {/* Order summary */}
        <div className="card p-6">
          <h2 className="font-bold text-lg text-gray-900 mb-4">Order Summary</h2>

          {/* Product details */}
          <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
            <div className="w-16 h-16 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0">
              <img
                src={variant.imageUrl}
                alt={variant.name}
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-600">{variant.name}</p>
              <div className="mt-2">
                <div className="text-lg font-bold text-gray-900">
                  {formatCurrency(variant.price)}
                </div>
              </div>
            </div>
          </div>

          {/* EMI plan details */}
          <div className="pt-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="text-gray-700">Tenure</span>
              </div>
              <span className="font-semibold text-gray-900">
                {plan.tenureMonths} months
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-primary" />
                <span className="text-gray-700">Monthly EMI</span>
              </div>
              <span className="font-semibold text-gray-900">
                {formatEMIDisplay(plan.monthlyEmi)}
              </span>
            </div>
            {plan.interestRate > 0 && (
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Interest rate</span>
                <span className="font-semibold text-gray-900">
                  {plan.interestRate}%
                </span>
              </div>
            )}
            <div className="flex items-center justify-between text-lg">
              <span className="font-bold text-gray-900">Total amount</span>
              <span className="font-bold text-gray-900">
                {formatCurrency(plan.totalAmount)}
              </span>
            </div>
          </div>
        </div>

        {/* Payment schedule */}
        <div className="card p-6">
          <h3 className="font-bold text-gray-900 mb-3">Payment Schedule</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium text-gray-900">First payment</div>
                <div className="text-sm text-gray-600">Due on {formattedDate}</div>
              </div>
              <div className="font-semibold text-gray-900">
                {formatEMIDisplay(plan.monthlyEmi)}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium text-gray-900">Monthly payments</div>
                <div className="text-sm text-gray-600">
                  {plan.tenureMonths - 1} remaining payments
                </div>
              </div>
              <div className="font-semibold text-gray-900">
                {formatEMIDisplay(plan.monthlyEmi)}
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee */}
        <div className="bg-primary-50 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">
                1Fi EMI Guarantee
              </h4>
              <p className="text-sm text-gray-700">
                Your EMI plan is protected by 1Fi. No hidden charges, flexible repayment options, and dedicated support.
              </p>
            </div>
          </div>
        </div>

        {/* Terms */}
        <div className="text-sm text-gray-600 space-y-2">
          <p>
            By confirming, you agree to 1Fi's Terms of Service and EMI Agreement.
            Your credit will be checked, and approval is subject to eligibility.
          </p>
          <p>
            Monthly payments will be automatically deducted from your linked bank account.
          </p>
        </div>

        {/* CTA */}
        <div className="sticky bottom-24 z-10">
          <Button
            variant="primary"
            size="lg"
            fullWidth
            onClick={handleConfirm}
            leftIcon={<CheckCircle className="w-5 h-5" />}
          >
            Confirm & Proceed with 1Fi EMI
          </Button>
          <button
            onClick={() => navigate(-1)}
            className="w-full text-center mt-3 text-gray-600 hover:text-gray-900 font-medium"
          >
            Back to edit selection
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Checkout;