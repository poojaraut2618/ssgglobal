import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="bg-[#800080] text-white py-2  px-6">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        {/* Left - Contact */}
        <div className="flex flex-wrap items-center space-x-4  sm:mb-0">
          <a href="tel:+123456789" className="text-white hover:text-gray-400">
            Volunteer | Call Us: 12345 12345
          </a>
        </div>

        {/* Right - Social Media Icons */}
        <div className="flex space-x-3">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <CiLinkedin className="text-white text-xl hover:text-blue-600" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaYoutube className="text-white text-xl hover:text-red-600" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaInstagram className="text-white text-xl hover:text-pink-600" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaFacebook className="text-white text-xl hover:text-blue-600" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
