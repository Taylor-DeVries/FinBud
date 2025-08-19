'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import Link from 'next/link';
import ResponsiveImage from '@/_components/Responsive-Image-Component/ResponsiveImage';
import Textbox from '@/_components/Textbox-Component/Textbox';
import Button from '@/_components/Button-Component/Button';
import ProfileName from '@/_components/Profile-Name-Component/ProfileName';
import ProfileEmail from '@/_components/Profile-Email-Component/ProfileEmail';
import ProfileHeader from '@/_components/Profile-Header-Component/ProfileHeader';

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
            <ProfileHeader name={activeUser.name} picture={activeUser.picture} />

          {/* Profile Information */}
          <div className="space-y-4">
            {/* Name Section */}
            <ProfileName name={activeUser.name} />

            {/* Email Section */}
            <ProfileEmail email={activeUser.email} />


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
