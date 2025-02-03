import React from 'react'
import bannerImage from "../assets/banner.png";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <>
            <div
      className="relative bg-cover bg-center h-[520px] flex items-center"
      style={{
        backgroundImage: `url(${bannerImage})`, // Replace with your image path
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

      {/* Content */}
      <div className="relative container mx-auto px-6 text-white">
        <h1 className="fw-bold text-4xl md:text-5xl max-w-md">
        Experience Divine Blessings with the Sacred Ashtalakshmi Puja
        </h1>
        
        <Link to="/about-puja">
        <button className="mt-4 primary-btn font-bold py-2 px-6 transition">
          Know More
        </button>
        </Link>
      </div>
    </div>
        </>
    )
}

export default Banner;