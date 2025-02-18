import React, { useEffect, useRef, useState } from "react";
import DocSidebar from "../../components/layout/DocSidebar";
import UserAvatar from "../../components/widgets/UserAvatar";
import { Html5QrcodeScanner } from "html5-qrcode";

const AddPatient2 = () => {
  const [scanResult, setScanResult] = useState<string | null>(null);
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);
  const [patientUUID, setPatientUUID] = useState<string>(""); // Initialize as empty string

  useEffect(() => {
    if (!scannerRef.current) {
      scannerRef.current = new Html5QrcodeScanner("qr-reader", {
        fps: 10,
        qrbox: { width: 300, height: 300 },
      });

      scannerRef.current.render(
        (decodedText) => {
          setPatientUUID(decodedText); // Set input field value when scanned
          setScanResult(decodedText);
          scannerRef.current?.clear(); // Stop scanning after success
        },
        (error) => {
          console.error("QR Scan Error:", error);
        }
      );
    }

    return () => {
      scannerRef.current?.clear(); // Cleanup scanner on unmount
      scannerRef.current = null;
    };
  }, []);

  return (
    <div className="h-screen flex w-full">
      {/* Sidebar */}
      <DocSidebar />

      {/* Main Content */}
      <div className="flex flex-col w-full">
        <UserAvatar />

        <div className="w-full h-full bg-[#1e201f] grid grid-cols-3 grid-rows-1 p-5">
          {/* Form Card */}
          <div className="col-span-1 row-span-1 text-white bg-black border border-gray-500 rounded-md p-5 w-[400px]">
            <div className="border-b pb-2 mb-4 text-lg font-semibold">
              Add a Patient
            </div>

            {/* QR Scanner Box */}
            <div className="p-4 border rounded-lg shadow-md bg-gray-300 text-black">
              
                <div id="qr-reader" className="w-full" />
               
               
            </div>

            <div className="text-center mt-4">OR</div>
            <div className="text-center">Enter patient UUID Manually:</div>
            
            {/* Input field auto-populated with scanned UUID */}
            <input
              className="border-b w-full mt-2 p-1 text-white border-b"
              placeholder="For example: abc-123-def"
              value={patientUUID} // Automatically updates when scanned
              onChange={(e) => setPatientUUID(e.target.value)} // Allow manual editing
            />

            <button className="my-4 p-2 bg-[#eeb48f] text-center text-black rounded-md w-full">
              Request Permission
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPatient2;
