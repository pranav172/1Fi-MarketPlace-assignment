import React from 'react';
import { Check, Zap } from 'lucide-react';
import { EMIPlan } from '../../types/marketplace';
import { formatCurrency, formatEMIDisplay } from '../../utils/emi';
import { cn } from '../../utils/cn';

interface EMIPlanCardProps {
  plan: EMIPlan;
  isSelected: boolean;
  onSelect: () => void;
}

export const EMIPlanCard = ({
  plan,
  isSelected,
  onSelect,
}: EMIPlanCardProps) => {
  const hasInterest = plan.interestRate > 0;

  return (
    <button
      onClick={onSelect}
      className={cn(
        'w-full text-left p-5 rounded-xl border-2 transition-all focus-ring',
        isSelected
          ? 'border-primary bg-primary-50'
          : 'border-gray-200 bg-white hover:border-gray-300'
      )}
      aria-pressed={isSelected}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h4 className="text-lg font-bold text-gray-900">
              {plan.tenureMonths} months
            </h4>
            {plan.isRecommended && (
              <span className="px-2 py-1 bg-primary text-white text-xs font-medium rounded-full">
                Recommended
              </span>
            )}
            {plan.badge && (
              <span className={cn(
                'px-2 py-1 text-xs font-medium rounded-full',
                hasInterest ? 'bg-gray-100 text-gray-700' : 'bg-green-50 text-green-700'
              )}>
                {plan.badge}
              </span>
            )}
          </div>
          <p className="text-gray-600">
            Pay monthly for {plan.tenureMonths} months
          </p>
        </div>
        {isSelected && (
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
            <Check className="w-4 h-4 text-white" />
          </div>
        )}
      </div>

      {/* EMI amount */}
      <div className="mb-4">
        <div className="text-2xl font-bold text-gray-900 mb-1">
          {formatEMIDisplay(plan.monthlyEmi)}
        </div>
        <div className="text-sm text-gray-600">
          Total amount: {formatCurrency(plan.totalAmount)}
        </div>
      </div>

      {/* Interest details */}
      <div className={cn(
        'text-sm rounded-lg p-3',
        hasInterest ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'
      )}>
        <div className="flex items-center gap-2">
          {hasInterest ? (
            <>
              <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                <Zap className="w-3 h-3 text-red-600" />
              </div>
              <span className="font-medium">{plan.interestRate}% interest rate</span>
            </>
          ) : (
            <>
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-3 h-3 text-green-600" />
              </div>
              <span className="font-medium">No interest applied</span>
            </>
          )}
        </div>
        {plan.totalInterest > 0 && (
          <div className="mt-2">
            Total interest: {formatCurrency(plan.totalInterest)}
          </div>
        )}
      </div>
    </button>
  );
};