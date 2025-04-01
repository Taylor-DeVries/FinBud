'use client';

import React from 'react';
import { FaCalculator } from 'react-icons/fa';

const CalculatorButton = () => {
  return (
    <>
      {/* Desktop Calculator button */}
      <button
        className={`sm:flex hidden shadow-none btn border-none`}
        onClick={() =>
          (
            document.getElementById('TFSA_modal')! as HTMLDialogElement
          ).showModal()
        }
      >
        {' '}
        <FaCalculator
          className="text-blue hover:text-gray-200"
          size={50}
        ></FaCalculator>
      </button>

      {/* Mobile Calculator button */}
      <button
        className={`sm:hidden absolute mb-5 shadow-none btn border-none`}
        onClick={() =>
          (
            document.getElementById('TFSA_modal')! as HTMLDialogElement
          ).showModal()
        }
      >
        {' '}
        <FaCalculator
          className="text-blue hover:text-gray-200"
          size={50}
        ></FaCalculator>
      </button>
    </>
  );
};

export default CalculatorButton;
