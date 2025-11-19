"use client";
import { SyncLoader } from "react-spinners";
import ResponsiveImage from "../responsive-image-component/responsive-image";

const Loader = () => {
    return (

        <div className="h-[70vh] flex flex-col justify-center items-center bg-transparent">
            <SyncLoader size={25} color="#5298b8" />
        </div>

    );
};

export default Loader;
