'use client';
import React from 'react';
import { AllocationResults } from './allocation-interface';
import { FaExclamationTriangle } from 'react-icons/fa';

interface AllocationResultComponentProps {
  results: AllocationResults;
}

export default function AllocationResultComponent({
  results
}: AllocationResultComponentProps) {
  const {
    monthlyInvestment,
    targetAmount,
    totalMonths,
    warnings
  } = results;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  const formatTimeline = (months: number) => {
    if (months >= 12) {
      const years = Math.floor(months / 12);
      const remainingMonths = months % 12;
      if (remainingMonths === 0) {
        return `${years} ${years === 1 ? 'year' : 'years'}`;
      } else {
        return `${years} ${years === 1 ? 'year' : 'years'} ${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`;
      }
    } else {
      return `${months} ${months === 1 ? 'month' : 'months'}`;
    }
  };

  return (
    <div className="mt-6">
      {/* Warnings */}
      {warnings.length > 0 && (
        <div className="mb-4 space-y-2">
          {warnings.map((warning, index) => (
            <div
              key={index}
              className="flex items-start p-3 rounded-lg bg-yellow-50 border border-yellow-200 text-yellow-800"
            >
              <FaExclamationTriangle className="h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
              <p className="text-sm font-medium">{warning}</p>
            </div>
          ))}
        </div>
      )}

      {/* Result */}
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 text-center">
        <p className="text-lg text-gray-700">
          You should invest <span className="font-bold text-blue-900 text-xl">{formatCurrency(monthlyInvestment)}</span> per month to reach your goal.
        </p>
      </div>
    </div>
  );
}
