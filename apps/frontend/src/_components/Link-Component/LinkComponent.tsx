'use client';
import { FaLink } from "react-icons/fa";
import { Tooltip } from "react-tooltip";


function LinkButton(url) {
    return (
        <>
          <div className="w-12 h-12 rounded-xl bg-light_blue_bg dark:bg-[#333] m-1 flex items-center justify-center">
            <button
                className={`sm:flex shadow-none m-0 px-3 btn border-none `}
                onClick={() =>
                    window.open(url.url)
                }
                id="LinkButton"
            >
                <FaLink
                    className={`text-blue m-0 p-0`}
                    size={20}
                ></FaLink>
            </button >
            <Tooltip anchorSelect="#LinkButton" place="top" >
                {`${url.url}`}
            </Tooltip>
          </div>
        </>
    )
}
export default LinkButton
