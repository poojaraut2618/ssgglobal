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
            <div className="absolute inset-0 bg-purple-800 opacity-40"></div>

            {/* Content */}
            <div className="relative container mx-auto px-6 text-white flex justify-end">
                <div className="max-w-md">
                    <h1 className="fw-bold text-4xl md:text-5xl max-w-md">
                        Discover the sacred ritual that blesses every aspect of your life with the divine grace of the eight forms of Goddess Lakshmi.
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;
