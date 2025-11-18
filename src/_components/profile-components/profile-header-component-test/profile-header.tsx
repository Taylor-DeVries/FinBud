'use client';

import Textbox from '@/_components/textbox-component/textbox';

interface ProfileHeaderProps {
  name: string;
  picture?: string | null;
}

export default function ProfileHeader({ name, picture }: ProfileHeaderProps) {
  return (
    <div className="text-center mb-8">
      {/* Profile Image */}
      <div className="relative inline-block mb-4">
        <div
          id="profile-photo"
          className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-blue shadow-lg"
        >
          <img
            src={picture || '/images/Fin.webp'}
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Welcome Text */}
      <Textbox label={`Welcome back, ${name}!`} centerAlignment={true} />
    </div>
  );
}
