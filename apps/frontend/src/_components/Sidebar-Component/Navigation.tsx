'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { IconUser } from '@tabler/icons-react';
import { useUser } from '@auth0/nextjs-auth0/client';

interface SidebarLink {
  imgURL: React.ComponentType;
  route: string;
  label: string;
}

export const Navigation = ({
  setOpen,
  sidebarLinks,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sidebarLinks: SidebarLink[];
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
