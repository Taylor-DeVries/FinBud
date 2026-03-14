'use client';

import { updateUserName } from '@/_lib/_services/profile-functions';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { GoPencil } from 'react-icons/go';

interface ProfileNameProps {
  name: string;
  onNameUpdated: (newName: string) => void;
}

export default function ProfileName({ name, onNameUpdated }: ProfileNameProps) {
  const [editedName, setEditedName] = useState(name);
  const [draftName, setDraftName] = useState(name);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [nameError, setNameError] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setEditedName(name);
    if (!isDialogOpen) {
      setDraftName(name);
    }
  }, [name, isDialogOpen]);

  const handleSave = async () => {
    const trimmedName = draftName.trim();

    if (!trimmedName) {
      setNameError('Please enter a name before submitting.');
      return;
    }

    setIsSubmitting(true);
    setNameError(null);

    try {
      await updateUserName(trimmedName);
      setEditedName(trimmedName);
      onNameUpdated(trimmedName);
      setIsDialogOpen(false);
    } catch {
      setNameError('Unable to update name. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openEditingMode = () => {
    setDraftName(editedName);
    setNameError(null);
    setIsDialogOpen(true);
  };

  return (
    <div className="bg-white/95 dark:bg-[#333] rounded-xl p-6 shadow-lg backdrop-blur text-gray-900 dark:text-gray-100">
      <div className="flex items-center space-x-3">
        {/* Icon */}
        <div className="w-10 h-10 bg-blue rounded-full flex items-center justify-center">
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

        {/* Content */}
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Full Name
          </h3>
          <div className="flex items-center justify-between gap-3 mt-1">
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">
              {editedName}
            </p>
            <button
              type="button"
              aria-label="Edit full name"
              onClick={openEditingMode}
              className="h-8 w-8 rounded-full bg-blue text-white shadow-sm hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <GoPencil size={14} />
            </button>
          </div>
        </div>
      </div>

      {isMounted && isDialogOpen &&
        createPortal(
          <div className="fixed inset-0 lg:left-[18rem] z-50 flex items-center justify-center bg-black/40 px-4">
            <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-2xl border border-blue-100">
              <button
                type="button"
                aria-label="Close name dialog"
                onClick={() => {
                  setIsDialogOpen(false);
                  setNameError(null);
                  setDraftName(editedName);
                }}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl leading-none"
              >
                ×
              </button>

              <h2 className="text-xl font-semibold text-blue-900 mb-2">Update Full Name</h2>
              <p className="text-sm text-gray-600 mb-4">
                Enter the name you want to use on your profile.
              </p>

              <label className="block text-left text-sm font-medium text-blue-900 mb-2">
                Full name
              </label>
              <input
                type="text"
                value={draftName}
                onChange={(e) => setDraftName(e.target.value)}
                className="block w-full rounded-lg border border-blue-200 px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="Enter your full name"
              />

              {nameError && <p className="text-sm text-red-600 mt-3">{nameError}</p>}

              <button
                type="button"
                onClick={handleSave}
                disabled={isSubmitting}
                className="mt-5 w-full rounded-lg bg-blue px-4 py-2.5 text-white font-medium hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Saving...' : 'Submit'}
              </button>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
