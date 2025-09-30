'use client';
import { IconChartBar } from '@tabler/icons-react';
import { Tooltip } from 'react-tooltip';

function NavToDashboard() {
  return (
    <>
      <button
        className={`sm:flex shadow-none m-0 px-3 btn border-none rounded-xl bg-light_blue_bg dark:bg-[#333] inline-block text-blue hover:text-gray-500 `}
        id="NavToDashboard"
      >
        <a href="/dashboard">
          <IconChartBar />
        </a>
      </button>

      <Tooltip anchorSelect="#NavToDashboard" place="top">
        Dashboard
      </Tooltip>
    </>
  );
}
export default NavToDashboard;
