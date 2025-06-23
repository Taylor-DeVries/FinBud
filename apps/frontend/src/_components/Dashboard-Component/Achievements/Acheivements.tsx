import AcheivementEntry from './AcheivementEntry';
export default function Acheivements() {
  return (
    <div className="bg-light_blue  sm:px-8 px-6 py-4 flex flex-col gap-y-2 rounded-xl">
      <p className=" drop-shadow-lg text-2xl">Current Achievements:</p>
      <div className="flex flex-col gap-y-2 overflow-y-scroll h-32">
        <AcheivementEntry
          achievementName="High-Interest Debt"
          status="Paid"
          buttonText="View Details"
        />
        <AcheivementEntry
          achievementName="High-Interest Debt"
          status="Paid"
          buttonText="View Details"
        />
        <AcheivementEntry
          achievementName="High-Interest Debt"
          status="Paid"
          buttonText="View Details"
        />
        <AcheivementEntry
          achievementName="High-Interest Debt"
          status="Paid"
          buttonText="View Details"
        />
        <AcheivementEntry
          achievementName="High-Interest Debt"
          status="Paid"
          buttonText="View Details"
        />
        <AcheivementEntry
          achievementName="High-Interest Debt"
          status="Paid"
          buttonText="View Details"
        />
      </div>
    </div>
  );
}
