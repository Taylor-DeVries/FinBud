'use client';

export default function ProfileSignOutButton() {
  return (
    <div className="mt-8 text-center">
      <a
        href="/api/auth/logout"
        className="inline-block text-red-500 hover:text-red-600 font-medium transition-colors duration-200"
      >
        Sign Out
      </a>
    </div>
  );
}
