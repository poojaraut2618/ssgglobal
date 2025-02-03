import React from "react";
import headingIcon from "../assets/icon.png"; // Import an icon (you can change it)
import aboutImg1 from "../assets/about1.png";
import aboutImg2 from "../assets/about2.png";
import aboutImg3 from "../assets/about3.png";
import aboutImg4 from "../assets/about4.png";
import { Link } from "react-router-dom";

const About_Us = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      {/* Heading with Icons */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-4">
          <img src={headingIcon} className="h-10" /> {/* Left Icon */}
          <h2 className="fw-bold text-4xl primaryColor  font-heading">About Us</h2>
          <img src={headingIcon} className="h-10" /> {/* Right Icon */}
        </div>
        <p className="mt-4 mx-auto max-w-2xl text-gray-600 text-lg">
        At SSG Global, we are dedicated to helping you experience the spiritual energy and blessings of traditional Hindu rituals. Our team of experienced priests and spiritual practitioners specializes in conducting the sacred Ashtalakshmi Puja, ensuring it is performed with utmost devotion and authenticity.        </p>
      </div>

    <div className="flex flex-wrap justify-center gap-6 mb-10">
            <img src={aboutImg1} alt="About 1" className="w-full sm:w-1/2 md:w-1/5 rounded-lg shadow-lg" />
            <img src={aboutImg2} alt="About 2" className="w-full sm:w-1/2 md:w-1/5 rounded-lg shadow-lg" />
            <img src={aboutImg3} alt="About 3" className="w-full sm:w-1/2 md:w-1/5 rounded-lg shadow-lg" />
            <img src={aboutImg4} alt="About 4" className="w-full sm:w-1/2 md:w-1/5 rounded-lg shadow-lg" />
          </div>

      {/* Additional Content */}
      <p className="text-center text-gray-700 max-w-2xl mx-auto mb-6 text-lg">
      With years of experience and a commitment to preserving Vedic traditions, we aim to create a serene and uplifting experience for devotees seeking divine blessings.      </p>

      {/* Button */}
      <div className="text-center">
       <Link to="/about">
              <button className="mt-4 primary-btn font-bold py-2 px-6 transition">
                Know More
              </button>
              </Link>
      </div>
    </section>
  );
};

export default About_Us;
