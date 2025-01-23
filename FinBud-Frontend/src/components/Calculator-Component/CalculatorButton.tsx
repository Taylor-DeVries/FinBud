"use client";

import React from "react";
import { FaCalculator } from "react-icons/fa";

const CalculatorButton = () => {
  return (
    <>
      {/* Desktop Calculator button */}
      <button
        className={`sm:flex hidden shadow-none btn hover:grey-button border-none text-blue bg-light_blue bg-opacity-0 }`}
        onClick={() =>
          (
            document.getElementById("my_modal_1")! as HTMLDialogElement
          ).showModal()
        }
      >
        {" "}
        <FaCalculator className="hover:#86b7ce" size={50}></FaCalculator>
      </button>
      {/* Mobile Calculator button */}
      <button
        className={`sm:hidden absolute mb-5 shadow-none btn hover:grey-button border-none text-blue bg-light_blue bg-opacity-0`}
        onClick={() =>
          (
            document.getElementById("my_modal_1")! as HTMLDialogElement
          ).showModal()
        }
      >
        {" "}
        <FaCalculator className="hover:#86b7ce" size={50}></FaCalculator>
      </button>
    </>
  );
};

export default CalculatorButton;
