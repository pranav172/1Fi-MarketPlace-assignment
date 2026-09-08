/**
 * Calculate EMI (Equated Monthly Installment) using standard formula
 * @param principal - Loan amount (₹)
 * @param annualInterestRate - Annual interest rate in percentage (e.g., 10 for 10%)
 * @param tenureMonths - Loan tenure in months
 * @returns Object containing monthly EMI, total interest, and total amount
 */
export function calculateEMI(
  principal: number,
  annualInterestRate: number,
  tenureMonths: number
): { monthlyEmi: number; totalInterest: number; totalAmount: number } {
  if (tenureMonths <= 0 || principal <= 0) {
    return { monthlyEmi: 0, totalInterest: 0, totalAmount: 0 };
  }

  // Convert annual rate to monthly rate (decimal)
  const monthlyRate = annualInterestRate / 12 / 100;

  // EMI formula: P * r * (1+r)^n / ((1+r)^n - 1)
  const pow = Math.pow(1 + monthlyRate, tenureMonths);
  const monthlyEmi = principal * monthlyRate * pow / (pow - 1);

  const totalAmount = monthlyEmi * tenureMonths;
  const totalInterest = totalAmount - principal;

  return {
    monthlyEmi: Math.round(monthlyEmi),
    totalInterest: Math.round(totalInterest),
    totalAmount: Math.round(totalAmount),
  };
}

/**
 * Format currency in Indian Rupees (₹)
 * @param amount - Amount to format
 * @returns Formatted string (e.g., "₹12,345")
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format EMI display (e.g., "₹2,083/month")
 */
export function formatEMIDisplay(monthlyEmi: number): string {
  return `${formatCurrency(monthlyEmi)}/month`;
}

/**
 * Get interest description for display
 */
export function getInterestDescription(interestRate: number): string {
  if (interestRate === 0) return '0% interest';
  if (interestRate < 5) return 'Low interest';
  return `${interestRate}% interest`;
}

/**
 * Calculate savings for 0% interest plan
 */
export function calculateSavings(principal: number, interestRate: number, tenureMonths: number): number {
  if (interestRate === 0) return 0;

  const { totalInterest } = calculateEMI(principal, interestRate, tenureMonths);
  return Math.round(totalInterest);
}

/**
 * Generate EMI plan options with calculated values
 */
export function generateEMIPlans(
  principal: number,
  plans: Array<{ tenureMonths: number; interestRate: number }>
) {
  return plans.map(plan => {
    const { monthlyEmi, totalInterest, totalAmount } = calculateEMI(
      principal,
      plan.interestRate,
      plan.tenureMonths
    );

    return {
      tenureMonths: plan.tenureMonths,
      interestRate: plan.interestRate,
      monthlyEmi,
      totalInterest,
      totalAmount,
      badge: plan.interestRate === 0 ? '0% Interest' : undefined,
      isRecommended: plan.tenureMonths === 12 && plan.interestRate === 0,
    };
  });
}