'use client';

import { usePathname } from 'next/navigation';
import { Sidebar } from '@/_components/Sidebar-Component/Sidebar';
import ResponsiveImage from '@/_components/Responsive-Image-Component/ResponsiveImage';
import { useEffect } from 'react';

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isInfoPage = pathname.startsWith('/info');

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar />
      {!isInfoPage ? (
        <ResponsiveImage>
          <div className="flex-1">{children}</div>
        </ResponsiveImage>
      ) : (
        <div className="flex-1 bg-light_blue_infoPage overflow-y-auto">
          {children}
        </div>
      )}
    </div>
  );
}
