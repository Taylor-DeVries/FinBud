'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import Link from 'next/link';
import ResponsiveImage from '@/_components/Responsive-Image-Component/ResponsiveImage';

const mockUser = {
  name: 'Test User',
  email: 'test@example.com',
  picture:
    'https://lh3.googleusercontent.com/a-/AOh14Gjc2FZjK8Mn3XaK7XZG3-fake-user-photo=s96-c',
};

export default function ProfilePage() {
  const { user, isLoading, error } = useUser();

  const activeUser =
    !user && process.env.NODE_ENV === 'development' ? mockUser : user;

  if (isLoading) {
    return (
      <ResponsiveImage>
        <div className="flex justify-center items-center h-screen text-gray-500">
          Loading...
        </div>
      </ResponsiveImage>
    );
  }

  if (error) {
    return (
      <ResponsiveImage>
        <div className="flex justify-center items-center h-screen text-red-500">
          {error.message}
        </div>
      </ResponsiveImage>
    );
  }

  if (!activeUser) {
    return (
      <ResponsiveImage>
        <div className="flex justify-center items-center h-screen text-center px-4">
          <p className="text-lg">
            Please{' '}
            <Link href="/api/auth/login" className="text-blue-600 hover:underline">
              sign in
            </Link>
            .
          </p>
        </div>
      </ResponsiveImage>
    );
  }

  return (
    <ResponsiveImage>
      <div className="flex flex-col items-center justify-center h-screen space-y-6 px-4 max-w-sm mx-auto">
        {/* Avatar Box */}
        <div className="w-full bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Avatar</h2>
          <Image
            src={activeUser.picture || '/default-avatar.png'}
            alt="User Avatar"
            width={100}
            height={100}
            className="mx-auto rounded-full"
          />
        </div>

        {/* Name Box */}
        <div className="w-full bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Name</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">{activeUser.name}</p>
        </div>

        {/* Email Box */}
        <div className="w-full bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Email</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">{activeUser.email}</p>
        </div>

        {/* Sign Out Box */}
        <div className="w-full bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center">
          <a
            href="/api/auth/logout"
            className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-md transition"
          >
            Sign Out
          </a>
        </div>
      </div>
    </ResponsiveImage>
  );
}
