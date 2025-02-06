import React from 'react';
import bannerImage from "../assets/Banner.jpg";

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
            <div className="relative container mx-auto px-6 text-white flex justify-start">
                <div className="max-w-md">
                    <h1 className="fw-bold text-4xl md:text-5xl  max-w-md ">
                    Moments of Swamiji's Presence as a Special Guest at Prestigious Events                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;
