'use client';

import React, { useState, useEffect } from 'react';
import { IconMenu2 } from '@tabler/icons-react';
import {
  IconHome,
  IconPaw,
  IconSettings,
  IconQuestionMark,
} from '@tabler/icons-react';
import { Navigation } from './Navigation';
import { SidebarHeader } from './SidebarHeader';

const isMobile = () => {
  if (typeof window === 'undefined') return false;
  const width = window.innerWidth;
  return width <= 1024;
};

export const Sidebar = () => {
  const [open, setOpen] = useState(isMobile() ? true : false);

  const memoizedSidebarLinks = React.useMemo(
    () => [
      {
        imgURL: IconHome,
        route: '/',
        label: 'Home',
      },
      {
        imgURL: IconQuestionMark,
        route: '/quiz',
        label: 'Quiz',
      },
      {
        imgURL: IconPaw,
        route: '/characters',
        label: 'Characters',
      },
      {
        imgURL: IconSettings,
        route: '/settings',
        label: 'Settings',
      },
    ],
    []
  );

  useEffect(() => {
    const handleResize = () => {
      setOpen(!isMobile());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex-shrink-0 lg:w-[18rem] bg-zinc-100 dark:bg-[#333] h-full lg:static fixed z-40">
      <div
        className={`lg:flex lg:flex-col lg:px-6 lg:py-6 h-full ${
          open ? 'flex flex-col px-6 py-6' : 'hidden'
        }`}
      >
        <div className="flex flex-col items-center">
          <SidebarHeader />
        </div>
        <Navigation setOpen={setOpen} sidebarLinks={memoizedSidebarLinks} />
      </div>

      {/* Button to toggle the sidebar only visible on mobile */}
      <button
        className="fixed lg:hidden top-4 right-4 h-[45px] w-[45px] border border-neutral-200 rounded-full backdrop-blur-sm flex items-center justify-center z-50"
        onClick={() => setOpen(!open)}
      >
        <IconMenu2 className="h-[35px] w-[35px] text-secondary" />
      </button>
    </div>
  );
};
