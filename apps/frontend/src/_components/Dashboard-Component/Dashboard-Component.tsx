'use client';
import Textbox from '@/_components/Textbox-Component/Textbox';
import Image from 'next/image';
import { useState } from 'react';
import Goal from '@/_components/Dashboard-Component/Goal/Goal';
import Acheivements from '@/_components/Dashboard-Component/Achievements/Acheivements';
import Toolbox from './Toolbox/Toolbox';
import { useUser } from '@auth0/nextjs-auth0/client';
import dashboardgoals from '@/_data/constants/dashboard-goals.json';
import { DashboardGoal } from '@/_data/types/types';
import extendedtext from '@/_data/constants/extendedTexts.json';
import { QuizText } from '@/_data/types/types';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { ThemeProvider } from '@/app/settings/providers';

type DashboardProps = {
  historyData: {
    loading: boolean;
    historyArray: number[];
    error: string;
    initialState: boolean;
  };
};

function Dashboard({ historyData }: DashboardProps) {
  const [loading, setLoading] = useState(true);

  const historyArray = historyData.historyArray;

  const { user, isLoading } = useUser();
  const welcomeMessage = user?.name
    ? `Welcome to your dashboard ${user.name}!`
    : 'Welcome to your dashboard!';

  const goals: DashboardGoal[] = dashboardgoals.goals as DashboardGoal[];
  let goalText = 'Continue in the Quiz';
  let currentNodeId = historyArray[historyArray.length - 1];

  for (let i = 0; i < goals.length; i++) {
    if (goals[i].id == currentNodeId) {
      goalText = goals[i].goalText;
      break;
    }
  }

  console.log(historyArray);

  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const quizText: QuizText[] = extendedtext.extendedTexts as QuizText[];
  let extendedText = [];
  for (let i = 0; i < quizText.length; i++) {
    if (quizText[i].id == historyArray[historyArray.length - 1]) {
      extendedText = quizText[i].extendedText;
      break;
    }
  }

  function moveTextIndex(forward: number) {
    if (forward == 1 && showNextText()) {
      setCurrentTextIndex(currentTextIndex + 1);
    } else if (showPrevText()) {
      setCurrentTextIndex(currentTextIndex - 1);
    }
  }

  function showNextText() {
    return currentTextIndex < extendedText.length - 1 ? true : false;
  }

  function showPrevText() {
    return currentTextIndex > 0 ? true : false;
  }

  return (
      <div className="flex flex-col gap-y-8 m-8 dark:text-[#333] text-white">
        <div className="flex flex-col md:flex-row justify-between">
          <p className="font-bold text-xl sm:text-2xl  drop-shadow-lg dark:text-shadow-none dark:text-[#333]">
            {welcomeMessage}
          </p>
        </div>

        <div className="w-full">
          <Goal goal={goalText} percentage={78} />
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row w-full justify-between items-start gap-x-5 md:gap-y-5 lg:gap-y-5 gap-y-5 ">
          <div className="flex flex-col gap-y-8 w-full md:w-2/3">
            <div className="w-full">
              {/* <Textbox label="current acheivements"></Textbox> */}
              <Acheivements historyArray={historyArray} />
            </div>

            <div>
              <Toolbox historyArray={historyArray} />
            </div>
          </div>

          <div className="flex flex-col justify-end items-center lg:items-between md:items-between h-full md:w-1/2 gap-y-8">
            <div className="w-80 flex flex-col gap-y-3 ">
              <Textbox
                label={
                  extendedText.length > 0
                    ? extendedText[currentTextIndex]
                    : 'Complete your goal to progress!'
                }
                paddingBetween={false}
                chatBubble={false}
                centerAlignment={false}
                dashboard={true}
              />

              <div className="flex flex-row justify-end items-center gap-x-3 dark:text-[#333]">
                {showPrevText() && (
                  <button className=" text-xl p-2 bg-light_blue rounded-lg">
                    <FaAngleLeft onClick={() => moveTextIndex(-1)} />
                  </button>
                )}
                {showNextText() && (
                  <button className=" text-xl p-2 bg-light_blue rounded-lg">
                    <FaAngleRight onClick={() => moveTextIndex(1)} />
                  </button>
                )}
              </div>
            </div>
            <Image
              src="/images/Fin.webp"
              alt="Logo"
              width={250}
              height={250}
              className=""
              priority
              unoptimized
              onLoadingComplete={() => setLoading(false)}
            />
          </div>
        </div>
      </div>
  );
}
export default Dashboard;
