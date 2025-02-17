import React from 'react'
import headingIcon from "../assets/icon.png";

export default function SwamijiEvents() {
  return (
    <div  className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-center gap-4">
                  <img src={headingIcon} className="h-6 sm:h-8 md:h-10" alt="Icon" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl fw-bold primaryColor">Swamiji Events</h2>
                  <img src={headingIcon} className="h-6 sm:h-8 md:h-10" alt="Icon" />
                </div>

                
    </div>
  )
}
