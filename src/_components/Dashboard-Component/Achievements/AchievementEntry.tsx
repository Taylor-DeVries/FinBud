import DashboardButton from '@/_components/Dashboard-Component/Button/Dashboard-Button';
import { FaCheckCircle } from 'react-icons/fa';

export default function AchievementEntry({
  achievementName,
  status,
  buttonText,
  nameOnly = false,
}) {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-white/15 dark:bg-[#2C3E50] rounded-lg hover:bg-white/25 dark:hover:bg-[#34495E] transition-all duration-200">
      <FaCheckCircle className="text-emerald-400 dark:text-emerald-400 text-base sm:text-lg flex-shrink-0" />
      <p className="text-white dark:text-blue text-xs sm:text-sm lg:text-base font-medium flex-1 leading-snug">
        {achievementName}
      </p>
    </div>
  );
}
