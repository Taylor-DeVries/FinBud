"use client";
import quizData from "@/_data/constants/quiz-content.json";
import { useEffect, useState } from "react";
import {
  findNodeTest,
  isNextAvailable,
  isPrevAvailable,
  setHistoryFunction,
} from "../../_utils/quiz-functions";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import Image from "next/image";
import Button from "@/_components/Back-Button-Component/Button";
import Textbox from "@/_components/Textbox-Component/Textbox";
import { IoIosArrowRoundBack } from "react-icons/io";
import CalculatorComponent from "../Calculator-Component/CalculatorComponent";
import React from "react";

import { useRouter } from "next/navigation";
import CalculatorButton from "../Calculator-Component/CalculatorButton";
import { HistoryState, Node } from "@/_data/types/types";

export default function QuizPage({ data }) {
  const router = useRouter();

  const rootNode: Node = quizData as Node;
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [showNextText, setShowNextText] = useState<boolean>(false);
  const [showPrevText, setShowPrevText] = useState<boolean>(false);
  const [currentNode, setCurrentNode] = useState<Node>(
    findNodeTest(data.historyArray.at(-1), rootNode, rootNode)
  );
  const [loading, setLoading] = useState(true);
  const [showCalculator, setShowCalculator] = React.useState(false);

  const [historyState, setHistoryState] = React.useState<HistoryState>(data);

  function nextNode(id: number) {
    let tempNode = findNodeTest(id, currentNode, rootNode);
    setCurrentNode(tempNode);
    setHistoryState({
      ...historyState,
      historyArray: [...historyState.historyArray, id],
    });
  }

  function moveTextIndex(forward: number) {
    if (forward == 1 && isNextAvailable(currentNode, currentTextIndex)) {
      setCurrentTextIndex(currentTextIndex + 1);
    } else if (isPrevAvailable(currentNode, currentTextIndex)) {
      setCurrentTextIndex(currentTextIndex - 1);
    }
  }

  function goBack() {
    if (historyState.historyArray.length == 1) {
      router.push("/");
    } else {
      let id = historyState.historyArray.at(-2);
      setHistoryState({
        ...historyState,
        historyArray: historyState.historyArray.slice(0, -1),
      });
      let tempNode = findNodeTest(id, currentNode, rootNode);
      setCurrentNode(tempNode);
    }
  }

  async function setHistoryAsync() {
    let localHistoryState: HistoryState = await historyState;
    setHistoryFunction(localHistoryState.historyArray);
  }

  useEffect(() => {
    setCurrentTextIndex(0);
    setShowNextText(isNextAvailable(currentNode, currentTextIndex));
    setShowPrevText(isPrevAvailable(currentNode, currentTextIndex));

    if (currentNode.id == 6) {
      setShowCalculator(true);
    } else setShowCalculator(false);

    if (historyState.loading) {
      setHistoryAsync();
    }
  }, [currentNode]);

  useEffect(() => {
    setShowNextText(isNextAvailable(currentNode, currentTextIndex));
    setShowPrevText(isPrevAvailable(currentNode, currentTextIndex));
  }, [currentTextIndex]);

  return (
    //PARENT CONTAINER
    <div className={` flex sm:mt-32  ${loading ? "hidden" : ""}`}>
      <div className="  flex sm:mt-16">
        <div className="flex flex-col sm:flex-row sm:items-start items-center space-y-16 sm:space-y-0 mt-8 sm:mt-8 min-h-[50vh] w-full">
          {/* Text Area */}
          <div className="sm:w-2/3 sm:mr-10 text-left text-white rounded-xl">
            {/* Back button */}
            <div className="mb-2">
              <div className="rounded-xl bg-light_blue_bg p-2 inline-block">
                <IoIosArrowRoundBack
                  onClick={goBack}
                  className="text-blue h-8 w-8 hover:cursor-pointer"
                />
              </div>
            </div>

            {/* If screen is mobile */}
            <div className="sm:hidden relative w-full">
              <div className="w-full rounded-xl bg-blue px-1 py-2 sm:hidden relative">
                <div className="max-h-64 overflow-y-auto">
                  <Textbox
                    secondaryLabel={currentNode.text[currentTextIndex]}
                  />
                </div>
              </div>
              <div className="mb-2 flex justify-end mt-1">
                {showPrevText ? (
                  <div className="rounded-xl bg-light_blue_bg p-2 mx-1 inline-block">
                    <FaAngleLeft
                      onClick={() => moveTextIndex(-1)}
                      className="text-blue h-6 w-6 hover:cursor-pointer"
                    />
                  </div>
                ) : null}

                {showNextText && showPrevText ? (
                  <div className="rounded-xl bg-light_blue_bg p-2 mx-1 inline-block">
                    <FaAngleRight
                      onClick={() => moveTextIndex(1)}
                      className="text-blue h-6 w-6 hover:cursor-pointer"
                    />
                  </div>
                ) : null}

                {showNextText && !showPrevText ? (
                  <div className="rounded-xl bg-light_blue_bg p-2 mx-1 inline-block">
                    <h1
                      onClick={() => moveTextIndex(1)}
                      className="text-blue text-3xl text-center h-6 w-6 hover:cursor-pointer leading-none"
                    >
                      ...
                    </h1>
                  </div>
                ) : null}
              </div>
            </div>
            {/* If screen is big */}
            <div className="hidden sm:block relative">
              <Textbox
                secondaryLabel={currentNode.text[currentTextIndex] + "\n"}
              />

              {/* MoreInfo Buttons */}
              <div className="mb-2 flex justify-end mt-1">
                {showPrevText ? (
                  <div className="rounded-xl bg-light_blue_bg p-2 mx-1 inline-block">
                    <FaAngleLeft
                      onClick={() => moveTextIndex(-1)}
                      className="text-blue h-7 w-7 hover:cursor-pointer"
                    />
                  </div>
                ) : null}

                {showNextText && showPrevText ? (
                  <div className="rounded-xl bg-light_blue_bg p-2 mx-1 inline-block">
                    <FaAngleRight
                      onClick={() => moveTextIndex(1)}
                      className="text-blue h-7 w-7 hover:cursor-pointer"
                    />
                  </div>
                ) : null}

                {showNextText && !showPrevText ? (
                  <div className="rounded-xl bg-light_blue_bg p-2 mx-1 inline-block">
                    <h1
                      onClick={() => moveTextIndex(1)}
                      className="text-blue text-3xl text-center h-7 w-7 hover:cursor-pointer leading-none"
                    >
                      ...
                    </h1>
                  </div>
                ) : null}
              </div>
            </div>

            {/* Buttons for the answers */}
            <div className="mt-4">
              <div className="flex flex-col space-y-2 ">
                {currentNode.responses.map((response, index) => (
                  <Button
                    key={`response-${index}`}
                    onClick={() => nextNode(response.connectId ?? response.id)}
                    label={response.answer}
                  />
                ))}
              </div>
            </div>
            <CalculatorComponent />
          </div>

          <div className=" sm:w-1/3 sm:justify-center flex static bottom-6 sm:bottom-0 sm:mt-64">
            {showCalculator && <CalculatorButton />}

            {/* Fin Image */}
            <Image
              src="/images/Fin.webp
              "
              alt="Logo"
              width={300}
              height={300}
              className="w-[350px] h-[350px] sm:w-auto sm:h-auto sm:mt-32"
              unoptimized
              priority
              onLoadingComplete={() => setLoading(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
