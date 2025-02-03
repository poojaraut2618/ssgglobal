import React from 'react'
import aboutImg1 from "../assets/about1.png";
import aboutImg2 from "../assets/about2.png";
import aboutImg3 from "../assets/about3.png";
import aboutImg4 from "../assets/about4.png";

export default function Img4() {
  return (
    <div>
        <div className="flex flex-wrap justify-center gap-6 mb-10">
                    <img src={aboutImg1} alt="About 1" className="w-full sm:w-1/2 md:w-1/5 rounded-lg shadow-lg" />
                    <img src={aboutImg3} alt="About 2" className="w-full sm:w-1/2 md:w-1/5 rounded-lg shadow-lg" />
                    <img src={aboutImg2} alt="About 3" className="w-full sm:w-1/2 md:w-1/5 rounded-lg shadow-lg" />
                    <img src={aboutImg4} alt="About 4" className="w-full sm:w-1/2 md:w-1/5 rounded-lg shadow-lg" />
                  </div>
    </div>
  )
}
