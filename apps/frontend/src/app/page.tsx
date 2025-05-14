import React from 'react';
import Image from 'next/image';
import Textbox from '@/_components/Textbox-Component/Textbox';
import ServerButton from '@/_components/Button-Component/ServerButton';
import JourneyLabel from '@/_components/journey-button-label-component/JourneyLabel';
import ResponsiveImage from '@/_components/Responsive-Image-Component/ResponsiveImage';
import ClientTypeAnimation from '@/_components/TypeAnimation-Component/ClientTypeAnimation';

const HomePage = async () => {
  let journeyLabel = "Start My Journey";
  try {
    journeyLabel = await JourneyLabel();
  } catch (error) {
    console.error('Error getting journey label:', error);
  }
  
  return (
    <ResponsiveImage>
      <div className="h-screen flex items-center justify-center">
        {/* Parent container for image and text */}
        <div className="flex flex-col-reverse sm:flex-row items-center">
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
            />
          </div>

          {/* Text Area */}
          <div className="sm:w-2/3 sm:mr-10 text-left rounded-xl mt-12">
            <Textbox
              label={
                <ClientTypeAnimation
                  sequence={[
                    "Hi! I'm Fin, your Virtual Finance Buddy. I'm here to guide you through every stage of your personal finance journey.",
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
              <ServerButton href="/disclaimer" label={journeyLabel} />
            </div>
          </div>
        </div>
      </div>
    </ResponsiveImage>
  );
};

export default HomePage;
