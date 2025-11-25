'use client';

import { useState } from 'react';
import Textbox from '@/_components/textbox-component/textbox';
import { exportToBlob } from '@/_lib/_services/profile-functions';

interface ProfileHeaderProps {
  name: string;
  picture?: string | null;
}


export default function ProfileHeader({ name, picture }: ProfileHeaderProps) {
  const [uploadedPicture, setUploadedPicture] = useState<string | null>(null);
  const [fileObject, setFileObject] = useState<File>(null);
  const reader = new FileReader();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {

      setFileObject(file);
      
      reader.onload = () => {
        setUploadedPicture(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    console.log('submit clicked');
    
    exportToBlob(fileObject);
  };

  return (
    <div className="text-center mb-8">
      {/* Profile Image */}
      <div className="relative inline-block mb-4">
        <div
          id="profile-photo"
          className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-blue shadow-lg"
        >
          <img
            src={uploadedPicture || picture || '/images/Fin.webp'}
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Upload Button */}
      <div className="mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          className="block mx-auto mb-2"
        />
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-blue-600"
        >
          Upload
        </button>
      </div>

      {/* Welcome Text */}
      <Textbox label={`Welcome back, ${name}!`} centerAlignment={true} />
    </div>
  );
}