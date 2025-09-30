'use client';

interface ProfileNameProps {
  name: string;
}

export default function ProfileName({ name }: ProfileNameProps) {
  return (
<<<<<<< HEAD:apps/frontend/src/_components/Profile-Name-Component/ProfileName.tsx
    <div className="text-left">
      <div className="bg-blue text-white sm:px-8 px-6 py-4 rounded-xl flex items-center space-x-4">
=======
    <div className="bg-white/95 dark:bg-[#333] rounded-xl p-6 shadow-lg backdrop-blur text-gray-900 dark:text-gray-100">
      <div className="flex items-center space-x-3">
>>>>>>> origin/main:apps/frontend/src/_components/Profile-Components/Profile-Name-Component/ProfileName.tsx
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
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>

        {/* Text */}
        <div>
          <div className="font-bold text-xl sm:text-2xl dark:text-[#333]">
            Full Name
          </div>
          <div className="font-semibold text-lg sm:text-xl dark:text-[#333]">
            {name}
          </div>
        </div>
      </div>
    </div>
  );
}
