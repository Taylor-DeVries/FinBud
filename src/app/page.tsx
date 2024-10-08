"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Textbox from "@/components/Textbox";

const HomePage: React.FC = () => {
    const navigateToQuiz = () => {
        window.location.href = "/quiz";
    };

    return (
        <div className="h-screen flex items-center justify-center">
            {/* Parent container for image and text */}
            <div className="flex flex-col-reverse sm:flex-row items-center ">
                {/* Image container */}
                <div className="sm:w-1/3 flex justify-center sm:justify-start sm:mt-64">
                    <Image
                        src="/images/Fin.png"
                        alt="Logo"
                        width={300}
                        height={300}
                        className="w-auto h-auto"
                        unoptimized={true}
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
                            onClick={navigateToQuiz}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
