import React from "react";
import logo from '../assets/Swami LOgo.png';
import { Link } from 'react-router-dom';
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#800080] text-white py-6">
        <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Left Section - Logo */}
          <div className="text-center lg:text-left mt-3">
            <img src={logo} alt="Logo" className="h-44" />
          </div>  

          {/* Left Section - Text */}
          <div className="text-start mr-9 lg:text-left mt-7">
            <p className="text-base">
            Our expertise lies in performing the sacred Ashtalakshmi Puja, a powerful ritual that invokes the blessings of the eight forms of Goddess Lakshmi.  
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-1">Quick Links</h3>
            <ul className="space-y-2 text-left">
              <li><Link to="/" className="text-white hover:text-blue-900 transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="text-white hover:text-blue-400 transition-colors duration-300">About Us</Link></li>
              <li><Link to="/about-puja" className="text-white hover:text-blue-400 transition-colors duration-300">About Puja</Link></li>
              <li><Link to="/blog" className="text-white hover:text-blue-400 transition-colors duration-300">Blog</Link></li>
              <li><Link to="/contact" className="text-white hover:text-blue-400 transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-1">Contact Us</h3>
            
            <p className="flex items-center space-x-2"><span><IoCallOutline /> </span><span>+91-12345 12345</span></p>
            <p className="flex items-center space-x-2"><span><CiMail /></span> <span>loremipsum@gmail.com</span></p>
            <p className="flex items-center space-x-2"><span><CiLocationOn /></span> <span>City, State, Country - 123456</span></p>
            
            {/* Social Media Icons */}
            <div className="flex justify-start space-x-4 mt-2">
              <a href="#" className="text-lg hover:text-gray-300 transition-colors duration-300"><CiLinkedin className="text-white mt-3 text-2xl hover:text-blue-600"/></a>
              <a href="#" className="text-lg hover:text-gray-300 transition-colors duration-300"><FaYoutube className="text-white mt-3 text-2xl hover:text-blue-600"/></a>
              <a href="#" className="text-lg hover:text-gray-300 transition-colors duration-300"><FaInstagram className="text-white mt-3 text-2xl hover:text-blue-600"/></a>
              <a href="#" className="text-lg hover:text-gray-300 transition-colors duration-300"><FaFacebook className="text-white mt-3 text-2xl hover:text-blue-600"/></a>
            </div>
          </div>
        </div>
      </footer>
      {/* Bottom Section */}
      <div className="bg-yellow-500 text-center text-lg py-1 text-black">
        Designed & Developed by: <strong>VM3 Tech Solutions LLP</strong>
      </div>
    </div>
  );
};

export default Footer;
