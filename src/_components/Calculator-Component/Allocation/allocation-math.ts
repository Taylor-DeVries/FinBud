import { AllocationResults } from './allocation-interface';

/**
 * Calculate total months from years and months
 */
export function calculateTotalMonths(years: number, months: number): number {
  return (years * 12) + months;
}

/**
 * Calculate monthly investment amount
 */
export function calculateMonthlyInvestment(targetAmount: number, totalMonths: number): number {
  if (targetAmount <= 0 || totalMonths <= 0) {
    return 0;
  }

  const monthlyInvestment = targetAmount / totalMonths;
  // Round to two decimal places
  return Math.round(monthlyInvestment * 100) / 100;
}

/**
 * Generate simplified allocation results
 */
export function generateAllocationResults(
  targetAmount: number,
  years: number,
  months: number
): AllocationResults {
  const warnings: string[] = [];
  const totalMonths = calculateTotalMonths(years, months);
  const monthlyInvestment = calculateMonthlyInvestment(targetAmount, totalMonths);

  // Generate warnings
  if (targetAmount <= 0) {
    warnings.push('Please enter a positive target amount.');
  }

  if (totalMonths <= 0) {
    warnings.push('Please enter at least 1 year or 1 month for the duration.');
  }

  return {
    monthlyInvestment,
    targetAmount,
    totalMonths,
    warnings
  };
}
