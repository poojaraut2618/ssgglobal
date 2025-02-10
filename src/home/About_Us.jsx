import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import headingIcon from "../assets/icon.png";
import aboutImg1 from "../assets/about1.png";
import aboutImg2 from "../assets/about2.png";
import aboutImg3 from "../assets/about3.png";
import aboutImg4 from "../assets/about4.png";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Heading with Icons */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-4">
          <img src={headingIcon} className="h-6 sm:h-8 md:h-10" alt="Icon" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl fw-bold primaryColor">About Us</h2>
          <img src={headingIcon} className="h-6 sm:h-8 md:h-10" alt="Icon" />
        </div>
        <p className="mt-4 mx-auto max-w-3xl text-gray-600 text-sm sm:text-base md:text-lg">
          At SSG Global, we are dedicated to helping you experience the spiritual
          energy and blessings of traditional Hindu rituals. Our team of experienced
          priests and spiritual practitioners specializes in conducting the sacred
          Ashtalakshmi Puja with devotion and authenticity.
        </p>
      </div>

      {/* Responsive Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 justify-center mb-10">
        {[aboutImg1, aboutImg2, aboutImg3, aboutImg4].map((img, index) => (
          <img
            key={index}
            data-aos="flip-up"
            src={img}
            alt={`About ${index + 1}`}
            className="w-full rounded-lg shadow-lg"
          />
        ))}
      </div>

      {/* Additional Content */}
      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-6 text-sm sm:text-base md:text-lg">
        With years of experience and a commitment to preserving Vedic traditions, we
        aim to create a serene and uplifting experience for devotees seeking divine
        blessings.
      </p>

      {/* Button */}
      <div className="text-center">
        <Link to="/about">
          <button
            onClick={() => window.scrollTo(0, 0)}
            className="mt-4 primary-btn text-white font-bold py-2 px-4 sm:px-6 rounded-lg shadow-md transition duration-300 hover:bg-primary-dark"
          >
            Know More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;
