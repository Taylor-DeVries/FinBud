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
            document.getElementById('FHSA_modal')! as HTMLDialogElement
          ).showModal()
        }
        data-tooltip-id="fhsaCalculatorButton"
      >
        {' '}
          <FaCalculator
            className="text-blue"
            size={45}
          ></FaCalculator>
      </button>

            <Tooltip id="fhsaCalculatorButton" place="top" >
                {`FHSA Calculator`}
            </Tooltip>
    </>
  );
};

export default CalculatorButton;
