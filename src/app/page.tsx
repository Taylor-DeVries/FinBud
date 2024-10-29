"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Textbox from "@/components/Textbox";
import { useRouter } from "next/navigation";

const HomePage: React.FC = () => {
    const router = useRouter();

    return (
        <div className="h-screen flex items-center sm:items-start ">
            {/* Parent container for image and text */}
            <div className="flex flex-col-reverse sm:flex-row sm:mt-48">
                {/* Image container */}
                <div className="sm:w-1/3 flex sm:mt-0">
                    <Image
                        src="/images/Fin.png"
                        alt="Logo"
                        width={300}
                        height={300}
                        className="w-auto h-auto"
                        priority
                        unoptimized
                    />
                </div>

                {/* Both text boxes */}
                <div className="sm:w-2/3">
                    <Textbox
                        label="Hi!👋 I’m Fin, your Virtual Finance Buddy."
                        paddingBetween
                        secondaryLabel="I’m here to guide you through every stage of your personal finance journey."
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
    );
};

export default HomePage;
