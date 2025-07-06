'use client';

import React from 'react';
import { FaCalculator } from 'react-icons/fa';

interface TFSAButtonProps {
  dashboard?: boolean; // optional boolean prop
}

const CalculatorButton: React.FC<TFSAButtonProps> = ({ dashboard = false }) => {
  return (
    <>
      <button
        className={`sm:flex shadow-none btn border-none p-0`}
        onClick={() =>
          (
            document.getElementById('TFSA_modal')! as HTMLDialogElement
          ).showModal()
        }
      >
        {' '}
        <FaCalculator
          className={`${
            dashboard ? 'text-white dark:text-[#333]' : 'text-blue'
          } hover:text-gray-500 sm:flex content-top`}
          size={45}
        ></FaCalculator>
      </button>
    </>
  );
};

export default CalculatorButton;
