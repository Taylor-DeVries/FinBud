'use client';

interface ProfileEmailProps {
  email: string;
}

export default function ProfileEmail({ email }: ProfileEmailProps) {
  return (
    <div className="text-left">
      <div className="bg-blue text-white sm:px-8 px-6 py-4 rounded-xl flex items-center space-x-4">
        {/* Icon */}
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>

        {/* Text */}
        <div className="min-w-0">
          <div className="font-bold text-xl sm:text-2xl dark:text-[#333]">
            Email Address
          </div>
          <div className="font-semibold text-lg sm:text-xl dark:text-[#333] break-words">
            {email}
          </div>
        </div>
      </div>
    </div>
  );
}
