import React from "react";

interface TextBoxProps {
  label?: React.ReactNode;
  secondaryLabel?: string;
  paddingBetween?: boolean;
  chatBubble?: boolean;
}

const Textbox: React.FC<TextBoxProps> = ({
  label,
  secondaryLabel,
  paddingBetween,
  chatBubble,
}) => {
  return (
    <div
      className={`text-left ${
        chatBubble ? "sm:chat sm:chat-start sm:ml-0 ml-7" : ""
      } `}
    >
      <div
        className={`bg-blue text-white sm:px-8 px-6 py-4 rounded-xl ${
          chatBubble ? "chat-bubble" : ""
        }`}
      >
        <div className="font-bold text-xl sm:text-2xl">{label}</div>
        <div
          className={`font-semibold text-lg sm:text-xl ${
            paddingBetween ? "mt-4" : ""
          }`}
        >
          {secondaryLabel}
        </div>
      </div>
    </div>
  );
};

export default Textbox;
