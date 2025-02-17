import React, { useState, useEffect, useRef } from "react";
import { QRCodeSVG } from "qrcode.react";

const PatientProfile = () => {
  const [uid, setUid] = useState("1234-5678-91992");
  const [qrValue, setQrValue] = useState("");
  const qrRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (uid.trim()) {
      setQrValue(`https://your-system.com/patient/${uid}`);
    }
  }, [uid]);

  const downloadQR = () => {
    if (!qrRef.current) return;

    const svgElement = qrRef.current.querySelector("svg");
    if (!svgElement) return;

    const svgData = new XMLSerializer().serializeToString(svgElement);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = "data:image/svg+xml;base64," + btoa(svgData);

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);

      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = `patient_qr_${uid}.png`;
      link.click();
    };
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold mb-4">Your QR Code</h2>

      {/* QR Code */}
      <div ref={qrRef} className="p-4 border rounded-lg shadow-md bg-white">
        {qrValue ? <QRCodeSVG value={qrValue} size={200} /> : <p>Generating...</p>}
      </div>

      {/* UID Display */}
      <p className="mt-2 text-gray-600 font-semibold">UID: {uid}</p>

      {/* Download Button */}
      <button
        onClick={downloadQR}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
      >
        Download QR Code
      </button>
    </div>
  );
};

export default PatientProfile;
