import React from 'react';
import blogbanner from "../assets/BlogBanner.png";

const Banner = () => {
    return (
        <div
            className="relative bg-cover bg-center h-[450px] flex items-start"
            style={{
                backgroundImage: `url(${blogbanner})`,
            }}
        >
            {/* Content */}
            <div className="relative container mx-auto py-4  text-white flex">
                <div className="max-w-full  ">
                    <h1 className="font-bold text-2xl ml-44 md:text-3xl">
                    Explore Divine Knowledge and Spiritual Insights                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;
