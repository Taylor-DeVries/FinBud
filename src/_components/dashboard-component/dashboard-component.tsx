'use client';
import DashboardTextbox from './dashboard-textbox/dashboard-textbox';
import Image from 'next/image';
import { useState } from 'react';
import Goal from '@/_components/dashboard-component/goal/goal';
import Acheivements from '@/_components/dashboard-component/achievements/acheivements';
import Toolbox from './toolbox/toolbox';
import { useUser } from '@auth0/nextjs-auth0';
import dashboardgoals from '@/_lib/_data/constants/dashboard-goals.json';
import { DashboardGoal, UserAchievementEntry } from '@/_lib/_data/types/types';
import extendedtext from '@/_lib/_data/constants/extended-texts.json';
import { QuizText } from '@/_lib/_data/types/types';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import NavToPage from '../nav-to-page-button-component/nav-to-page-button';

type DashboardProps = {
  historyData: {
    loading: boolean;
    historyArray: number[];
    error: string;
    initialState: boolean;
  };
  userAchievements?: UserAchievementEntry[];
};

function Dashboard({ historyData, userAchievements }: DashboardProps) {
  const [loading, setLoading] = useState(true);

  const historyArray = historyData.historyArray;

  const { user, isLoading } = useUser();
  const welcomeMessage = user?.name
    ? `Welcome to your dashboard ${user.name}!`
    : 'Welcome to your dashboard!';

  const goals: DashboardGoal[] = dashboardgoals.goals as DashboardGoal[];
  let goalText = 'Continue in the Quiz';
  const currentNodeId = historyArray[historyArray.length - 1];

  for (let i = 0; i < goals.length; i++) {
    if (goals[i].id == currentNodeId) {
      goalText = goals[i].goalText;
      break;
    }
  }

  // Calculate quiz progress
  const totalGoals = goals.length;
  const completedGoals = historyArray.length - 1; // Subtract 1 for starting node
  const progressPercentage = Math.min(
    100,
    Math.round((completedGoals / totalGoals) * 100)
  );

  // Generate encouraging message based on progress
  const getEncouragingMessage = () => {
    if (progressPercentage === 0) {
      return { text: "Let's get started!", emoji: '🚀' };
    } else if (progressPercentage < 25) {
      return { text: 'Great start!', emoji: '🌟' };
    } else if (progressPercentage < 50) {
      return { text: "You're doing amazing!", emoji: '💪' };
    } else if (progressPercentage < 75) {
      return { text: 'Finance bro incoming!', emoji: '🔥' };
    } else if (progressPercentage < 100) {
      return { text: 'You totally Rock!', emoji: '⭐' };
    } else {
      return { text: 'You did it!', emoji: '🎉' };
    }
  };

  const encouragement = getEncouragingMessage();

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
    <div className="flex flex-col gap-y-4 sm:gap-y-6 max-w-7xl mx-auto px-3 sm:px-6 py-4 sm:py-6">
      {/* Header with Encouragement */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl text-white dark:text-gray-800 drop-shadow-md">
          {welcomeMessage}
        </h1>

        <NavToPage destinationPage="Quiz" />
      </div>

      {/* Current Goal */}
      <div className="w-full">
        <Goal goal={goalText} percentage={progressPercentage} />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Left Column - Achievements & Toolbox */}
        <div className="lg:col-span-2 flex flex-col gap-y-4 sm:gap-y-6">
          <Acheivements
            historyArray={historyArray}
            userAchievements={userAchievements}
          />
          <Toolbox historyArray={historyArray} />
        </div>

        {/* Right Column - Fin & Tips */}
        <div className="flex flex-col items-center gap-y-4 sm:gap-y-6">
          {/* Financial Tips */}
          <div className="w-full max-w-sm ">
            <DashboardTextbox
              label={
                extendedText.length > 0
                  ? extendedText[currentTextIndex]
                  : 'Complete your goal to progress!'
              }
              paddingBetween={false}
              centerAlignment={false}
            />

            {/* Tip Navigation */}
            {extendedText.length > 1 && (
              <div className="flex justify-end items-center gap-2 mt-3">
                {showPrevText() && (
                  <button
                    onClick={() => moveTextIndex(-1)}
                    className="p-2 sm:p-2.5 bg-light_blue hover:bg-blue-400 dark:bg-[#333] dark:hover:bg-gray-600 text-white rounded-lg transition-colors shadow-sm active:scale-95"
                    aria-label="Previous tip"
                  >
                    <FaAngleLeft className="text-base sm:text-lg" />
                  </button>
                )}
                {showNextText() && (
                  <button
                    onClick={() => moveTextIndex(1)}
                    className="p-2 sm:p-2.5 bg-light_blue hover:bg-blue-400 dark:bg-[#333] dark:hover:bg-gray-600 text-white rounded-lg transition-colors shadow-sm active:scale-95"
                    aria-label="Next tip"
                  >
                    <FaAngleRight className="text-base sm:text-lg" />
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Fin Character */}
          <div className="mt-2 sm:mt-4">
            <Image
              src="/images/Fin.png"
              alt="Fin the Financial Buddy"
              width={200}
              height={200}
              className="drop-shadow-lg w-48 h-48 sm:w-52 sm:h-52 lg:w-56 lg:h-56"
              priority
              unoptimized
              onLoad={() => setLoading(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
