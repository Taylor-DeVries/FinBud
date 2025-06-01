'use client';

import Textbox from '@/_components/Textbox-Component/Textbox';
import { useRouter } from 'next/navigation';
import ResponsiveImage from '@/_components/Responsive-Image-Component/ResponsiveImage';
import Dashboard from '@/_components/Dashboard-Component/Dashboard-Component';

export default function DisclaimerPage() {
  const router = useRouter();

  return (
    <>
      <ResponsiveImage>
        <div className="h-screen flex justify-center">
          <div className="w-full my-10">
            <div> </div>
            <Dashboard />
          </div>
        </div>
      </ResponsiveImage>
    </>
  );
}
