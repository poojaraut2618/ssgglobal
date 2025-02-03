import React from 'react';
import bannerImage from "../assets/Puja2.jpg";

const Banner = () => {
    return (
        <div
            className="relative bg-cover bg-center h-[520px] flex items-center opacity-70"
            style={{
                backgroundImage: `url(${bannerImage})`,
            }}
        >
            {/* Content */}
            <div className="relative container mx-auto px-6 text-white flex justify-end">
                <div className="max-w-md  ">
                    <h1 className="font-bold text-2xl ml-44 md:text-3xl">
                    At SSG Global, we bring you closer to the divine through authentic spiritual practices.
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;
