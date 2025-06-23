import DashboardButton from '@/_components/Dashboard-Component/Button/Dashboard-Button';
export default function AcheivementEntry({
  achievementName,
  status,
  buttonText,
}) {
  return (
    <div className="flex md:flex-row lg:flex-row flex-col justify-between md:items-center lg:items-center items-start">
      <p className=" drop-shadow-lg text-xl">{achievementName}</p>
      <p className=" drop-shadow-lg text-xl">{status}</p>
      <DashboardButton buttonText={buttonText} />
    </div>
  );
}
