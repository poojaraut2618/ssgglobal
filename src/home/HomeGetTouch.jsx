import React from "react";
import headingIcon from "../assets/icon.png"; 
import Contact from "../assets/contact.png"
import Email from "../assets/email.png"
import Location from "../assets/location.png"

export default function ContactUs() {
  return (

    <div>
         <div className="text-center mb-4 mt-8">
                        <div className="d-flex align-items-center justify-content-center gap-4">
                          <img src={headingIcon} className="h-10 md:h-10" alt="Icon Left" /> {/* Left Icon */}
                          <h2 className="text-3xl md:text-4xl fw-bold primaryColor">Get In Touch</h2>
                          <img src={headingIcon} className="h-10 md:h-10" alt="Icon Right" /> {/* Right Icon */}
                        </div>
                      </div>
    <div className="max-w-4xl  mx-auto  m-5 bg-white  flex flex-col md:flex-row gap-20  ">
      {/* Map Section */}
        

      <div className="w-full md:w-1/2">
        <iframe
          title="Google Map"
          className="w-full h-80 md:h-80     "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345097077!2d144.95373531531596!3d-37.81627974202192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1634027562341!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      
      {/* Contact Details Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center ml-10 mb-10 ">
       
        <div className="mt-6 space-y-10 text-gray-700 ">
          <div className="flex items-center gap-3">
              <div ><img src={Contact} className="h-8 md:h-8 mb-2" alt="Icon Right" /></div>
            <span>+91- 12345 12345</span>
          </div>
          <div className="flex items-center gap-3">
           <div ><img src={Email} className="h-8 md:h-8 mb-2" alt="Icon Right" /></div>
            <span>loremipsum@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <div ><img src={Location} className="h-8 md:h-8 mb-2" alt="Icon Right" /></div>
            <span>City, State, Country - 123456</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
