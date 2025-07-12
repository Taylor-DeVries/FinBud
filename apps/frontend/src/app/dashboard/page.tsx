// 'use client';

import Textbox from '@/_components/Textbox-Component/Textbox';
import { useRouter } from 'next/navigation';
import ResponsiveImage from '@/_components/Responsive-Image-Component/ResponsiveImage';
import Dashboard from '@/_components/Dashboard-Component/Dashboard-Component';
import historystate from '@/_data/types/types';
import { getHistoryFunction } from '@/_utils/quiz-functions';
import { getSession } from '@auth0/nextjs-auth0';

export default async function Page() {
  const session = await getSession();

  if (session) {
    const data = await getHistoryFunction();

    return (
      <>
        <div className="h-screen flex justify-center bg-light_blue_infoPage dark:bg-[#444]">
          <div className="w-full m-8 bg-dashboard_blue_bg dark:bg-dark_blue rounded-xl">
            <Dashboard historyData={data} />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="h-screen flex justify-center bg-light_blue_infoPage dark:bg-[#444]">
        <div className="w-full m-8 bg-dashboard_blue_bg dark:bg-dark_blue rounded-xl">
          pls log in
        </div>
      </div>
    );
  }
}
