import React from 'react';
import blogbanner from "../assets/BlogBanner2.png";

const Banner = () => {
    return (
        <div
            className="relative Banner flex items-start"
            style={{
                backgroundImage: `url(${blogbanner})`,
            }}
        >
            {/* Content */}
            <div className="relative container mx-auto py-4  text-white flex">
                <div className="max-w-full  ">
                    <h1 className="fw-bold text-4xl ml-44 md:text-5xl ">
                    Explore Divine Knowledge and Spiritual Insights                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;
