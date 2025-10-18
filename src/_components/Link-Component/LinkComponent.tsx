'use client';
import { FaLink } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
interface LinkButtonProps {
  dashboard?: boolean; // optional boolean prop
  url: string;
}

function LinkButton({ dashboard = false, url }: LinkButtonProps) {
  return (
    <>
      <button
        className={`sm:flex shadow-none m-0 px-3 btn border-none rounded-xl ${
          dashboard ? 'bg-transparent' : 'bg-light_blue_bg dark:bg-[#333]'
        } inline-block `}
        onClick={() => window.open(url)}
        id="LinkButton"
      >
        <FaLink
          className={`${
            dashboard ? 'text-white' : 'text-blue'
          } m-0 p-0`}
          size={`${dashboard ? 35 : 20}`}
        ></FaLink>
      </button>
      {!dashboard && (
        <Tooltip anchorSelect="#LinkButton" place="top">
          {`${url}`}
        </Tooltip>
      )}
    </>
  );
}
export default LinkButton;
