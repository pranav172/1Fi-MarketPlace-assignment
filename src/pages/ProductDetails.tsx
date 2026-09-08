import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { useProduct } from '../components/hooks/useProduct';
import { useEMIPlans } from '../components/hooks/useEMIPlans';
import { ProductGallery } from '../components/product/ProductGallery';
import { ProductInfo } from '../components/product/ProductInfo';
import { VariantSelector } from '../components/product/VariantSelector';
import { EMIPlanSelector } from '../components/emi/EMIPlanSelector';
import { Button } from '../components/ui/Button';
import { ErrorState } from '../components/ui/ErrorState';
import { Skeleton } from '../components/ui/Skeleton';
import { BottomNav } from '../components/layout/BottomNav';
import { EMIPlan, ProductVariant } from '../types/marketplace';
import { formatCurrency, formatEMIDisplay } from '../utils/emi';
import { cn } from '../utils/cn';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: product, isLoading: productLoading, error: productError, retry: retryProduct } = useProduct(id);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<EMIPlan | null>(null);

  // Fetch EMI plans for selected variant or product
  const {
    data: emiPlans,
    isLoading: emiPlansLoading,
    error: emiPlansError,
  } = useEMIPlans(
    id,
    selectedVariant?.price || product?.price
  );

  // Set initial variant when product loads
  useEffect(() => {
    if (product && product.variants.length > 0) {
      setSelectedVariant(product.variants[0]);
    }
  }, [product]);

  // Set recommended plan when EMI plans load
  useEffect(() => {
    if (emiPlans && emiPlans.length > 0) {
      const recommended = emiPlans.find(plan => plan.isRecommended);
      if (recommended) {
        setSelectedPlan(recommended);
      }
    }
  }, [emiPlans]);

  const handleProceed = () => {
    if (!product || !selectedVariant || !selectedPlan) return;
    navigate(`/shop/marketplace/product/${id}/checkout`, {
      state: { product, variant: selectedVariant, plan: selectedPlan },
    });
  };

  const canProceed = product && selectedVariant && selectedPlan;

  // Loading state
  if (productLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        <div className="bg-white p-4">
          <Skeleton variant="text" width="100px" className="mb-4" />
        </div>
        <div className="p-4 max-w-md mx-auto space-y-6">
          <Skeleton variant="card" className="h-64" />
          <Skeleton variant="text" width="70%" className="h-8" />
          <Skeleton variant="text" width="50%" />
          <Skeleton variant="text" width="90%" />
          <Skeleton variant="text" width="80%" />
          <Skeleton variant="card" className="h-32" />
          <Skeleton variant="card" className="h-32" />
        </div>
        <BottomNav />
      </div>
    );
  }

  // Error state
  if (productError) {
    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        <div className="p-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Marketplace
          </button>
          <ErrorState
            title="Product not found"
            message={productError}
            onRetry={retryProduct}
          />
        </div>
        <BottomNav />
      </div>
    );
  }

  if (!product || !selectedVariant) {
    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        <div className="p-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Marketplace
          </button>
          <ErrorState title="Product not found" message="The product you're looking for doesn't exist." />
        </div>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header with back button */}
      <div className="bg-white p-4 border-b border-gray-200">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 focus-ring"
          aria-label="Back to Marketplace"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Marketplace
        </button>
      </div>

      <div className="p-4 max-w-md mx-auto space-y-6">
        {/* Product gallery */}
        <ProductGallery
          images={product.images}
          productName={product.name}
        />

        {/* Product info */}
        <ProductInfo
          product={product}
          selectedVariant={selectedVariant}
          onVariantChange={setSelectedVariant}
        />

        {/* Variant selector */}
        <VariantSelector
          variants={product.variants}
          selectedVariant={selectedVariant}
          onSelect={setSelectedVariant}
        />

        {/* EMI plan selector */}
        <div>
          <EMIPlanSelector
            plans={emiPlans || []}
            selectedPlan={selectedPlan}
            onPlanSelect={setSelectedPlan}
            isLoading={emiPlansLoading}
          />
          {emiPlansError && (
            <div className="mt-4 p-4 bg-red-50 rounded-xl flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-red-700 font-medium">Unable to load EMI plans</p>
                <p className="text-red-600 text-sm mt-1">Please try again or contact support.</p>
              </div>
            </div>
          )}
        </div>

        {/* Summary and CTA */}
        <div className={cn(
          'card p-4 sticky bottom-24 z-10',
          canProceed ? 'bg-white' : 'bg-gray-50'
        )}>
          <div className="space-y-4">
            {selectedPlan && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Monthly EMI</span>
                  <span className="font-semibold text-gray-900">
                    {formatEMIDisplay(selectedPlan.monthlyEmi)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tenure</span>
                  <span className="font-semibold text-gray-900">
                    {selectedPlan.tenureMonths} months
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total amount</span>
                  <span className="font-semibold text-gray-900">
                    {formatCurrency(selectedPlan.totalAmount)}
                  </span>
                </div>
                <div className="h-px bg-gray-200 my-2" />
              </div>
            )}

            <Button
              variant="primary"
              size="lg"
              fullWidth
              disabled={!canProceed}
              onClick={handleProceed}
            >
              {canProceed ? 'Proceed with 1Fi EMI' : 'Select an EMI plan'}
            </Button>

            {!canProceed && (
              <p className="text-center text-sm text-gray-600 mt-2">
                Please select a variant and EMI plan to continue
              </p>
            )}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default ProductDetails;