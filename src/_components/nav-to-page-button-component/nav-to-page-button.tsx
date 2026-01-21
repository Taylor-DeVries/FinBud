'use client';
import { Tooltip } from 'react-tooltip';
import {
  IconHome,
  IconPaw,
  IconSettings,
  IconQuestionMark,
  IconChartBar,
} from '@tabler/icons-react';

function NavToPage({destinationPage, tooltipText=""}) {

  let buttonId = `NavTo${destinationPage}`;
  let destinationUrl; 
  let tooltip = tooltipText || `Back to ${destinationPage}`;

  switch(destinationPage) {
    case "Dashboard":
      destinationUrl = "/dashboard";
      break;
    case "Quiz":
      destinationUrl = "/quiz";
      break;
    case "Home":
      destinationUrl = "/";
      break;
    case "Settings":
      destinationUrl = "/settings";
      break;
    case "Profile":
      destinationUrl = "/profile";
      break;
    default:
      destinationUrl = "/";
  }

  return (
    <>
    <div className="w-12 h-12 rounded-xl bg-light_blue_bg dark:bg-[#333] m-1 flex items-center justify-center">
      <button
        className={`sm:flex shadow-none btn border-none`}
        id={`${buttonId}`}
      >
        <a href={destinationUrl}>
          {destinationPage=="Dashboard" && <IconChartBar className="text-blue" size={25} />}
          {destinationPage=="Quiz" && <IconQuestionMark className="text-blue" size={25} />}
          {destinationPage=="Home" && <IconHome className="text-blue" size={25} />}
          {destinationPage=="Settings" && <IconSettings className="text-blue" size={25} />}
          {destinationPage=="Profile" && <IconPaw className="text-blue" size={25} />}
        </a>
      </button>

      <Tooltip anchorSelect={`#${buttonId}`} place="top">
        {tooltip}
      </Tooltip>
      </div>
    </>
  );
}
export default NavToPage;
