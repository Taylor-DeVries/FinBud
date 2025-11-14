import Meter from '@/_components/dashboard-component/Goal/meter';

export default function Goal({ goal, percentage }) {
  return (
    <div className="bg-light_blue dark:bg-[#333] px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex flex-col gap-y-3 rounded-xl shadow-md">
      <p className="text-white dark:text-blue drop-shadow-md text-base sm:text-xl lg:text-2xl font-bold leading-snug">
        Your goal: {goal}
      </p>
      
      {/* Progress Bar */}
      <div className="flex flex-col gap-y-2">
        <div className="flex justify-between items-center text-xs sm:text-sm">
          <span className="text-white/90 dark:text-gray-300 font-medium">Quiz Progress</span>
          <span className="text-white dark:text-blue font-bold text-sm sm:text-base">{percentage}%</span>
        </div>
        <div className="w-full bg-white/25 dark:bg-gray-300 rounded-full h-2.5 sm:h-3 overflow-hidden shadow-inner">
          <div 
            className="bg-emerald-400 dark:bg-emerald-400 h-full rounded-full transition-all duration-700 ease-out shadow-sm"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}
