import React from 'react';
import { TypeAnimation } from 'react-type-animation';
interface DashboardTextboxProps {
  label?: React.ReactNode;
  secondaryLabel?: React.ReactNode;
  paddingBetween?: boolean;
  centerAlignment?: boolean;
}

const DashboardTextbox: React.FC<DashboardTextboxProps> = ({
  label,
  secondaryLabel,
  paddingBetween,
  centerAlignment,
}) => {
  const animatedLabelText =
    typeof label === 'string' || typeof label === 'number'
      ? String(label)
      : null;

  return (
    <div className="text-left">
      <div
        className={`bg-light_blue dark:bg-[#333] text-white dark:text-blue sm:px-8 px-6 py-4 rounded-xl shadow-md ${
          centerAlignment ? 'text-center' : ''
        }`}
      >
        <div className="font-bold text-base sm:text-base">
          {animatedLabelText ? (
            <TypeAnimation
              key={animatedLabelText}
              sequence={[animatedLabelText]}
              wrapper="p"
              speed={80}
              cursor={false}
              repeat={0}
              preRenderFirstString={false}
            />
          ) : (
            label
          )}
        </div>
        <div
          className={`font-semibold text-lg sm:text-xl ${
            paddingBetween ? 'mt-4' : ''
          }`}
        >
          {secondaryLabel}
        </div>
      </div>
    </div>
  );
};

export default DashboardTextbox;
