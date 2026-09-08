import React from 'react';
import { EMIPlan } from '../../types/marketplace';
import { EMIPlanCard } from './EMIPlanCard';
import { Skeleton } from '../ui/Skeleton';

interface EMIPlanSelectorProps {
  plans: EMIPlan[];
  selectedPlan: EMIPlan | null;
  onPlanSelect: (plan: EMIPlan) => void;
  isLoading?: boolean;
  title?: string;
}

export const EMIPlanSelector = ({
  plans,
  selectedPlan,
  onPlanSelect,
  isLoading = false,
  title = 'Choose Your EMI Plan',
}: EMIPlanSelectorProps) => {
  if (isLoading) {
    return (
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} variant="card" className="h-32" />
        ))}
      </div>
    );
  }

  if (plans.length === 0) {
    return (
      <div className="text-center p-8 bg-gray-50 rounded-xl">
        <p className="text-gray-600">No EMI plans available for this product.</p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-4">
        {plans.map((plan) => (
          <EMIPlanCard
            key={plan.id}
            plan={plan}
            isSelected={selectedPlan?.id === plan.id}
            onSelect={() => onPlanSelect(plan)}
          />
        ))}
      </div>
    </div>
  );
};