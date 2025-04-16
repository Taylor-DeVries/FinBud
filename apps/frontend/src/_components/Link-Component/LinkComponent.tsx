'use client';
import { AiOutlineLink } from "react-icons/ai";
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
                <AiOutlineLink
                    className="text-blue hover:text-grey-500"
                    size={50}
                ></AiOutlineLink>
            </button >
            <Tooltip anchorSelect="#LinkButton" place="top-start" >
                {`${url.url}`}
            </Tooltip>

        </>
    )
}
export default LinkButton