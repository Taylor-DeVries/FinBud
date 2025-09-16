export default function DashboardButton({ buttonText }) {
  return (
    <button className="w-12 h-12 rounded-xl bg-light_blue_bg dark:bg-[#333] m-1 flex items-center justify-center">
      {buttonText}
    </button>
  );
}
