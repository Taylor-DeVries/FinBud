interface MeterProps {
  progress: React.ReactNode;
}

export default function Meter({ progress }) {
  return (
    <div className="flex flex-row gap-x-0 ">
      <div
        className={`p-3 bg-emerald-400 rounded-l-lg`}
        style={{ width: `${progress}%` }}
      ></div>
      <div
        className={`p-3 bg-dashboard_gray_bg rounded-r-lg`}
        style={{ width: `${100 - progress}%` }}
      ></div>
    </div>
  );
}
