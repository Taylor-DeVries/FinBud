// components/MoreInfoButtons.tsx
import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface MoreInfoButtonsProps {
  showPrevText: boolean;
  showNextText: boolean;
  moveTextIndex: (val: number) => void;
}

const MoreInfoButtons: React.FC<MoreInfoButtonsProps> = ({
  showPrevText,
  showNextText,
  moveTextIndex,
}) => {
  return (
    <div className="mb-2 flex justify-end mt-1">
      {showPrevText && (
        <div className="rounded-xl bg-light_blue_bg dark:bg-[#333] p-2 mx-1 inline-block">
          <FaAngleLeft
            onClick={() => moveTextIndex(-1)}
            className="text-blue h-7 w-7 hover:cursor-pointer"
          />
        </div>
      )}

      {/* When both showPrevText and showNextText are true, show the FaAngleRight icon */}
      {showNextText && showPrevText && (
        <div className="rounded-xl bg-light_blue_bg dark:bg-[#333] p-2 mx-1 inline-block">
          <FaAngleRight
            onClick={() => moveTextIndex(1)}
            className="text-blue h-7 w-7 hover:cursor-pointer"
          />
        </div>
      )}

      {/* When showNextText is true and showPrevText is false, show the animation instead of arrow */}
      {showNextText && !showPrevText && (
        <div
          onClick={() => moveTextIndex(1)}
          className="rounded-xl bg-light_blue_bg dark:bg-[#333] p-2 mx-1 inline-block cursor-pointer"
        >
          <video
            src="/animations/ButtonDots_Animation.webm"
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture
            className="h-7 w-7 object-contain block"
            style={{
              backgroundColor: "transparent",
              imageRendering: "auto",
              transformOrigin: "center",
              transform: "scale(1.2)",
              mixBlendMode: "screen",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default MoreInfoButtons;
