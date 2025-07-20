import DashboardButton from '@/_components/Dashboard-Component/Button/Dashboard-Button';
export default function AcheivementEntry({
  achievementName,
  status,
  buttonText,
  nameOnly = false,
}) {
  return (
    <div className="flex md:flex-row lg:flex-row flex-col justify-between md:items-center lg:items-center items-start md:gap-x-4 lg:gap-x-4">
      <p className=" drop-shadow-lg text-xl truncate w-full">
        {achievementName}
      </p>
      <p className=" drop-shadow-lg text-xl text-emerald-400">{status}</p>
      {/* <DashboardButton buttonText={buttonText} /> */}
    </div>
  );
}
