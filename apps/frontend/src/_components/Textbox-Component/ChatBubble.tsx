import React from 'react';

interface ChatBubbleProps {
  label?: React.ReactNode;
  secondaryLabel?: React.ReactNode;
  paddingBetween?: boolean;
  centerAlignment?: boolean;
  align?: 'start' | 'end';
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  label,
  secondaryLabel,
  paddingBetween,
  centerAlignment,
  align = 'start',
}) => {
  return (
    <div
      className={`chat chat-${align} w-full !max-w-none !p-0`}
      // override DaisyUI chat limits
    >
      <div
        className={`
          chat-bubble bg-blue text-white
          sm:px-8 px-6 py-4 rounded-xl
          w-[calc(100%+2rem)]   /* make it overflow both sides */
          -ml-1                 /* pull it left */
          ${centerAlignment ? 'text-center' : ''}
        `}
      >
        {label && (
          <div className="font-bold text-xl sm:text-2xl dark:text-[#333]">
            {label}
          </div>
        )}

        {secondaryLabel && (
          <div
            className={`font-semibold text-lg sm:text-xl ${
              paddingBetween ? 'mt-4' : ''
            } dark:text-[#333]`}
          >
            {secondaryLabel}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBubble;
