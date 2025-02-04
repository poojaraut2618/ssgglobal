import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import headingIcon from "../assets/icon.png";
import aboutImg1 from "../assets/about1.png";
import aboutImg2 from "../assets/about2.png";
import aboutImg3 from "../assets/about3.png";
import aboutImg4 from "../assets/about4.png";

const About_Us = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="container mx-auto px-6 py-18">
      {/* Heading with Icons */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-4">
          <img src={headingIcon} className="h-10 md:h-10" alt="Icon Left" />
          <h2 className="text-3xl md:text-4xl fw-bold primaryColor">An Ancient Ritual for Modern Times</h2>
          <img src={headingIcon} className="h-10 md:h-10" alt="Icon Right" />
        </div>
        <p className="mt-4 mx-auto max-w-3xl text-gray-600 text-lg md:text-lg">
          At SSG Global, we are dedicated to helping you experience the spiritual energy and blessings of traditional Hindu rituals. 
          Our team of experienced priests and spiritual practitioners specializes in conducting the sacred Ashtalakshmi Puja, ensuring it is performed with utmost devotion and authenticity.
        </p>
      </div>

      {/* Image Grid with AOS Flip-Up Effect */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        <img data-aos="flip-up" src={aboutImg1} alt="About 1" className="w-full sm:w-1/2 md:w-1/5 rounded-lg shadow-lg" />
        <img data-aos="flip-up" src={aboutImg2} alt="About 2" className="w-full sm:w-1/2 md:w-1/5 rounded-lg shadow-lg" />
        <img data-aos="flip-up" src={aboutImg3} alt="About 3" className="w-full sm:w-1/2 md:w-1/5 rounded-lg shadow-lg" />
        <img data-aos="flip-up" src={aboutImg4} alt="About 4" className="w-full sm:w-1/2 md:w-1/5 rounded-lg shadow-lg" />
      </div>

      {/* Additional Content */}
      <p className="text-center text-gray-700 max-w-3xl mx-auto text-lg md:text-lg">
        The Ashtalakshmi Puja is a powerful and auspicious ritual rooted in Vedic traditions. It invokes the blessings of the eight manifestations of Goddess Lakshmi, each representing different facets of prosperity, including wealth, health, knowledge, courage, and spiritual growth.
        This puja is ideal for those seeking divine guidance to overcome challenges, achieve success, and bring harmony to their personal and professional lives.
      </p>
    </section>
  );
};

export default About_Us;
