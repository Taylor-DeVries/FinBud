'use client';
// import { FaLink } from 'react-icons/fa';
import { IconChartBar } from '@tabler/icons-react';
import { Tooltip } from 'react-tooltip';

function NavToDashboard() {
  // const navigate = useNavigate();
  return (
    <>
    <div className="w-12 h-12 rounded-xl bg-light_blue_bg dark:bg-[#333] m-1 flex items-center justify-center">
      <button
        className={`sm:flex shadow-none btn border-none`}
        id="NavToDashboard"
      >
        <a href="/dashboard">
          <IconChartBar className="text-blue" size={25} />
        </a>
      </button>

      <Tooltip anchorSelect="#NavToDashboard" place="top">
        Dashboard
      </Tooltip>
      </div>
    </>
  );
}
export default NavToDashboard;
