'use client';

import { useState } from 'react';
import Textbox from '@/_components/textbox-component/textbox';
import Button from '@/_components/button-component/button';
import { useRouter } from 'next/navigation';
import { useUser } from '@auth0/nextjs-auth0';
import ResponsiveImage from '@/_components/Responsive-Image-Component/responsive-image';

export default function DisclaimerPage() {
  const router = useRouter();
  const { user } = useUser();
  const [showAdditionalTextbox, setShowAdditionalTextbox] = useState(false);

  const handleButtonClick = () => {
    if (user) {
      router.push('/quiz');
      return null;
    }
    setShowAdditionalTextbox(true);
  };

  function saveQuizURLtoSessionStorage() {
    sessionStorage.setItem('url', '/quiz');
    router.push('/auth/login');
  }

  return (
    <>
      <ResponsiveImage>
        <div className="h-screen flex items-center justify-center">
          <div className="lg:w-2/3 sm:w-full">
            {!showAdditionalTextbox && (
              <>
                <div className="relative lg:w-2/3 sm:w-full justify-center mx-auto">
                  <Textbox
                    label="Disclaimer"

                    secondaryLabel={
                      <div  className="text-sm leading-tight mt-1">
                        This website is strictly for Canadian users and is for
                        educational and entertainment purposes only. We are not
                        financial advisors, and the content should not be
                        considered professional financial advice. The content is
                        designed to be simple and may not meet everyone's
                        financial needs or goals. Please note that the website
                        is still in development, and content may change. Consult
                        a certified financial professional before making any
                        financial decisions.
                      </div>
                    }
                    paddingBetween={false}
                    centerAlignment={true}
                  />
                  <div className="mt-4 flex flex-col">
                    <Button label="I understand" onClick={handleButtonClick} />
                  </div>
                </div>
              </>
            )}

            {showAdditionalTextbox && (
              <>
                <div className="relative lg:w-2/3 sm:w-full justify-center mx-auto">
                  <Textbox
                    label="Create a profile or sign in to save your progress"
                    centerAlignment={true}
                  />

                  <div className="mt-4">
                    <div className="flex flex-col space-y-2">
                      <Button
                        label="Continue without saving"
                        onClick={() => router.push('/quiz')}
                      />
                      <Button
                        label="Create an account or sign in"
                        onClick={() => saveQuizURLtoSessionStorage()}
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </ResponsiveImage>
    </>
  );
}
