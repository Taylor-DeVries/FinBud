'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { TypeAnimation } from 'react-type-animation';
import Textbox from '@/_components/textbox-component/textbox';
import Loader from '@/_components/loader-component/loader';
import Button from '@/_components/button-component/button';
import { redirect } from 'next/navigation';
import { isLoggedIn } from '@/_lib/_services/login-helper';
import Title from '@/_lib/_services/title-helper';

import ResponsiveImage from '@/_components/Responsive-Image-Component/responsive-image';

const HomePage: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  function redirectAfterLogin() {
    if (sessionStorage?.getItem('url')) {
      var redirectURL = sessionStorage.getItem('url').toString();
      sessionStorage.removeItem('url');
      redirect(redirectURL);
    }
  }

  useEffect(() => {
    redirectAfterLogin();
  });

  return (
    <>
      <ResponsiveImage>
        {loading && <Loader />}
        <div className="h-screen flex items-center justify-center">
          {/* Parent container for image and text */}
          <div
            className={`flex flex-col-reverse sm:flex-row items-center ${
              loading ? 'hidden' : '' // If isLoading, hide everything, else show loading screen
            }`}
          >
            {/* Image container */}
            <div className="sm:w-1/3 flex justify-center sm:justify-start sm:mt-64 pt-10">
              <Image
                src="/images/Fin.png"
                alt="Logo"
                width={300}
                height={300}
                className="w-auto h-auto"
                priority
                unoptimized
                onLoad={() => setLoading(false)}
              />
            </div>

            {/* Text Area */}
            <div className="sm:w-2/3 sm:mr-10 text-left rounded-xl mt-12">
              <div className="flex flex-col items-center w-fit mx-auto">
                <Textbox label={<Title />} chatBubble />

                <div className="mt-4">
                  <Button
                    label={
                      isLoggedIn() ? 'Resume My Journey' : 'Start My Journey'
                    }
                    onClick={() => router.push('/disclaimer')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ResponsiveImage>
    </>
  );
};

export default HomePage;
