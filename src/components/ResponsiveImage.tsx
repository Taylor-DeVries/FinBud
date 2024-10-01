import React, { ReactNode } from "react";

interface ResponsiveImageProps {
    children: ReactNode;
}

const ResponsiveImage = ({ children }: ResponsiveImageProps) => {
    return (
        <div className="relative w-full h-full ">
            {/* Background image for xl screens */}
            <div className="hidden xl:block absolute inset-0 bg-[url('/images/bg-xl.png')] bg-cover bg-center z-0 opacity-60"></div>

            {/* Background image for lg screens */}
            <div className="hidden lg:block xl:hidden absolute inset-0 bg-[url('/images/bg-lg.png')] bg-cover bg-center z-0 opacity-60 mb-"></div>

            {/* Background image for md screens */}
            <div className="hidden md:block lg:hidden absolute inset-0 bg-[url('/images/bg-lg.png')] bg-cover bg-center z-0 opacity-60"></div>

            {/* Background image for small screens */}
            <div className="block sm:block md:hidden absolute inset-0 bg-[url('/images/bg-sm1.png')] bg-cover bg-center z-0 opacity-60"></div>

            {/* Content goes on top of the background */}
            <div className="relative z-10">{children}</div>
        </div>
    );
};

export default ResponsiveImage;
