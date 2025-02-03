import React from 'react';
import bannerImage from "../assets/About-pujaBanner.png";

const Banner = () => {
    return (
        <div
            className="relative bg-cover bg-center h-[450px] flex items-center"
            style={{
                backgroundImage: `url(${bannerImage})`,
            }}
        >
            {/* Yellow overlay */}
            <div className="absolute inset-0 bg-yellow-500 opacity-30"></div>

            {/* Content */}
            <div className="relative container mx-auto px-6 text-white flex justify-end">
                <div className="max-w-md">
                    <h1 className="font-bold text-2xl ml-44 md:text-3xl">
                        Discover the sacred ritual that blesses every aspect of your life with the divine grace of the eight forms of Goddess Lakshmi.
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;
