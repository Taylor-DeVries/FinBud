'use client';

import { updateUserName } from '@/_lib/_services/profile-functions';
import { useState } from 'react';

interface ProfileNameProps {
  name: string;
}

export default function ProfileName({ name }: ProfileNameProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  const handleSave = () => {
    updateUserName(editedName);
    setIsEditing(false); // Exit editing mode after saving
  };

  const openEditingMode = () => {
    setIsEditing(true);
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
          <h4>
            {editedName}
          </h4>
          {isEditing ? (
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                className="text-lg font-semibold text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded px-2 py-1"
              />
              <button
                onClick={handleSave}
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {editedName}
              </p>
              <button
                onClick={openEditingMode}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-blue-600"
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
