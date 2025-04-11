'use client';

import { usePathname } from 'next/navigation';
import { Sidebar } from '@/_components/Sidebar-Component/Sidebar';
import ResponsiveImage from '@/_components/Responsive-Image-Component/ResponsiveImage';

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isInfoPage = pathname.startsWith('/info');

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
