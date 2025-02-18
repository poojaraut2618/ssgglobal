import React from 'react';
import headingIcon from "../assets/icon.png"; 

const MiraclesAndHealing = () => {
  return (
    <div className="py-8 px- md:py-2 md:px-12 lg:px-52">

          <div className="flex items-center justify-center gap-4 pb-5">
                          <img src={headingIcon} className="h-16" /> {/* Left Icon */}
                          <h2 className="fw-bold text-3xl primaryColor text-center  font-heading">The Divine Blessings of Swamiji </h2>
                          <img src={headingIcon} className="h-16" /> {/* Right Icon */}
                        </div>

      <div className='bg-[#FFFFF0] p-5 rounded-lg '>
        <p className="text-gray-700 mb-4 text-center text-sm sm:text-base md:text-lg">
          Swamiji carries sacred symbols of the Chakra (Wheel) and Sankha (Conch) on his hands and feet, believed to be signs of divine energy. Wherever Swamiji steps, prosperity, health, and spiritual upliftment follow.
        </p>
        <h2 className="text-xl font-bold mb-4 text-center text-lg sm:text-xl md:text-2xl">
          Miracles & Spiritual Healing
        </h2>
        <ul className="list-disc space-y-4 text-sm sm:text-base md:text-lg">
          <li>
            <strong>Blessings for Parenthood</strong> – Countless childless couples have conceived through Swamiji’s grace.
          </li>
          <li>
            <strong>Healing the Ailing</strong> – He has cured thousands of people suffering from physical and mental illnesses.
          </li>
          <li>
            <strong>Restoring the Senses</strong> – Swamiji has made the lame walk, the blind see, and the deaf hear.
          </li>
          <li>
            <strong>Guiding the Lost</strong> – Many struggling devotees have found peace, prosperity, and direction in life.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MiraclesAndHealing;
