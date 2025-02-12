"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { IconMenu2, IconUser } from "@tabler/icons-react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { sidebarLinks } from "@/_data/constants/SidebarLinks";

// import {
//     SignedIn,
//     SignedOut,
//     SignInButton,
//     UserButton,
//     useUser,
// } from "@clerk/nextjs";

const isMobile = () => {
  if (typeof window === "undefined") return false;
  const width = window.innerWidth;
  return width <= 1024;
};

export const Sidebar = () => {
  const [open, setOpen] = useState(isMobile() ? true : false);

  // Set open/close state based on window resize to handle mobile
  useEffect(() => {
    const handleResize = () => {
      setOpen(!isMobile());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex-shrink-0 lg:w-[18rem] bg-zinc-100 h-full lg:static fixed z-40">
      <div
        className={`lg:flex lg:flex-col lg:px-6 lg:py-6 lg:h-full ${
          open ? "flex flex-col px-6 py-6" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center">
          <SidebarHeader />
        </div>
        <Navigation setOpen={setOpen} />
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
    <div className="flex flex-col space-y-1">
      <div className="flex flex-col space-y-1 my-16 relative z-[100]">
        {sidebarLinks.map((link) => (
          // Creating the link for every sidebar item
          <Link
            key={link.route}
            href={link.route}
            className={twMerge(
              "text-slate-500 hover:text-blue transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md ",
              isActive(link.route) &&
                "bg-slate-50 shadow-slate-300 shadow-xl text-blue"
            )}
          >
            <div className="flex flex-row my-2">
              <div
                className={twMerge(
                  "h-4 w-4 flex-shrink-0 text-center",
                  isActive(link.route) && "text-blue"
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
          <a
            href="/api/auth/logout?federated=''"
            className={twMerge(
              "text-slate-500 hover:text-blue transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-md"
            )}
          >
            <div className="flex flex-row my-2">
              <div className="flex flex-row">
                <Image
                  src={user.picture}
                  width={30}
                  height={30}
                  className="rounded-full"
                  alt={""}
                ></Image>

                <span className="ml-2 mt-2">Sign out</span>
              </div>
            </div>
          </a>
        ) : (
          <Link
            href="/api/auth/login"
            className={twMerge(
              "text-slate-500 hover:text-blue transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-md"
            )}
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
        onClick={() => router.push("/")}
        priority
        unoptimized
      />
    </div>
  );
};
