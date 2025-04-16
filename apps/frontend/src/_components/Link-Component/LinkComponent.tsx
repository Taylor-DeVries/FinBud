'use client';
import { FaLink } from "react-icons/fa";
import { Tooltip } from "react-tooltip";


function LinkButton(url) {
    return (
        <>
            <button
                className={`sm:flex shadow-none btn border-none`}
                onClick={() =>
                    window.open(url.url)
                }
                id="LinkButton"
            >
                <FaLink
                    className={`text-blue hover:text-gray-500`}
                    size={50}
                ></FaLink>
            </button >
            <Tooltip anchorSelect="#LinkButton" place="top" >
                {`${url.url}`}
            </Tooltip>

        </>
    )
}
export default LinkButton