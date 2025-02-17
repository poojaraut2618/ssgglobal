import React from 'react'
import headingIcon from "../assets/icon.png";

export default function GalleryTitle() {
  return (
    <div className='py-12'>
         <div className="text-center">
                <div className="flex items-center justify-center gap-4">
                  <img src={headingIcon} className="h-10 md:h-10" alt="Icon Left" />
                  <h2 className="text-3xl md:text-4xl fw-bold primaryColor">Glimpses of Swamiji's Spiritual Travels and Special Invitations</h2>
                  <img src={headingIcon} className="h-10 md:h-10" alt="Icon Right" />
                </div>
                </div>
    </div>
  )
}
