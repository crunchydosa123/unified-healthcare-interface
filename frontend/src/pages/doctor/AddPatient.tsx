import React, { useEffect, useState } from "react";
import DocSidebar from "../../components/layout/DocSidebar";
import { Html5QrcodeScanner } from "html5-qrcode";

const AddPatient = () => {
  const [scanResult, setScanResult] = useState<string | null>(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("qr-reader", {
      fps: 10, // Frames per second
      qrbox: { width: 250, height: 250 },
    });

    scanner.render(
      (decodedText) => {
        setScanResult(decodedText);
        scanner.clear(); // Stop scanning after success
      },
      (error) => {
        console.error("QR Scan Error:", error);
      }
    );

    return () => scanner.clear(); // Cleanup on component unmount
  }, []);

  return (
    <div className="h-screen flex w-full">
      <DocSidebar />

      <div className="flex flex-col w-full p-3">
        <h2 className="text-xl font-bold">Scan Patient QR Code</h2>

        <div className="mt-4 p-4 border rounded-lg shadow-md bg-white w-1/2">
          {!scanResult ? (
            <div id="qr-reader" className="w-full" />
          ) : (
            <div className="mt-3 text-green-600 font-medium">
              ✅ Scanned Data: {scanResult}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddPatient;
