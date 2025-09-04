'use client';
import { buildQuizData } from '@/_services/buildQuizData';
import dashboard_goals from '@/_data/constants/dashboard-goals.json';
import { useEffect, useState } from 'react';
import {
  findNodeTest,
  isNextAvailable,
  isPrevAvailable,
  setHistoryFunction,
} from '../../_utils/quiz-functions';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import Image from 'next/image';
import Button from '@/_components/Button-Component/Button';
import Textbox from '@/_components/Textbox-Component/Textbox';
import { IoIosArrowRoundBack } from 'react-icons/io';
import TfsaCalculatorComponent from '../Calculator-Component/TFSA/TfsaCalculatorComponent';
import React from 'react';
// import FhsaCalculatorButton from '../Calculator-Component/FhsaCalculatorComponent';
import { useRouter } from 'next/navigation';
import TfsaCalculatorButton from '../Calculator-Component/TFSA/TfsaCalculatorButton';
import { HistoryState, Node } from '@/_data/types/types';
import { TypeAnimation } from 'react-type-animation';
import Loader from '../Loader-Component/Loader';
import FhsaCalculatorComponent from '../Calculator-Component/FHSA/FhsaCalculatorComponent';
import FhsaCalculatorButton from '../Calculator-Component/FHSA/FhsaCalculatorButton';
import LinkButton from '../Link-Component/LinkComponent';
import NavToDashboard from '../Nav-to-Dashboard-Button-Component/Nav-to-Dashboard-Button';
import MoreInfoButtons from '../MoreInfo-Component/MoreInfoButtons';

export default function QuizPage({ data }) {
  const router = useRouter();
  const [historyState, setHistoryState] = React.useState<HistoryState>(
    getInitialState(data)
  );

  sessionStorage.setItem(
    'userHistory',
    JSON.stringify(historyState.historyArray)
  );

  const rootNode: Node = buildQuizData();
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [showNextText, setShowNextText] = useState<boolean>(false);
  const [showPrevText, setShowPrevText] = useState<boolean>(false);
  const [currentNode, setCurrentNode] = useState<Node>(
    findNodeTest(historyState.historyArray.at(-1), rootNode, rootNode)
  );
  const [loading, setLoading] = useState(true);
  const [showTfsaCalculator, setshowTfsaCalculator] = React.useState(false);
  const [showFhsaCalculator, setshowFhsaCalculator] = React.useState(false);
  const [showLink, setShowLink] = React.useState(false);
  const [showDashboard, setShowDashboard] = React.useState(false);

  function getInitialState(data: HistoryState): HistoryState {
    let hist: HistoryState = data;
    if (data.initialState) {
      if (sessionStorage.getItem('userHistory')) {
        hist = {
          loading: data.loading,
          historyArray: JSON.parse(sessionStorage.getItem('userHistory')),
          error: data.error,
          initialState: false,
        };
        sessionStorage.removeItem('userHistory');
      } else {
        hist = {
          loading: data.loading,
          historyArray: [0],
          error: data.error,
          initialState: false,
        };
      }
    }
    return hist;
  }

  function nextNode(id: number) {
    // eslint-disable-next-line prefer-const
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
      router.push('/');
    } else {
      // eslint-disable-next-line prefer-const
      let id = historyState.historyArray.at(-2);
      setHistoryState({
        ...historyState,
        historyArray: historyState.historyArray.slice(0, -1),
      });
      // eslint-disable-next-line prefer-const
      let tempNode = findNodeTest(id, currentNode, rootNode);
      setCurrentNode(tempNode);
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

  async function setHistoryAsync() {
    // eslint-disable-next-line prefer-const
    let localHistoryState: HistoryState = await historyState;
    setHistoryFunction(localHistoryState.historyArray);
  }

  useEffect(() => {
    setCurrentTextIndex(0);
    setShowNextText(isNextAvailable(currentNode, currentTextIndex));
    setShowPrevText(isPrevAvailable(currentNode, currentTextIndex));

    if (currentNode.id == 4 || currentNode.id == 23) {
      setshowTfsaCalculator(true);
    } else setshowTfsaCalculator(false);

    if (currentNode.id == 14 || currentNode.id == 31) {
      setshowFhsaCalculator(true);
    } else setshowFhsaCalculator(false);

    if (currentNode.link) {
      setShowLink(true);
    } else setShowLink(false);

    if (historyState.loading) {
      setHistoryAsync();
    }

    if (historyState.error == 'Not logged in') {
      sessionStorage.setItem(
        'userHistory',
        JSON.stringify(historyState.historyArray)
      );
    }

    setShowDashboard(false);
    for (let i = 0; i < dashboard_goals.goals.length; i++) {
      if (dashboard_goals.goals[i].id == currentNode.id) {
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
      {loading && <Loader />}
      <div className="h-screen flex items-center justify-center">
        {/* Parent container for image and text */}
        <div
          className={`flex flex-col-reverse sm:flex-row items-center ${
            loading ? 'hidden' : ''
          }`}
        >
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
              onLoadingComplete={() => setLoading(false)}
            />
          </div>

          {/* Text Area */}
          <div className="2xl:w-[650px] xl:w-[650px] md:w-[450px] sm:w-[400px] w-[300px] text-left rounded-xl mt-12">
            {/* Above Texbox area */}
            <div className="flex flex-row items-center justify-between">
              {/* Back button */}
              <div className="rounded-xl bg-light_blue_bg dark:bg-[#333] p-2 inline-block">
                <IoIosArrowRoundBack
                  onClick={goBack}
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
              </div>
            </div>

            {/* TextBox */}
            <div className="relative w-full">
              <div className="w-full rounded-xl px-1 py-2 relative">
                <div className="max-h-64">
                  <Textbox
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
                    let id = response.connectId ?? response.id;
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
          </div>
        </div>
      </div>
    </>
  );
}
