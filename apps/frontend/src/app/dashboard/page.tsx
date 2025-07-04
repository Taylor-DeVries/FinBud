'use client';

import Textbox from '@/_components/Textbox-Component/Textbox';
import { useRouter } from 'next/navigation';
import ResponsiveImage from '@/_components/Responsive-Image-Component/ResponsiveImage';
import Dashboard from '@/_components/Dashboard-Component/Dashboard-Component';
import historystate from '@/_data/types/types';

export default function DisclaimerPage() {
  const router = useRouter();

  const historyArray: number[] = JSON.parse(
    sessionStorage.getItem('userHistory') || '[]'
  ) as number[];

  return (
    <>
      <div className="h-screen flex justify-center bg-light_blue_infoPage dark:bg-[#444]">
        <div className="w-full m-8 bg-dashboard_blue_bg dark:bg-dark_blue rounded-xl">
          <Dashboard historyArray={historyArray} />
        </div>
      </div>
    </>
  );
}
