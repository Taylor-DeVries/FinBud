'use client';

import React from 'react';
import { FaCalculator } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';

interface TFSAButtonProps {
  dashboard?: boolean; // optional boolean prop
}

const CalculatorButton: React.FC<TFSAButtonProps> = ({ dashboard = false }) => {
  return (
    <>
      <div className="w-12 h-12 rounded-xl bg-light_blue_bg dark:bg-[#333] m-1 flex items-center justify-center">
        <button
          className={`sm:flex shadow-none btn border-none`}
          onClick={() =>
            (
              document.getElementById('TFSA_modal')! as HTMLDialogElement
            ).showModal()
          }
          data-tooltip-id="tfsaCalculatorButton"
        >
          {' '}
          <FaCalculator className="text-blue" size={25}></FaCalculator>
        </button>

        <Tooltip id="tfsaCalculatorButton" place="top">
          {`TFSA Calculator`}
        </Tooltip>
      </div>
    </>
  );
};

export default CalculatorButton;
