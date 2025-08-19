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
        <div className="w-full max-w-lg mx-auto px-6 sm:px-8">
          {/* Profile Header */}
          <div className="text-center mb-8">
            <div className="relative inline-block mb-4">
              <div id="profile-photo" className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-blue shadow-lg">
                <img
                  src={activeUser.picture || '/images/Fin.webp'}
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
              <div className="relative">
                <input
                  type="file"
                  id="profile-photo-upload"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = (e) => {
                        const result = e.target?.result as string;
                        // Update the profile picture immediately for preview
                        const img = document.querySelector('#profile-photo img') as HTMLImageElement;
                        if (img) {
                          img.src = result;
                        }
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
                <label
                  htmlFor="profile-photo-upload"
                  className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue hover:bg-light_blue text-white rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200 shadow-lg border-2 border-white"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </label>
              </div>
            </div>
            <Textbox
              label={`Welcome back, ${activeUser.name}!`}
              centerAlignment={true}
            />
          </div>

          {/* Profile Information */}
          <div className="space-y-4">
            {/* Name Section */}
            <div className="bg-white/95 dark:bg-gray-900/80 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700/80 backdrop-blur text-gray-900 dark:text-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">Full Name</h3>
                  <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{activeUser.name}</p>
                </div>
              </div>
            </div>

            {/* Email Section */}
            <div className="bg-white/95 dark:bg-gray-900/80 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700/80 backdrop-blur text-gray-900 dark:text-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">Email Address</h3>
                  <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 break-words">{activeUser.email}</p>
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
