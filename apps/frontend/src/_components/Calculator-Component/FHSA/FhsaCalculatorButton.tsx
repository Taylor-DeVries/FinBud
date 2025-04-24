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
            document.getElementById('FHSA_modal')! as HTMLDialogElement
          ).showModal()
        }
      >
        {' '}
        <FaCalculator
          className="text-blue hover:text-gray-500"
          size={45}
        ></FaCalculator>
      </button>
    </>
  );
};

export default CalculatorButton;
