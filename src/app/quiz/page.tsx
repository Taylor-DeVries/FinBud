"use client";
import testData from "../../data/easier.json";
import { useEffect, useState } from "react";
import {
  findNode,
  Node,
  NodeType,
  updateAnswers,
} from "./../../quiz-logic/quiz-functions";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// import CalculatorComponent from "@/components/Calculator";

import Image from "next/image";
import Button from "@/components/Button";
import Textbox from "@/components/Textbox";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function QuizPage() {
  const [currentNode, setCurrentNode] = useState<Node>(testData);
  const [answers, setAnswers] = useState<string[]>([]);
  const [history, setHistory] = useState<Node[]>([]);
  const [tip, setTip] = useState<number>(0);
  const [showNextTip, setShowNextTip] = useState<boolean>(false);
  const [showPrevTip, setShowPrevTip] = useState<boolean>(false);

  //Runs everytime currentJson changes
  useEffect(() => {
    setAnswers(updateAnswers(currentNode));

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTip(0);

    if (
      currentNode.nodeType === NodeType.Link &&
      currentNode.connect_id !== undefined
    ) {
      const newCurrentNode: Node = findNode(
        testData,
        currentNode.connect_id
      );

      setCurrentNode(newCurrentNode);
    }
  }, [currentNode]);

  // Runs everytime a answer is pressed
  function nextAnswer(answer: string) {
    // Update json to where the answer leads
    if (currentNode.answers?.[answer] === undefined) {
      return;
    }
    setHistory([...history, currentNode]);
    setCurrentNode(currentNode.answers[answer]);
  }

  useEffect(() => {

    //Check if next tip exists
    if (currentNode?.moreInfo?.[tip - 1 + 1] !== undefined) {
      setShowNextTip(true);
    }
    else {
      setShowNextTip(false);
    }
    if (currentNode?.moreInfo?.[tip - 1] !== undefined) {
      setShowPrevTip(true);
    }
    else {
      setShowPrevTip(false);
    }


  }, [tip, currentNode])

  function goBack() {
    if (history.length > 0) {
      const previousNode = history[history.length - 1]; // Get the last node from history
      setHistory(history.slice(0, -1)); // Remove the last node from history
      setCurrentNode(previousNode); // Set the current node to the previous one
    } else {
      window.location.href = "/";
    }
  }

  //Move to the next tooltip
  function nextTip(currentTip: number, increase: boolean) {
    if (increase) {
      setTip(currentTip + 1);
    }
    else {
      setTip(currentTip - 1);
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }


  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col lg:flex-row justify-between lg:justify-center  space-y-16 lg:space-y-0 mt-8 lg:mt-16 min-h-[50vh] w-full">
        {/* Text Area */}
        <div className="lg:w-2/3 text-left text-white rounded-xl ">
          {/* Back button */}
          <div className="mb-2">
            <div className="rounded-xl bg-light_blue p-2 inline-block bg-opacity-10">
              <IoIosArrowRoundBack
                onClick={goBack}
                className="text-blue h-8 w-8 hover:cursor-pointer"
              />
            </div>
          </div>

          {/* If screen is mobile */}
          <div className="w-full rounded-xl bg-blue px-1 py-2 lg:hidden relative">
            {/* Inner scrollable content */}

            <div className="max-h-[150px] sm:max-h-[256px] md:max-h-[512px] lg:max-h-[640px] xl:max-h-[780px] overflow-y-auto ">
              {tip === 0 ? (
                <Textbox secondaryLabel={currentNode?.question} />
              ) : (
                <Textbox secondaryLabel={currentNode?.moreInfo?.[tip - 1]} />
              )}
              {showPrevTip ? (
                <div className="rounded-xl border-4 border-blue bg-white p-2 inline-block hover:scale-105 transition-transform duration-200 ease-in-out translate-y-[35px]">
                  <FaAngleLeft
                    onClick={() => nextTip(tip, false)}
                    className="text-blue h-8 w-8 hover:cursor-pointer"
                  />
                </div>
              ) : null}

              {showNextTip ? (
                <div className="rounded-xl border-4 border-blue bg-white p-2 inline-block hover:scale-105 transition-transform duration-200 ease-in-out translate-y-[35px]">
                  <FaAngleRight
                    onClick={() => nextTip(tip, true)}
                    className="text-blue h-8 w-8 hover:cursor-pointer"
                  />
                </div>
              ) : null}


            </div>
          </div>

          {/* If screen is big */}
          <div className="hidden lg:block relative">
            {tip === 0 ? (
              <Textbox secondaryLabel={currentNode?.question + "\n"} />
            ) : (
              <Textbox secondaryLabel={currentNode?.moreInfo?.[tip - 1] + "\n"} />

            )}

            <div className="mb-2 absolute right-[5px] bottom-0">

              {showPrevTip ? (
                <div className="rounded-xl border-4 border-blue bg-white p-2 inline-block hover:scale-105 transition-transform duration-200 ease-in-out translate-y-[35px]">
                  <FaAngleLeft
                    onClick={() => nextTip(tip, false)}
                    className="text-blue h-6 w-6 hover:cursor-pointer"
                  />
                </div>
              ) : null}

              {showNextTip ? (
                <div className="rounded-xl border-4 border-blue bg-white p-2 inline-block hover:scale-105 transition-transform duration-200 ease-in-out translate-y-[35px]">
                  <FaAngleRight
                    onClick={() => nextTip(tip, true)}
                    className="text-blue h-6 w-6 hover:cursor-pointer"
                  />
                </div>
              ) : null}


            </div>

          </div>

          {/* Buttons for the answers */}
          <div className="mt-4">
            <div className="flex flex-col space-y-2 ">
              {answers.map((answer, index) => (
                <Button
                  key={index}
                  onClick={() => nextAnswer(answer)}
                  label={answer}
                />
              ))}
            </div>
          </div>

          {/* <CalculatorComponent /> */}
        </div>

        {/* Fin Image */}
        <div className="lg:w-1/3 flex lg:justify-start justify-center">
          <Image
            src="/images/Fin.png"
            alt="Logo"
            width={0} // placeholder
            height={0} // placeholder
            className="w-[225px] h-[225px] sm:w-[500px] sm:h-[500px] lg:w-auto lg:auto object-contain "
            unoptimized={true}
          />
        </div>
      </div>
    </div>
  )
};

