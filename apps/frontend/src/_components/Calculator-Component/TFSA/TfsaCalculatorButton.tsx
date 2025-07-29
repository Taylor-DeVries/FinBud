'use client';

import React from 'react';
import { Tooltip } from "react-tooltip";
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
        data-tooltip-id="tfsaCalculatorButton"
      >
        {' '}
        <FaCalculator
          className="text-blue"
          size={45}
          title="TFSA Calculator"
        ></FaCalculator>
      </button>

                  <Tooltip id="tfsaCalculatorButton" place="top" >
                      {`TFSA Calculator`}
                  </Tooltip>
    </>
  );
};

export default CalculatorButton;
