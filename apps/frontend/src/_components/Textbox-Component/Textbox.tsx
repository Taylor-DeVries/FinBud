import React from 'react';

interface TextBoxProps {
  label?: React.ReactNode;
  secondaryLabel?: React.ReactNode;
  paddingBetween?: boolean;
  chatBubble?: boolean;
  centerAlignment?: boolean;
}

const Textbox: React.FC<TextBoxProps> = ({
  label,
  secondaryLabel,
  paddingBetween,
  chatBubble,
  centerAlignment,
}) => {
  return (
    <div
      className={`text-left ${
        chatBubble ? 'sm:chat sm:chat-start sm:ml-0 ml-7' : ''
      } `}
    >
      <div
        className={`bg-blue text-white sm:px-8 px-6 py-4 rounded-xl ${
          chatBubble ? 'chat-bubble' : ''
        }  ${centerAlignment ? 'text-center' : ''}`}
      >
        <div className="font-bold text-xl sm:text-2xl dark:text-[#333]">
          {label}
        </div>
        <div
          className={`font-semibold text-lg sm:text-xl ${
            paddingBetween ? 'mt-4' : ''
          } dark:text-[#333]`}
        >
          {secondaryLabel}
        </div>
      </div>
    </div>
  );
};

export default Textbox;
