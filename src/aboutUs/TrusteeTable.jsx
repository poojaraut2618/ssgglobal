import React from "react";
import headingIcon from "../assets/icon.png";

const members = [
  { name: "Swami Subrahmanyam Giri", role: "President / Founder" },
  { name: "Sri Baburao Namdev Malk", role: "Vice President" },
  { name: "Sri Ganesh Bhanudas Jadhav", role: "Secretary" },
  { name: "Sri Devidas Ramrao Nikam", role: "Treasurer" },
  { name: "Sri Mohan Velu Mudaliyar", role: "Trustee" },
  { name: "Sri Raman Balsubramanyam", role: "Trustee" },
  { name: "Sri K.M. Mahadevan", role: "Trustee" },
  { name: "Sow Jaya M Mahadevan", role: "Trustee" },
  { name: "Sow B Devika Bhupathy", role: "Trustee" },
];

const TrustTable = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2">
          <img src={headingIcon} className="h-10" alt="icon" /> {/* Left Icon */}
          <h2 className="fw-bold text-4xl primaryColor font-heading">
            Sai Sakthi Sant Trust
          </h2>
          <img src={headingIcon} className="h-10" alt="icon" /> {/* Right Icon */}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden ">
          <thead>
            <tr className="bg-[#800080] text-white">
              <th className="py-3 px-6 text-left text-xl w-1/2 border">Name</th>
              <th className="py-3 px-6 text-left text-xl w-1/2 border">
                Board of Trustees
              </th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-[#FFFFF0]"}
              >
                <td className="py-3 px-6 border font-bold text-lg ">{member.name}</td>
                <td className="py-3 px-6 border font-bold text-lg ">{member.role}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2" className="py-4 px-6 text-center text-xl font-bold">
                Registration Number: Ahmednagar/ 0000421 / 2024
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default TrustTable;
