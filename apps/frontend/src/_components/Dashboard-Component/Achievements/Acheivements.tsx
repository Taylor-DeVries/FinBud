import AcheivementEntry from './AchievementEntry';
import { DashboardAchievement } from '@/_data/types/types';
import dashboardacheivements from '@/_data/constants/dashboard-achievements.json';
type AcheivementProps = {
  historyArray: number[];
};

export default function Acheivements({ historyArray }: AcheivementProps) {
  let completed = [];
  const DashboardAcheivements: DashboardAchievement[] =
    dashboardacheivements.achievements as DashboardAchievement[];

  for (let i = 0; i < historyArray.length - 1; i++) {
    let id = historyArray[i];

    for (let j = 0; j < DashboardAcheivements.length; j++) {
      if (DashboardAcheivements[j].id == id) {
        completed.push(DashboardAcheivements[j]);
      }
    }
  }

  // console.log(historyArray);
  // console.log(completed);
  return (
    <div className="bg-light_blue  sm:px-8 px-6 py-4 flex flex-col gap-y-2 rounded-xl">
      <p className=" drop-shadow-lg text-2xl">Current Achievements:</p>
      <div
        className={`flex flex-col gap-y-2 ${
          completed.length == 0
            ? 'overflow-y-visible h-auto'
            : 'overflow-y-scroll h-32'
        } `}
      >
        {completed.length === 0 ? (
          <p className="text-xl drop-shadow-lg"> No Achievements Yet!</p>
        ) : (
          completed.map((achievement) => (
            <AcheivementEntry
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
