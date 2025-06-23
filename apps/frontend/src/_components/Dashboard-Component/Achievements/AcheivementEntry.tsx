import DashboardButton from '@/_components/Dashboard-Component/Button/Dashboard-Button';
export default function AcheivementEntry({
  achievementName,
  status,
  buttonText,
}) {
  return (
    <div className="flex flex-row justify-between items-center">
      <p className="text-white drop-shadow-lg text-xl">{achievementName}</p>
      <p className="text-white drop-shadow-lg text-xl">{status}</p>
      <DashboardButton buttonText={buttonText} />
    </div>
  );
}
