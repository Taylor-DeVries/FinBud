// components/MoreInfoButtons.tsx
import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { SyncLoader } from "react-spinners";
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
          <div className="flex h-7 w-7 items-center justify-center relative">
            <SyncLoader
              size={8}
              color="#5298b8"
              margin={1}
              className="custom-sync-loader"
            />
            <style>{`
              .custom-sync-loader span {
                animation: bounceUp 1s ease-in-out infinite !important;
              }

              .custom-sync-loader span:nth-child(1) {
                animation-delay: 0s !important;
              }
              .custom-sync-loader span:nth-child(2) {
                animation-delay: 0.2s !important;
              }
              .custom-sync-loader span:nth-child(3) {
                animation-delay: 0.4s !important;
              }

              @keyframes bounceUp {
                0%   { transform: translateY(2px); }
                50%  { transform: translateY(-2px); }
                100% { transform: translateY(2px); }
              }
            `}</style>
          </div>
        </div>
      )}
    </div>
  );
};
export default MoreInfoButtons;
