import AchievementEntry from './AchievementEntry';
import {
  DashboardAchievement,
  UserAchievementEntry,
} from '@/_lib/_data/types/types';
import dashboardacheivements from '@/_lib/_data/constants/dashboard-achievements.json';
type AchievementProps = {
  historyArray: number[];
  userAchievements?: UserAchievementEntry[];
};

export default function Achievements({
  historyArray,
  userAchievements,
}: AchievementProps) {
  const completed = [];
  const DashboardAchievements: DashboardAchievement[] =
    dashboardacheivements.achievements as DashboardAchievement[];

  for (let i = 0; i < historyArray.length - 1; i++) {
    const id = historyArray[i];

    for (let j = 0; j < DashboardAchievements.length; j++) {
      if (DashboardAchievements[j].id == id) {
        const userAchievementInfo = userAchievements?.find(
          (ua) => ua.achievementId == id
        );
        // console.log("user achievement info for id ", id, ": ", userAchievementInfo);
        completed.push({
          dashboardAchievement: DashboardAchievements[j],
          userAchievement: userAchievementInfo,
        });
      }
    }
  }

  completed.reverse();

  return (
    <div className="bg-light_blue dark:bg-[#333] px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex flex-col gap-y-3 rounded-xl shadow-md">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <p className="text-white dark:text-blue drop-shadow-md text-base sm:text-xl lg:text-2xl font-bold">
          Achievements
        </p>
        {completed.length > 0 && (
          <span className="text-white/90 dark:text-blue text-xs sm:text-sm font-semibold bg-white/25 dark:bg-[#2C3E50] px-3 py-1.5 rounded-full shadow-sm">
            {completed.length} unlocked
          </span>
        )}
      </div>

      <div
        className={`flex flex-col gap-y-2 ${
          completed.length > 3
            ? 'overflow-y-auto max-h-48 sm:max-h-56 lg:max-h-64 pr-1 scrollbar-thin scrollbar-thumb-white/30 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent'
            : ''
        }`}
      >
        {completed.length === 0 ? (
          <p className="text-white/90 dark:text-blue text-sm sm:text-base py-2 leading-relaxed">
            No achievements yet! Complete your first goal to get started.
          </p>
        ) : (
          completed.map((achievement) => (
            <AchievementEntry
              key={achievement.dashboardAchievement.id}
              // achievementName={achievement.userAchievement ? achievement.userAchievement.userAchievementStatus : "NOT FOUND"}
              achievementName={achievement.dashboardAchievement.achievementText}
              status="Completed"
              buttonText="View Details"
            />
          ))
        )}
      </div>
    </div>
  );
}
