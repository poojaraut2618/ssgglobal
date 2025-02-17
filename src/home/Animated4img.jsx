import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/WhatsApp Image 2025-01-21 at 11.07.58.jpeg";

export default function ImageHoverEffect() {
    
  return (
    <div className="flex w-full h-screen overflow-hidden">
      {[
        { src: img1, color: "bg-red-500/50", text: "Image 1", link: "/about-swamiji" },
        { src: img1, color: "bg-blue-500/50", text: "Image 2", link: "/about" },
        { src: img1, color: "bg-green-500/50", text: "Image 3", link: "/about-puja" },
        { src: img1, color: "bg-yellow-500/50", text: "Image 4", link: "/blog" },
      ].map((item, index) => (
        <div
          key={index}
          className="group relative h-full flex-1 transition-all duration-500 hover:flex-[2]"
        >
          <img
            src={item.src}
            alt={`Image ${index + 1}`}
            className="h-full w-full object-cover transition-all duration-500"
          />

          <div
            className={`absolute inset-0 ${item.color} flex flex-col justify-center items-center opacity-80 group-hover:opacity-100 transition-opacity`}
          >
            <h2 className="text-white text-2xl font-bold">{item.text}</h2>

            <Link to={item.link}>
              <button
                onClick={() => window.scrollTo(0, 0)}
                className="mt-4 primary-btn font-bold py-2 px-6 transition"
              >
                Know More
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
