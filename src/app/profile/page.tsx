'use client';

import { useUser } from '@auth0/nextjs-auth0';
import Image from 'next/image';
import Link from 'next/link';
import ResponsiveImage from '@/_components/responsive-image-component/responsive-image';
import Textbox from '@/_components/textbox-component/textbox';
import Button from '@/_components/button-component/button';
import ProfileName from '@/_components/profile-components/profile-name-component/profile-name';
import ProfileEmail from '@/_components/profile-components/profile-email-component/profile-email';
import ProfileHeader from '@/_components/profile-components/profile-header-component/profile-header';
import ProfileSignOutButton from '@/_components/profile-components/profile-signout-component/profile-sign-out-button';
import { importFromBlob, exportToBlob } from '@/_lib/_services/profile-functions';
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
 
  const activeUser =
    !user && process.env.NODE_ENV === 'development' ? mockUser : user;

    useEffect(() => {
    const fetchProfilePicture = async (userPicture:string) => {
     
      
        const url = await importFromBlob();
        const profilePic = url == null ? userPicture : url;
        setProfilePicture(profilePic);
      
    };

    fetchProfilePicture(activeUser.picture);
  }, [activeUser.picture]);

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
        <div className="w-full max-w-lg mx-auto px-6 sm:px-8">
          {/* Profile Header */}
          <ProfileHeader name={activeUser.name} picture={profilePicture} />

          {/* Profile Information */}
          <div className="space-y-4">
            {/* Name Section */}
            <ProfileName name={activeUser.name} />

            {/* Email Section */}
            <ProfileEmail email={activeUser.email} />
          </div>

          {/* Action Buttons */}
          <ProfileSignOutButton />
        </div>
      </div>
    </ResponsiveImage>
  );
}
