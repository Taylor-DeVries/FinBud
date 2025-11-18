'use client';

import React from 'react';
import { FaBullseye } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';

interface AllocationButtonProps {
  dashboard?: boolean; // optional boolean prop
}

const AllocationCalculatorButton: React.FC<AllocationButtonProps> = () => {
  return (
    <>
      <div className="w-12 h-12 rounded-xl bg-light_blue_bg dark:bg-[#333] m-1 flex items-center justify-center">
        <button
          className={`sm:flex shadow-none btn border-none`}
          onClick={() =>
            (
              document.getElementById('Allocation_modal')! as HTMLDialogElement
            ).showModal()
          }
          data-tooltip-id="allocationCalculatorButton"
        >
          {' '}
          <FaBullseye className="text-blue" size={25}></FaBullseye>
        </button>

        <Tooltip id="allocationCalculatorButton" place="top">
          {`Allocation Calculator`}
        </Tooltip>
      </div>
    </>
  );
};

export default AllocationCalculatorButton;
