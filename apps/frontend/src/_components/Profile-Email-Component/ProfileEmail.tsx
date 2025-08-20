'use client';

interface ProfileEmailProps {
  email: string;
}

export default function ProfileEmail({ email }: ProfileEmailProps) {
  return (
    <div className="bg-white/95 dark:bg-gray-900/80 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700/80 backdrop-blur text-gray-900 dark:text-gray-100">
      <div className="flex items-center space-x-3">
        {/* Icon */}
        <div className="w-10 h-10 bg-blue rounded-full flex items-center justify-center">
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

        {/* Content */}
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Email Address
          </h3>
          <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 break-words">
            {email}
          </p>
        </div>
      </div>
    </div>
  );
}
