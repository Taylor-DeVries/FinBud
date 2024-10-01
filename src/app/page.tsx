"use client";

import React from "react";
import Image from "next/image";
import "./homeStyles.css";

const HomePage: React.FC = () => {
    const navigateToQuiz = () => {
        window.location.href = "/quiz";
    };

    return (
        <div className="container sm:mx-auto px-4 h-screen flex items-center justify-center">
            {/* Parent container for image and text */}
            <div className="flex flex-col-reverse sm:flex-row items-center space-y-0 mt-8 sm:mt-8 min-h-[50vh] w-full">
                {/* Image container */}
                <div className="sm:w-1/3 flex justify-center sm:justify-start sm:mt-64">
                    <Image
                        src="/images/Fin.png"
                        alt="Logo"
                        width={300}
                        height={300}
                        className="w-auto h-auto"
                    />
                </div>

                {/* Text container */}
                <div className="sm:w-2/3 text-left ">
                    <div className="sm:chat sm:chat-start sm:mt-[-4rem] sm:ml-0 ml-12">
                        <div className="chat-bubble bg-[#5298b8] text-white sm:p-12 px-10 py-4 rounded-[64px]">
                            <div className="font-bold text-2xl sm:text-3xl ">
                                Hi!👋 I’m Fin, your Virtual Finance Buddy.
                            </div>
                            <div className="font-semibold text-lg sm:text-xl mt-4">
                                I’m here to guide you through every stage of
                                your personal finance journey.
                            </div>
                        </div>
                    </div>

                    {/* Button */}
                    <div className="mt-8 flex justify-center ">
                        <button
                            className="bg-[#5298b8] text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary"
                            onClick={navigateToQuiz}
                        >
                            Start My Journey!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
