'use client';

import { useState } from 'react';
import Textbox from '@/_components/textbox-component/textbox';
import { exportToBlob } from '@/_lib/_services/profile-functions';
import { GoPencil } from "react-icons/go";

interface ProfileHeaderProps {
  name: string;
  picture?: string | null;
}


export default function ProfileHeader({ name, picture }: ProfileHeaderProps) {
  const [uploadedPicture, setUploadedPicture] = useState<string | null>(null);
  const [pendingPicture, setPendingPicture] = useState<string | null>(null);
  const [fileObject, setFileObject] = useState<File | null>(null);
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      setFileObject(file);
      setUploadError(null);
      
      reader.onload = () => {
        setPendingPicture(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!fileObject) {
      setUploadError('Please select an image before submitting.');
      return;
    }

    setIsSubmitting(true);
    setUploadError(null);

    try {
      await exportToBlob(fileObject);
      setUploadedPicture(pendingPicture);
      setPendingPicture(null);
      setFileObject(null);
      setIsUploadDialogOpen(false);
    } catch {
      setUploadError('Upload failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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

        <button
          type="button"
          aria-label="Edit profile picture"
          onClick={() => setIsUploadDialogOpen(true)}
          className="absolute -right-2 -bottom-1 w-9 h-9 rounded-full bg-blue text-white shadow-md transition-colors flex items-center justify-center"
        >

          <GoPencil size={15} />
        </button>
      </div>

      {isUploadDialogOpen && (
        <div className="fixed inset-0 lg:left-[18rem] z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-2xl border border-blue-100">
            <button
              type="button"
              aria-label="Close upload dialog"
              onClick={() => {
                setIsUploadDialogOpen(false);
                setUploadError(null);
                setPendingPicture(null);
                setFileObject(null);
              }}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl leading-none"
            >
              ×
            </button>

            <h2 className="text-xl font-semibold text-blue-900 mb-2">Update Profile Photo</h2>
            <p className="text-sm text-gray-600 mb-4">
              Choose an image file to update your profile picture.
            </p>

            <label className="block text-left text-sm font-medium text-blue-900 mb-2">
              Select image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="block w-full rounded-lg border border-blue-200 px-3 py-2 text-sm text-gray-700 file:mr-3 file:rounded file:border-0 file:bg-blue file:px-3 file:py-1.5 file:text-white hover:file:bg-blue-700"
            />

            {uploadError && (
              <p className="text-sm text-red-600 mt-3">{uploadError}</p>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="mt-5 w-full rounded-lg bg-blue px-4 py-2.5 text-white font-medium hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? 'Uploading...' : 'Submit'}
            </button>
          </div>
        </div>
      )}

      {/* Welcome Text */}
      <Textbox label={`Welcome back, ${name}!`} centerAlignment={true} />
    </div>
  );
}