'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import Link from 'next/link';
import ResponsiveImage from '@/_components/Responsive-Image-Component/ResponsiveImage';
import Textbox from '@/_components/Textbox-Component/Textbox';
import Button from '@/_components/Button-Component/Button';

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
        <div className="h-screen flex items-center justify-center">
          <div className="text-center">
            <Textbox
              label="Loading your profile..."
              centerAlignment={true}
            />
          </div>
        </div>
      </ResponsiveImage>
    );
  }

  if (error) {
    return (
      <ResponsiveImage>
        <div className="h-screen flex items-center justify-center">
          <div className="text-center">
            <Textbox
              label="Something went wrong"
              secondaryLabel={error.message}
              centerAlignment={true}
            />
          </div>
        </div>
      </ResponsiveImage>
    );
  }

  if (!activeUser) {
    return (
      <ResponsiveImage>
        <div className="h-screen flex items-center justify-center">
          <div className="text-center">
            <Textbox
              label="Please sign in to view your profile"
              centerAlignment={true}
            />
            <div className="mt-4">
              <Link href="/api/auth/login">
                <Button label="Sign In" onClick={() => {}} />
              </Link>
            </div>
          </div>
        </div>
      </ResponsiveImage>
    );
  }

  return (
    <ResponsiveImage>
      <div className="h-screen flex items-center justify-center">
        <div className="w-full max-w-md mx-auto px-4">
          {/* Profile Header */}
          <div className="text-center mb-8">
            <div className="relative inline-block mb-4">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-blue shadow-lg">
                <Image
                  src={activeUser.picture || '/images/Fin.webp'}
                  alt="User Avatar"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
            <Textbox
              label={`Welcome back, ${activeUser.name}!`}
              centerAlignment={true}
            />
          </div>

          {/* Profile Information */}
          <div className="space-y-4">
            {/* Name Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Full Name</h3>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">{activeUser.name}</p>
                </div>
              </div>
            </div>

            {/* Email Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email Address</h3>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">{activeUser.email}</p>
                </div>
              </div>
            </div>


          </div>

          {/* Action Buttons */}
          <div className="mt-8 text-center">
            <a
              href="/api/auth/logout"
              className="inline-block text-red-500 hover:text-red-600 font-medium transition-colors duration-200"
            >
              Sign Out
            </a>
          </div>
        </div>
      </div>
    </ResponsiveImage>
  );
}
