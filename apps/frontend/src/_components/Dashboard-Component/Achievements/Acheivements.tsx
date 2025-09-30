import AchievementEntry from './AchievementEntry';
import { DashboardAchievement } from '@/_data/types/types';
import dashboardacheivements from '@/_data/constants/dashboard-achievements.json';
type AchievementProps = {
  historyArray: number[];
};

export default function Achievements({ historyArray }: AchievementProps) {
  let completed = [];
  const DashboardAchievements: DashboardAchievement[] =
    dashboardacheivements.achievements as DashboardAchievement[];

  for (let i = 0; i < historyArray.length - 1; i++) {
    let id = historyArray[i];

    for (let j = 0; j < DashboardAchievements.length; j++) {
      if (DashboardAchievements[j].id == id) {
        completed.push(DashboardAchievements[j]);
      }
    }
  }

  return (
    <div className="bg-light_blue  sm:px-8 px-6 py-4 flex flex-col gap-y-2 rounded-xl">
      <p className=" drop-shadow-lg text-2xl dark:text-[#333]">
        Current Achievements:
      </p>
      <div
        className={`flex flex-col gap-y-2`}
      >
        {completed.length === 0 ? (
          <p className="text-xl drop-shadow-lg"> No Achievements Yet!</p>
        ) : (
          completed.map((achievement) => (
            <AchievementEntry
              key={achievement.id}
              achievementName={achievement.achievementText}
              status="Completed"
              buttonText="View Details"
            />
          ))
        )}
      </div>
    </div>
  );
}
