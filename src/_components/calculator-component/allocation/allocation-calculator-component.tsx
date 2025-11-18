'use client';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { 
  FaBullseye, 
  FaCalendar, 
  FaDollarSign,
} from 'react-icons/fa';
import AllocationInputVars, { AllocationResults } from './allocation-interface';
import { generateAllocationResults } from './allocation-math';
import AllocationResultComponent from './allocation-result-component';

export default function AllocationCalculatorComponent() {
  const input = new AllocationInputVars();
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<AllocationResults | null>(null);
  const [inputFlags, setInputFlags] = useState({
    targetAmount: false,
    years: false,
    months: false
  });

  const handleChange = () => {
    handleTargetAmountChange();
    handleYearsChange();
    handleMonthsChange();
    setShowResults(false);
  };

  const handleTargetAmountChange = () => {
    const element = document.getElementById('targetAmountError')!;
    if (input.targetAmount.textInput.current) {
      const value = Number(input.targetAmount.textInput.current.value);
      if (value > 0) {
        setInputFlags(prev => ({ ...prev, targetAmount: false }));
        element.textContent = '';
      } else {
        setInputFlags(prev => ({ ...prev, targetAmount: true }));
        element.textContent = 'Please enter a positive target amount';
      }
    }
  };

  const handleYearsChange = () => {
    const element = document.getElementById('yearsError')!;
    if (input.years.textInput.current) {
      const years = Number(input.years.textInput.current.value) || 0;
      const months = Number(input.months.textInput.current?.value) || 0;
      
      if (years >= 0 && (years > 0 || months > 0)) {
        setInputFlags(prev => ({ ...prev, years: false }));
        element.textContent = '';
      } else {
        setInputFlags(prev => ({ ...prev, years: true }));
        element.textContent = 'Please enter at least 1 year or 1 month';
      }
    }
  };

  const handleMonthsChange = () => {
    const element = document.getElementById('monthsError')!;
    if (input.months.textInput.current) {
      const years = Number(input.years.textInput.current?.value) || 0;
      const months = Number(input.months.textInput.current.value) || 0;
      
      if (months >= 0 && months < 12 && (years > 0 || months > 0)) {
        setInputFlags(prev => ({ ...prev, months: false }));
        element.textContent = '';
      } else if (months >= 12) {
        setInputFlags(prev => ({ ...prev, months: true }));
        element.textContent = 'Months should be less than 12 (use years for larger values)';
      } else {
        setInputFlags(prev => ({ ...prev, months: true }));
        element.textContent = 'Please enter at least 1 year or 1 month';
      }
    }
  };

  const handleSubmit = () => {
    if (Object.values(inputFlags).some(flag => flag)) {
      const errorMsg = document.getElementById('submitError')!;
      errorMsg.textContent = 'Please fix all errors before submitting';
      setShowResults(false);
      return;
    }

    try {
      const props = input.getAllocationProps();
      const allocationResults = generateAllocationResults(
        props.targetAmount,
        props.years,
        props.months
      );

      setResults(allocationResults);
      setShowResults(true);
      
      const errorMsg = document.getElementById('submitError')!;
      errorMsg.textContent = '';
    } catch (error) {
      const errorMsg = document.getElementById('submitError')!;
      errorMsg.textContent = 'Error calculating allocation. Please check your inputs.';
      setShowResults(false);
    }
  };

  return (
    <div className="text-[#333] font-bold mt-10">
      <dialog id="Allocation_modal" className="modal">
        <div className="modal-box max-w-4xl max-h-[90vh] overflow-y-auto">
          <div className="flex items-center mb-6">
            <FaBullseye className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="font-bold text-2xl text-gray-900">
              Goal-Based Allocation Calculator
            </h3>
          </div>
          <p className="text-gray-600 mb-6">
            Calculate how much to invest monthly to reach your financial goal.
          </p>

          <form className="text-left text-black">
            {/* Target Amount */}
            <div className="mb-4 flex">
              <div className="w-1/3 pr-4">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <FaDollarSign className="inline h-4 w-4 mr-1" />
                  Target Amount ($)
                </label>
              </div>
              <div className="w-2/3">
                <input
                  type="number"
                  placeholder="e.g., 50000"
                  ref={input.targetAmount.textInput}
                  onBlur={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="text-red-600 text-sm mt-1" id="targetAmountError">
                </div>
                <div className="text-gray-600 text-sm mt-1">
                  The total amount you want to save or invest.
                </div>
              </div>
            </div>

            {/* Duration */}
            <div className="mb-4 flex">
              <div className="w-1/3 pr-4">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <FaCalendar className="inline h-4 w-4 mr-1" />
                  How long from now is your goal for?
                </label>
              </div>
              <div className="w-2/3">
                <div className="flex gap-3">
                  <div className="flex-1">
                    <label className="block text-sm text-gray-600 mb-1">Years</label>
                    <input
                      type="number"
                      placeholder="0"
                      min="0"
                      ref={input.years.textInput}
                      onBlur={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="text-red-600 text-sm mt-1" id="yearsError">
                    </div>
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm text-gray-600 mb-1">Months</label>
                    <input
                      type="number"
                      placeholder="0"
                      min="0"
                      max="11"
                      ref={input.months.textInput}
                      onBlur={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="text-red-600 text-sm mt-1" id="monthsError">
                    </div>
                  </div>
                </div>
                <div className="text-gray-600 text-sm mt-2">
                  Enter at least 1 year or 1 month. Both default to 0.
                </div>
              </div>
            </div>

          </form>
          
          <Button
            className="btn"
            style={{ color: 'black' }}
            onClick={handleSubmit}
          >
            Submit
          </Button>

            {/* Submit Error */}
            <div className="text-center mb-4">
              <div className="text-red-600 text-sm" id="submitError">
              </div>
            </div>

          {/* Results */}
          {showResults && results && (
            <div className="mt-6">
              <AllocationResultComponent results={results} />
            </div>
          )}

          {/* Close Button */}
          <div className="modal-action">
            <button
              className="btn bg-gray-600 hover:bg-gray-700 text-white"
              onClick={() =>
                (document.getElementById('Allocation_modal')! as HTMLDialogElement).close()
              }
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
