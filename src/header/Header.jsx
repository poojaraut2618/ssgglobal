import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from '../assets/Swami LOgo.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white  sticky top-0 w-full z-50">
      <div className="container mx-auto px-6 lg:px-16 flex justify-between items-center py-">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-20 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-xl mt-3 font-semibold text-gray-800">
          <li><Link to="/" className="hover:text-purple-600 transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-purple-600 transition">About Us</Link></li>
          <li><Link to="/about-puja" className="hover:text-purple-600 transition">About Puja</Link></li>
          <li><Link to="/blog" className="hover:text-purple-600 transition">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-purple-600 transition">Contact</Link></li>
        </ul>

        {/* CTA Button (Hidden on Mobile) */}
        <div className="hidden md:block">
          <Link to="/signup" className="bg-[#800080] text-white px-3 py-2 rounded-full font-semibold hover:bg-yellow-600 transition">
            Reserve Your Puja
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} className="text-purple-800" /> : <Menu size={28} className="text-purple-800" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-[#800080] text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
        <button className="absolute top-5 right-6" onClick={() => setIsOpen(false)}>
          <X size={32} />
        </button>
        <div className="flex flex-col items-center justify-center h-full space-y-6 text-lg font-medium">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/about-puja" onClick={() => setIsOpen(false)}>About Puja</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/signup" className="bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition" onClick={() => setIsOpen(false)}>
            Reserve Your Puja
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
