import React from 'react'
import bannerImage from "../assets/ContactBanner.png";

const Banner = () => {
    return (
        <>
            <div
      className="relative bg-cover bg-center h-[520px] flex items-center"
      style={{
        backgroundImage: `url(${bannerImage})`, 
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

      {/* Content */}
      <div className="relative container mx-auto px-6 text-white">
        <h1 className="fw-bold text-4xl md:text-5xl max-w-md">
        We’re here to assist you with all your spiritual needs. Reach out to us anytime!
        </h1>
        
       
      </div>
    </div>
        </>
    )
}

export default Banner;