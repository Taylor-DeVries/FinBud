"use client";
import { SyncLoader } from "react-spinners";
import ResponsiveImage from "../Responsive-Image-Component/ResponsiveImage";

const Loader = () => {
    return (
        <ResponsiveImage>
            <div className="h-[70vh] flex flex-col justify-center items-center">
                <SyncLoader size={25} color="#5298b8" />
            </div>
        </ResponsiveImage>
    );
};

export default Loader;
