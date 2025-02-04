import React from "react";
import { Card,Container } from "react-bootstrap";
import headingIcon from "../assets/icon.png"; 

export default function Form() {
  return (
    <Container id="ReserveForm">
      <Card style={{border: "0"}}>
        <div className="text-center mb-4 mt-8">
          <div className="d-flex align-items-center justify-content-center gap-4">
            <img src={headingIcon} className="h-10 md:h-10" alt="Icon Left" />{" "}
            {/* Left Icon */}
            <h2 className="text-3xl md:text-4xl fw-bold primaryColor">
            Reserve Your Puja Now
            </h2>
            <img src={headingIcon} className="h-10 md:h-10" alt="Icon Right" />{" "}
            {/* Right Icon */}
          </div>
          <p className="pr-16 pl-16 p-3 text-lg">Take the first step towards inviting prosperity and harmony into your life. Reserve your puja today and let us help you connect with divine blessings.</p>
        </div>


        <form className="space-y-4 p-9" style={{ backgroundColor: "#FFFFF0" }}>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Full Name
      </label>
      <input
        type="text"
        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
        required
      />
    </div>
    
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Phone No.
      </label>
      <input
        type="tel"
        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        required
      />
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Email
      </label>
      <input
        type="email"
        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        required
      />
    </div>
    
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Preferred Date
      </label>
      <input
        type="date"
        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        required
      />
    </div>
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Address
    </label>
    <input
      type="text"
      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      required
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Message
    </label>
    <textarea
      rows="4"
      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
      style={{ backgroundColor: "#FFFFFf" }}
    ></textarea>
  </div>

  {/* Centered Button */}
  <div className="flex justify-center mt-4">
    <button
      type="submit"
      className="primary-btn font-bold px-6 py-2 transition duration-300"
    >
      Reserve Now
    </button>
  </div>
</form>


      </Card>
    </Container>
  );
}
