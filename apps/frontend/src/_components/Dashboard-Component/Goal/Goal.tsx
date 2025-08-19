import Meter from '@/_components/Dashboard-Component/Goal/Meter';
export default function Goal({ goal, percentage }) {
  return (
    <div className="bg-light_blue sm:px-8 px-6 py-4 flex flex-col gap-y-2 rounded-xl dark:text-[#333]">
      <p className=" drop-shadow-lg text-2xl">Your goal: {goal}</p>
      {/* <Meter progress={percentage} /> */}
    </div>
  );
}
