'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { IconMenu2, IconUser } from '@tabler/icons-react';
import { sidebarLinks } from '@/_data/constants/SidebarLinks';
import { useUser } from '@auth0/nextjs-auth0/client';
import { FaMoon, FaSun } from 'react-icons/fa';

const isMobile = () => {
  if (typeof window === 'undefined') return false;
  const width = window.innerWidth;
  return width <= 1024;
};

export const Sidebar = () => {
  const [open, setOpen] = useState(isMobile() ? true : false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setOpen(!isMobile());
    };

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

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
        <Navigation setOpen={setOpen} />

        {/* Dark Mode Toggle */}
        <div className="mt-4 flex justify-center">
          <button
            onClick={toggleDarkMode}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
            <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
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

export const Navigation = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  const { user, error, isLoading } = useUser();

  if (isLoading) return <></>;
  if (error) return <div>{error.message}</div>;

  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex flex-col space-y-1 h-full">
      <div className="flex flex-col space-y-1 my-16 relative z-[100]">
        {sidebarLinks.map((link) => (
          <Link
            key={link.route}
            href={link.route}
            className={twMerge(
              'text-slate-500 dark:text-blue hover:text-blue transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md ',
              isActive(link.route) &&
                'bg-slate-50 dark:bg-blue shadow-slate-300 dark:shadow-slate-800 shadow-xl text-blue dark:text-[#333]'
            )}
          >
            <div className="flex flex-row my-2">
              <div
                className={twMerge(
                  'h-4 w-4 flex-shrink-0 text-center',
                  isActive(link.route) && 'text-blue dark:text-[#333]'
                )}
              >
                <link.imgURL />
              </div>
              <span className="ml-4 ">{link.label}</span>
            </div>
          </Link>
        ))}

        {/* Creating the sign up link only if user is not logged in */}
        {user ? (
          // eslint-disable-next-line @next/next/no-html-link-for-pages
          <a
            href="/api/auth/logout?federated=''"
            className={twMerge(
              'text-slate-500 dark:text-blue hover:text-blue transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-md'
            )}
          >
            <div className="flex flex-row my-2">
              <div className="flex flex-row">
                <Image
                  src={user.picture}
                  width={30}
                  height={30}
                  className="rounded-full"
                  alt={''}
                ></Image>

                <span className="ml-2 mt-2">Sign out</span>
              </div>
            </div>
          </a>
        ) : (
          <Link
            href="/api/auth/login"
            className={twMerge(
              'text-slate-500 dark:text-blue hover:text-blue transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-md'
            )}
            onClick={() =>
              sessionStorage.setItem('url', window.location.href.toString())
            }
          >
            <div className="flex flex-row my-2">
              <div className="flex flex-row">
                <IconUser />
                <span className="ml-2">Sign in</span>
              </div>
            </div>
          </Link>
        )}
      </div>
      <div className="flex flex-row text-slate-400 text-sm space-x-2 justify-center items-center mt-auto">
        <Link href="/info/about">
          <h1 className="hover:text-blue hover:cursor-pointer">About</h1>
        </Link>
        <Link href="/info/contact">
          <h1 className="hover:text-blue hover:cursor-pointer">Contact</h1>
        </Link>
        <Link href="/info/disclaimer">
          <h1 className="hover:text-blue hover:cursor-pointer">Disclaimer</h1>
        </Link>
      </div>
    </div>
  );
};

const SidebarHeader = () => {
  const router = useRouter();
  return (
    <div className="flex space-x-2">
      <Image
        src="/images/finLogo.webp"
        alt="Avatar"
        height="150"
        width="150"
        className="object-cover object-top flex-shrink-0 hover:cursor-pointer"
        onClick={() => router.push('/')}
        priority
        unoptimized
      />
    </div>
  );
};
