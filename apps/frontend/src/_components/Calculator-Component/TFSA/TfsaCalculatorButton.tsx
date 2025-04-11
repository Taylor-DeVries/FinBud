'use client';

import React from 'react';
import { FaCalculator } from 'react-icons/fa';

const CalculatorButton = () => {
  return (
    <>
      <button
        className={`sm:flex shadow-none btn border-none`}
        onClick={() =>
          (
            document.getElementById('TFSA_modal')! as HTMLDialogElement
          ).showModal()
        }
      >
        {' '}
        <FaCalculator
          className="text-blue hover:text-gray-500"
          size={50}
        ></FaCalculator>
      </button>
    </>
  );
};

export default CalculatorButton;
