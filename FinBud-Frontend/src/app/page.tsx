"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "@/_components/Back-Button-Component/Button";
import Textbox from "@/_components/Textbox-Component/Textbox";
import { useRouter } from "next/navigation";
import Loader from "@/_components/Loader-Component/Loader";
import { useUser } from "@auth0/nextjs-auth0/client";
import { TypeAnimation } from "react-type-animation";

const HomePage: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  return (
    <>
      <meta
        name="google-site-verification"
        content="cop3EVn1MpFPTHW6UDGB15t1icUAzdZrAKh5yt8d5p8"
      />
      {loading && <Loader />}
      <div className="h-screen flex items-center justify-center">
        {/* Parent container for image and text */}
        <div
          className={`flex flex-col-reverse sm:flex-row items-center ${
            loading ? "hidden" : "" // If isLoading, hide everything, else show loading screen
          }`}
        >
          {/* Image container */}
          <div className="sm:w-1/3 flex justify-center sm:justify-start sm:mt-64">
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

          {/* Both text boxes */}
          <div className="sm:w-2/3">
            <Textbox
              label={
                <TypeAnimation
                  sequence={[
                    "Hi! I’m Fin, your Virtual Finance Buddy. I’m here to guide you through every stage of your personal finance journey.",
                    1000,
                  ]}
                  wrapper="p"
                  speed={75}
                  cursor={false}
                  repeat={0}
                  preRenderFirstString={false}
                />
              }
              paddingBetween
              chatBubble
            />

            <div className="mt-8 flex justify-center ">
              <Button
                label="Start My Journey"
                onClick={() => router.push("/quiz")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
