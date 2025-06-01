'use client';

import Textbox from '@/_components/Textbox-Component/Textbox';
import { useRouter } from 'next/navigation';
import ResponsiveImage from '@/_components/Responsive-Image-Component/ResponsiveImage';
import Dashboard from '@/_components/Dashboard-Component/Dashboard-Component';

export default function DisclaimerPage() {
  const router = useRouter();

  return (
    <>
      <div className="h-screen flex justify-center bg-dashboard_gray_bg">
        <div className="w-full m-8 bg-dashboard_blue_bg">
          <Dashboard />
        </div>
      </div>
    </>
  );
}
