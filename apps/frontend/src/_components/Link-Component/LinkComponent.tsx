'use client';
import { FaLink } from "react-icons/fa";
import { Tooltip } from "react-tooltip";


function LinkButton(url) {
    return (
        <>
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

        </>
    )
}
export default LinkButton
