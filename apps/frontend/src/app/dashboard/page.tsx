// 'use client';

import Textbox from '@/_components/Textbox-Component/Textbox';
import { useRouter } from 'next/navigation';
import ResponsiveImage from '@/_components/Responsive-Image-Component/ResponsiveImage';
import Dashboard from '@/_components/Dashboard-Component/Dashboard-Component';
import historystate from '@/_data/types/types';
import { getHistoryFunction } from '@/_utils/quiz-functions';
import { getSession } from '@auth0/nextjs-auth0';
import Image from 'next/image';
import { ThemeProvider } from '@/app/settings/providers';

export default async function Page() {
  const session = await getSession();

  if (session) {
    const data = await getHistoryFunction();

    return (
      <>
        <ThemeProvider>
          <div className="h-screen flex justify-center bg-light_blue_infoPage dark:bg-[#444] ">
            <div className="w-full m-8 bg-dashboard_blue_bg dark:bg-dark_blue rounded-xl">
              <Dashboard historyData={data} />
            </div>
          </div>
        </ThemeProvider>
      </>
    );
  } else {
    return (
      <ThemeProvider>
        <div className="h-screen flex justify-center bg-light_blue_infoPage dark:bg-[#444]">
          <div className="w-full m-8 bg-dashboard_blue_bg dark:bg-dark_blue rounded-xl  flex flex-col items-center justify-center gap-y-5 text-3xl text-center">
            <a className="underline" href="/api/auth/login">
              Sign In to view your Dashboard
            </a>
            <Image
              src="/images/Fin.webp"
              alt="Fin"
              width={400}
              height={400}
              className="w-[300px] h-auto sm:w-[300px] sm:h-auto object-contain"
              unoptimized={true}
            />
          </div>
        </div>
      </ThemeProvider>
    );
  }
}
