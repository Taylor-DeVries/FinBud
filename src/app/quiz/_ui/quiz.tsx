'use client';
import dashboardGoals from '@/_data/constants/dashboard-goals.json';
import { useEffect } from 'react';
import Image from 'next/image';
import Button from '@/_components/Button-Component/Button';
import ChatBubble from '@/_components/Textbox-Component/ChatBubble';
import { IoIosArrowRoundBack } from 'react-icons/io';
import TfsaCalculatorComponent from '@/_components/Calculator-Component/TFSA/TfsaCalculatorComponent';
import React from 'react';
import { useRouter } from 'next/navigation';
import TfsaCalculatorButton from '@/_components/Calculator-Component/TFSA/TfsaCalculatorButton';
import { HistoryState, Node } from '@/_data/types/types';
import { TypeAnimation } from 'react-type-animation';
import FhsaCalculatorComponent from '@/_components/Calculator-Component/FHSA/FhsaCalculatorComponent';
import FhsaCalculatorButton from '@/_components/Calculator-Component/FHSA/FhsaCalculatorButton';
import AllocationCalculatorComponent from '@/_components/Calculator-Component/Allocation/AllocationCalculatorComponent';
import AllocationCalculatorButton from '@/_components/Calculator-Component/Allocation/AllocationCalculatorButton';
import LinkButton from '@/_components/Link-Component/LinkComponent';
import NavToDashboard from '@/_components/Nav-to-Dashboard-Button-Component/Nav-to-Dashboard-Button';
import MoreInfoButtons from '@/_components/MoreInfo-Component/MoreInfoButtons';
import {
  useQuizContext,
  isNextAvailable,
  isPrevAvailable,
  findNode,
  setHistoryFunction,
} from '../_lib';

export function Quiz({ rootNode }) {
  const router = useRouter();

  const {
    historyState,
    setHistoryState,
    currentNode,
    setCurrentNode,
    currentTextIndex,
    setCurrentTextIndex,
    showNextText,
    setShowNextText,
    showPrevText,
    setShowPrevText,
    showTfsaCalculator,
    setshowTfsaCalculator,
    showFhsaCalculator,
    setshowFhsaCalculator,
    showAllocationCalculator,
    setShowAllocationCalculator,
    showLink,
    setShowLink,
    showDashboard,
    setShowDashboard,
  } = useQuizContext();

  function nextNode(id: number) {
    const nextNode = findNode(id, currentNode, rootNode);
    setCurrentNode(nextNode);
    setHistoryState({
      ...historyState,
      historyArray: [...historyState.historyArray, id],
    });
  }

  function previousNode() {
    if (historyState.historyArray.length <= 1) {
      router.push('/');
    } else {
      const id = historyState.historyArray.at(-2);
      setHistoryState({
        ...historyState,
        historyArray: historyState.historyArray.slice(0, -1),
      });
      const nextNode = findNode(id, currentNode, rootNode);
      setCurrentNode(nextNode);
    }
  }

  function moveTextIndex(forward: number) {
    if (forward == 1 && isNextAvailable(currentNode, currentTextIndex)) {
      setCurrentTextIndex(currentTextIndex + 1);
    } else if (isPrevAvailable(currentNode, currentTextIndex)) {
      setCurrentTextIndex(currentTextIndex - 1);
    }
  }

  function checkNodeVisited(id: number): boolean {
    for (let i = 0; i < historyState.historyArray.length; i++) {
      if (historyState.historyArray[i] == id) {
        return true;
      }
    }
    return false;
  }

  useEffect(() => {
    setCurrentTextIndex(0);
    setShowNextText(isNextAvailable(currentNode, currentTextIndex));
    setShowPrevText(isPrevAvailable(currentNode, currentTextIndex));

    if (currentNode.link) {
      setShowLink(true);
    } else setShowLink(false);

    setShowAllocationCalculator(false);
    setshowTfsaCalculator(false);
    setshowFhsaCalculator(false);

    if (currentNode.additionalButtons) {
      if (currentNode.additionalButtons.includes('TFSA')) {
        setshowTfsaCalculator(true);
      }
      if (currentNode.additionalButtons.includes('FHSA')) {
        setshowFhsaCalculator(true);
      }
      if (currentNode.additionalButtons.includes('ALLOCATION')) {
        setShowAllocationCalculator(true);
      }
    }

    setHistoryFunction(historyState.historyArray);

    setShowDashboard(false);
    for (let i = 0; i < dashboardGoals.goals.length; i++) {
      if (dashboardGoals.goals[i].id == currentNode.id) {
        setShowDashboard(true);
        break;
      }
    }
  }, [currentNode]);

  useEffect(() => {
    setShowNextText(isNextAvailable(currentNode, currentTextIndex));
    setShowPrevText(isPrevAvailable(currentNode, currentTextIndex));
  }, [currentTextIndex]);

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        {/* Parent container for image and text */}
        <div className={`flex flex-col-reverse sm:flex-row items-center`}>
          {/* Image container */}
          <div className="w-2/3 sm:w-1/3 flex justify-center sm:justify-start sm:mt-64 pt-10">
            <Image
              src="/images/Fin.png"
              alt="Logo"
              width={300}
              height={300}
              className="w-auto h-auto"
              priority
              unoptimized
            />
          </div>

          {/* Text Area */}
          <div className="2xl:w-[650px] xl:w-[650px] md:w-[450px] sm:w-[400px] w-[300px] text-left rounded-xl mt-12">
            {/* Above Texbox area */}
            <div className="flex flex-row items-center justify-between">
              {/* Back button */}
              <div className="rounded-xl bg-light_blue_bg dark:bg-[#333] p-2 inline-block">
                <IoIosArrowRoundBack
                  onClick={previousNode}
                  className="text-blue h-8 w-8 hover:cursor-pointer"
                />
              </div>

              {/* Calculator Buttons */}
              <div className="flex flex-row flex-wrap justify-between items-center gap-x-3 p-1 mb-2">
                <div className="flex flex-wrap justify-center items-center gap-0">
                  {showLink && <LinkButton url={`${currentNode.link}`} />}
                </div>

                {showDashboard && (
                  <div className="flex flex-wrap justify-center items-center gap-0">
                    <NavToDashboard />
                  </div>
                )}
                {showTfsaCalculator && (
                  <div className="flex flex-wrap justify-center items-center gap-0">
                    <TfsaCalculatorButton />
                  </div>
                )}

                {showFhsaCalculator && (
                  <div className="flex flex-wrap justify-center items-center gap-0">
                    <FhsaCalculatorButton />
                  </div>
                )}

                {showAllocationCalculator && (
                  <div className="flex flex-wrap justify-center items-center gap-0">
                    <AllocationCalculatorButton />
                  </div>
                )}
              </div>
            </div>

            {/* ChatBubble */}
            <div className="relative w-full">
              <div className="max-h-64 mt-2">
                <ChatBubble
                  align="start"
                  secondaryLabel={
                    <TypeAnimation
                      key={`${currentNode.id}-${currentTextIndex}`}
                      sequence={[currentNode.text[currentTextIndex] + '\n']}
                      wrapper="p"
                      speed={80}
                      cursor={false}
                      repeat={0}
                      preRenderFirstString={false}
                    />
                  }
                />
              </div>

              {/* MoreInfo Buttons */}
              <MoreInfoButtons
                showPrevText={showPrevText}
                showNextText={showNextText}
                moveTextIndex={moveTextIndex}
              />
            </div>

            {/* Buttons for the answers */}
            <div className="mt-2">
              <div className="flex flex-col space-y-2">
                {currentNode.responses
                  .filter((response) => {
                    const id = response.connectId ?? response.id;
                    if (id == 8 || id == 17 || id == 9) {
                      return !checkNodeVisited(id);
                    }
                    return true;
                  })
                  .map((response, index) => (
                    <Button
                      key={`response-${index}`}
                      onClick={() =>
                        nextNode(response.connectId ?? response.id)
                      }
                      label={response.answer}
                    />
                  ))}
              </div>
            </div>

            <TfsaCalculatorComponent />
            <FhsaCalculatorComponent />
            <AllocationCalculatorComponent />
          </div>
        </div>
      </div>
    </>
  );
}
