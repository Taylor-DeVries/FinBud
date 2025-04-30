'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { TypeAnimation } from 'react-type-animation';
import Textbox from '@/_components/Textbox-Component/Textbox';
import Loader from '@/_components/Loader-Component/Loader';
import Button from '@/_components/Button-Component/Button';
import { redirect } from 'next/navigation';
import JourneyLabel from '@/_components/journey-button-label-component/JourneyButtonLabel';

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
              src="/images/Fin.webp"
              alt="Logo"
              width={300}
              height={300}
              className="w-auto h-auto"
              priority
              unoptimized
              onLoadingComplete={() => setLoading(false)}
            />
          </div>

          {/* Text Area */}
          <div className="sm:w-2/3 sm:mr-10 text-left rounded-xl mt-12">
            <Textbox
              label={
                <TypeAnimation
                  sequence={[
                    'Hi! I’m Fin, your Virtual Finance Buddy. I’m here to guide you through every stage of your personal finance journey.',
                    1000,
                  ]}
                  wrapper="p"
                  speed={75}
                  cursor={false}
                  repeat={0}
                  preRenderFirstString={false}
                />
              }
              chatBubble
            />

            <div className="mt-4 flex justify-center">
              <Button
                label={JourneyLabel()}
                onClick={() => router.push('/disclaimer')}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
