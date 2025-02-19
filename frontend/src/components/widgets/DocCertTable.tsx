import React from "react";

type Certificate = {
  id: string;
  patientUUID: string;
  patientName: string;
  issuedAt: string;
};

const certificates: Certificate[] = [
  { id: "CERT-001", patientUUID: "123-abc", patientName: "John Doe", issuedAt: "2025-02-18 14:30" },
  { id: "CERT-002", patientUUID: "456-def", patientName: "Jane Smith", issuedAt: "2025-02-17 10:15" },
];

const DocCertTable = () => {
  return (
    <div className="bg-[#111411] h-full w-full p-5 text-white">
      <h2 className="text-xl font-semibold mb-4">Certificates</h2>

      {/* Table Wrapper */}
      <div className="overflow-x-auto bg-black border border-gray-700 rounded-md">
        <table className="w-full border-collapse">
          {/* Table Header */}
          <thead>
            <tr className="bg-gray-800">
              <th className="p-3 border-b border-gray-600 text-left">Certificate ID</th>
              <th className="p-3 border-b border-gray-600 text-left">Patient UUID</th>
              <th className="p-3 border-b border-gray-600 text-left">Patient Name</th>
              <th className="p-3 border-b border-gray-600 text-left">Issued At</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {certificates.length > 0 ? (
              certificates.map((cert) => (
                <tr key={cert.id} className="hover:bg-gray-900">
                  <td className="p-3 border-b border-gray-700">{cert.id}</td>
                  <td className="p-3 border-b border-gray-700">{cert.patientUUID}</td>
                  <td className="p-3 border-b border-gray-700">{cert.patientName}</td>
                  <td className="p-3 border-b border-gray-700">{cert.issuedAt}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="p-3 text-center text-gray-400 border-b border-gray-700"
                >
                  No certificates found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DocCertTable;
