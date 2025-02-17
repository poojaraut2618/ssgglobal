import React from "react";
import headingIcon from "../assets/icon.png";
import indiaFlag from "../assets/india.png";
import singaporeFlag from "../assets/singapore.png";
import malaysiaFlag from "../assets/malaysia.png";
import australiaFlag from "../assets/australia.png";
import usaFlag from "../assets/usa.png";
import indonesiaFlag from "../assets/indonesia.png";
import philippinesFlag from "../assets/philippines.png";

const contacts = [
  { location: "Chennai", name: "Srimathi Devika", phone: "+91 9840 0594 64", flag: indiaFlag },
  { location: "Salem", name: "Dr. Selvi", phone: "+91 9487 2155 71", flag: indiaFlag },
  { location: "Bangalore", name: "Mr. Raja", phone: "+91 9148 7671 92", flag: indiaFlag },
  { location: "Singapore", name: "Madam Abirahmi", phone: "+65 9004 5920", flag: singaporeFlag },
  { location: "Singapore", name: "Mr. Shanmugam", phone: "+65 9852 2130", flag: singaporeFlag },
  { location: "Malaysia", name: "Sai Iswaran", phone: "+60 1692 9195 4", flag: malaysiaFlag },
  { location: "Malaysia", name: "Kanageswary", phone: "+60 1649 3387 0", flag: malaysiaFlag },
  { location: "Malaysia", name: "Devi Kamaachi Paramasuarann", phone: "+60 11 5556 5513", flag: malaysiaFlag },
  { location: "Australia", name: "Dr. Vishwanath Deshmukh", phone: "+61 4068 1777 5", flag: australiaFlag },
  { location: "United States (US)", name: "Logan Krishna", phone: "+1 5877 2357 78", flag: usaFlag },
  { location: "Medan, Indonesia", name: "Baba Mohan Leo", phone: "+62 8116 1633 4", flag: indonesiaFlag },
  { location: "Medan, Indonesia", name: "Mr. A. Thirumal", phone: "+62 8116 1560 9", flag: indonesiaFlag },
  { location: "Philippines", name: "Jay Murugan", phone: "+63 9195 0007 70", flag: philippinesFlag },
];

const ContactTable = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2">
          <img src={headingIcon} className="h-10" alt="icon" />
          <h2 className="fw-bold text-4xl primaryColor font-heading">
            Overseas Contact
          </h2>
          <img src={headingIcon} className="h-10" alt="icon" />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border shadow-md rounded-lg overflow-hidden border-gray-300">
          <thead>
            <tr className="bg-[#800080] text-white">
              <th className="border border-gray-300 px-4 py-2">Location</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Phone</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white border" : "bg-[#FFFFF0]"}>
                <td className=" border-gray-300 px-4 py-2 flex items-center gap-2">
                  <img src={contact.flag} alt={contact.location} className="h-5 w-8" />
                  {contact.location}
                </td>
                <td className="border border-gray-300 px-4 py-2">{contact.name}</td>
                <td className="border border-gray-300 px-4 py-2 text-blue-600 font-medium">
                  <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="underline hover:text-blue-800">
                    {contact.phone}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactTable;
    