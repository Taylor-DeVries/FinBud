'use client';

import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import ResponsiveImage from '@/_components/responsive-image-component/responsive-image';
import Textbox from '@/_components/textbox-component/textbox';
import Button from '@/_components/button-component/button';
import ProfileName from '@/_components/profile-components/profile-name-component/profile-name';
import ProfileEmail from '@/_components/profile-components/profile-email-component/profile-email';
import ProfileHeader from '@/_components/profile-components/profile-header-component/profile-header';
import ProfileSignOutButton from '@/_components/profile-components/profile-signout-component/profile-sign-out-button';
import { importFromBlob, getUserName } from '@/_lib/_services/profile-functions';
import { useEffect, useState } from 'react';

const mockUser = {
  name: 'Test User',
  email: 'test@example.com',
  picture:
    'https://lh3.googleusercontent.com/a-/AOh14Gjc2FZjK8Mn3XaK7XZG3-fake-user-photo=s96-c',
};

export default function ProfilePage() {
  const { user, isLoading, error } = useUser();
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [userName, setUserName] = useState('');

  const activeUser = !user && process.env.NODE_ENV === 'development' ? mockUser : user;

  useEffect(() => {
    if (!activeUser) {
      return;
    }

    const fetchProfilePicture = async (userPicture: string) => {
      const url = await importFromBlob();
      const profilePic = url == null ? userPicture : url;
      setProfilePicture(profilePic);
    };

    fetchProfilePicture(activeUser.picture);
  }, [activeUser]);

  useEffect(() => {
    if (!activeUser) {
      return;
    }

    const fetchUserName = async (activeUserName: string) => {
      const storedUserName = await getUserName();
      const name = storedUserName == null ? activeUserName : storedUserName;
      setUserName(name);
    };

    fetchUserName(activeUser.name);
  }, [activeUser]);



  if (isLoading) {
    return (
      <ResponsiveImage>
        <div className="h-screen flex items-center justify-center">
          <div className="text-center">
            <Textbox label="Loading your profile..." centerAlignment={true} />
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
              <Link href="/auth/login">
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
        <div className="flex flex-col gap-y-3 w-full max-w-lg mx-auto px-6 sm:px-8">
          {/* Profile Header */}
          <ProfileHeader name={userName || activeUser.name} picture={profilePicture} />

          {/* Profile Information */}
            {/* Name Section */}
            <ProfileName
              name={userName || activeUser.name}
              onNameUpdated={setUserName}
            />

            {/* Email Section */}
            <ProfileEmail email={activeUser.email} />


          {/* Action Buttons */}
          <ProfileSignOutButton />
        </div>
      </div>
    </ResponsiveImage>
  );
}
