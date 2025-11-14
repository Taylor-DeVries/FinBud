'use client';

interface ProfileNameProps {
  name: string;
}

export default function ProfileName({ name }: ProfileNameProps) {
  return (
    <div className="bg-white/95 dark:bg-[#333] rounded-xl p-6 shadow-lg backdrop-blur text-gray-900 dark:text-gray-100">
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
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Full Name
          </h3>
          <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
}
