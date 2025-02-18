import React from "react";
import { MdDashboard } from "react-icons/md";
import { BsFillFileEarmarkMedicalFill } from "react-icons/bs";
import { FaStreetView } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { MdDocumentScanner } from "react-icons/md";

const DocSidebar = () => {
  return (
    <div className="flex flex-col text-left bg-[#111411] text-gray-400 border-r w-1/5 h-full overflow-y-auto">
      {/* Logo */}
      <div className="flex items-center p-3 border-b border-white">
        <img src="/images/logo.png" alt="Logo" className="w-7 h-7 mr-2" />
        <div className="text-xl font-bold text-white">BlocDoc</div>
      </div>

      {/* Menu */}
      <div className="my-5 px-3">
        <div className="text-gray-500 text-sm mb-1">MAIN MENU</div>

        <button className="flex justify-start text-left text-black text-sm w-full p-2 font-bold rounded-md bg-[#98e5dd] items-center hover:bg-[#87d4cb] transition">
          <MdDashboard />
          <div className="ml-1">Dashboard</div>
        </button>

        <button className="flex justify-start text-left p-2 my-1 text-sm w-full rounded-md items-center hover:bg-[#272b2c] transition">
          <FaStreetView />
          <div className="ml-1">View Patients</div>
        </button>

        <button className="flex justify-start text-left p-2 my-1 text-sm w-full rounded-md items-center hover:bg-[#272b2c] transition">
          <IoMdAddCircle />
          <div className="ml-1">Add Patients</div>
        </button>

        <button className="flex justify-start text-left p-2 my-1 text-sm w-full rounded-md items-center hover:bg-[#272b2c] transition">
          <MdDocumentScanner />
          <div className="ml-1">View Certificates</div>
        </button>

        <button className="flex justify-start text-left p-2 my-1 text-sm w-full rounded-md items-center hover:bg-[#272b2c] transition">
          <BsFillFileEarmarkMedicalFill />
          <div className="ml-1">Issue Certificates</div>
        </button>
      </div>
    </div>
  );
};

export default DocSidebar;
