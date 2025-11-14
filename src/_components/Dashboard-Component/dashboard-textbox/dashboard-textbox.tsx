import React from 'react';

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
  return (
    <div className="text-left">
      <div
        className={`bg-light_blue dark:bg-[#333] text-white dark:text-blue sm:px-8 px-6 py-4 rounded-xl shadow-md ${
          centerAlignment ? 'text-center' : ''
        }`}
      >
        <div className="font-bold text-base sm:text-base">
          {label}
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
