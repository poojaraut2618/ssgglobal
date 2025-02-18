import React, { useState } from "react";
import headingIcon from "../assets/icon.png";

export default function SeeOurProducts() {
  const [activeLink, setActiveLink] = useState("Upcoming Events");

  const links = [
    { name: "Past Events", image: "/images/marigold.jpg" },
    { name: "Ongoing Events", image: "/images/chrysanthemum.jpg" },
    { name: "Upcoming Events", image: "/images/watermelon.jpg" },
  ];

  const activeImage = links.find((link) => link.name === activeLink)?.image;

  return (
    <div className="min-h-screen flex flex-col items-center py-16">

       {/* Heading with Icons */}
            
              <div className="flex items-center justify-center gap-4 ">
                <img src={headingIcon} className="h-6 sm:h-8 md:h-10" alt="Icon" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl fw-bold primaryColor">Swamiji Events</h2>
                <img src={headingIcon} className="h-6 sm:h-8 md:h-10" alt="Icon" />
              </div>
              
           

      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center items-center container mx-auto py-12 px-4 gap-4">
        {links.map((link) => (
          <button
            key={link.name}
            onClick={() => setActiveLink(link.name)}
            className={`px-4 py-2 text-lg sm:text-lg md:text-xl font-bold rounded-lg border-2 transition ${
              activeLink === link.name
                ? link.name === "Upcoming Events"
                  ? "bg-[#800080] text-white border-[#800080]"
                  : "bg-[#800080] text-white border-[#800080]"
                : "text-black border-[#800080]  "
            }`}
          >
            {link.name}
          </button>
        ))}
      </nav>

      {/* Display Image Based on Active Link */}
      {activeImage && (
        <div className="flex justify-center items-center mt-8">
          <img
            src={activeImage}
            alt={activeLink}
            className="w-96 h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
}
