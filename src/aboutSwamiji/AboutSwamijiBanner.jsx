import React from "react";
import swamijibanner from "../assets/swamijiBanner.jpg";

const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[520px]  flex items-end"
      style={{
        backgroundImage: `url(${swamijibanner})`,
      }}
    >
      {/* Content */}
      <div className="relative container mx-auto py-4   text-white flex">
        <div className="max-w-full  ">
          <h1 className="fw-bold text-4xl ml-44 md:text-5xl ">
            Explore Divine Knowledge and Spiritual Insights{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
