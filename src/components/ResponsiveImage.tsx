import React, { ReactNode } from "react";

interface ResponsiveImageProps {
    children: ReactNode;
}

const ResponsiveImage = ({ children }: ResponsiveImageProps) => {
    return (
        <div className="relative w-full h-full max-w-[2520px] sm:mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
            {/* Background image for xl screens */}
            <div className="hidden xl:block absolute inset-0 bg-[url('/images/bg-xl.png')] bg-cover bg-center z-0 opacity-60 "></div>

            {/* Background image for lg screens */}
            <div className="hidden lg:block xl:hidden absolute inset-0 bg-[url('/images/bg-lg.png')] bg-cover bg-center z-0 opacity-60 "></div>

            {/* Background image for md screens */}
            <div className="hidden md:block lg:hidden absolute inset-0 bg-[url('/images/bg-lg.png')] bg-cover bg-center z-0 opacity-60 "></div>

            {/* Background image for small screens */}
            <div className="block sm:block md:hidden absolute inset-0 bg-[url('/images/bg-sm1.png')] bg-cover bg-center z-0 opacity-60 "></div>

            {/* Content goes on top of the background */}
            <div className="relative z-10 px-6 sm:px-10 md:px-14 lg:px-18 xl:px-22">
                {children}
            </div>
        </div>
    );
};

export default ResponsiveImage;
