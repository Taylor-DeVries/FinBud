'use client';

import { useState } from 'react';
import Textbox from '@/_components/Textbox-Component/Textbox';
import Button from '@/_components/Back-Button-Component/Button';
import { useRouter } from 'next/navigation';
import { useUser } from '@auth0/nextjs-auth0/client';

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

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="lg:w-2/3 sm:w-full">
          {!showAdditionalTextbox && (
            <>
              <Textbox
                label="Disclaimer"
                secondaryLabel={
                  <div className="max-h-48 overflow-y-scroll">
                    This website is strictly for Canadian users and is for
                    educational and entertainment purposes only. We are not
                    financial advisors, and the content should not be considered
                    professional financial advice. The content is designed to be
                    simple and may not meet everyone's financial needs or goals.
                    Please note that the website is still in development, and
                    content may change. Consult a certified financial
                    professional before making any financial decisions.
                  </div>
                }
                paddingBetween={true}
                centerAlignment={true}
              />

              <div className="mt-8 flex justify-center">
                <Button label="I understand" onClick={handleButtonClick} />
              </div>
            </>
          )}

          {showAdditionalTextbox && (
            <>
              <div className="relative lg:w-2/3 sm:w-full justify-center mx-auto">
                <Textbox
                  label="Create a profile/Sign in to save your progress"
                  centerAlignment={true}
                />

                <div className="mt-4">
                  <div className="flex flex-col space-y-2">
                    <Button
                      label="Continue without saving"
                      onClick={() => router.push('/quiz')}
                    />
                    <Button
                      label="Create an account/Sign in"
                      onClick={() => router.push('/api/auth/login')}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
