'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isInfoPage = pathname.startsWith('/info');

  // useEffect(() => {
  //   const currentTheme = localStorage.getItem('theme');
  //   if (currentTheme === 'dark') {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  // }, []);

  return (
    <p></p>
  );
}
