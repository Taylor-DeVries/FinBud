'use client';

import React from 'react';
import { Tooltip } from 'react-tooltip';
import { FaCalculator } from 'react-icons/fa';

interface FHSAButtonProps {
  dashboard?: boolean; // optional boolean prop
}

const CalculatorButton: React.FC<FHSAButtonProps> = ({ dashboard = false }) => {
  return (
    <>
      <div className="w-12 h-12 rounded-xl bg-light_blue_bg dark:bg-[#333] m-1 flex items-center justify-center">
        <button
          className={`sm:flex shadow-none btn border-none`}
          onClick={() =>
            (
              document.getElementById('FHSA_modal')! as HTMLDialogElement
            ).showModal()
          }
          data-tooltip-id="fhsaCalculatorButton"
        >
          {' '}
          <FaCalculator className="text-blue" size={25}></FaCalculator>
        </button>

        <Tooltip id="fhsaCalculatorButton" place="top">
          {`FHSA Calculator`}
        </Tooltip>
      </div>
    </>
  );
};

export default CalculatorButton;
