import React from "react";

type Patient = {
  uuid: string;
  name: string;
};

const patients: Patient[] = [
  { uuid: "123-abc", name: "John Doe" },
  { uuid: "456-def", name: "Jane Smith" },
  { uuid: "789-ghi", name: "Alice Johnson" },
];

const DocIssueCert = () => {
  return (
    <div className="bg-[#111411] h-full w-full p-5 text-white">
      <h2 className="text-xl font-semibold mb-4">Issue Certificates</h2>

      {/* Table Wrapper */}
      <div className="overflow-x-auto bg-black border border-gray-700 rounded-md">
        <table className="w-full border-collapse">
          {/* Table Header */}
          <thead>
            <tr className="bg-gray-800">
              <th className="p-3 border-b border-gray-600 text-left">Patient Name</th>
              <th className="p-3 border-b border-gray-600 text-left">Patient UUID</th>
              <th className="p-3 border-b border-gray-600 text-center">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {patients.length > 0 ? (
              patients.map((patient) => (
                <tr key={patient.uuid} className="hover:bg-gray-900">
                  <td className="p-3 border-b border-gray-700">{patient.name}</td>
                  <td className="p-3 border-b border-gray-700">{patient.uuid}</td>
                  <td className="p-3 border-b border-gray-700 text-center">
                    <button className="bg-green-500 text-black px-4 py-2 rounded-md hover:bg-green-600">
                      + Add Certificate
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="p-3 text-center text-gray-400 border-b border-gray-700">
                  No patients found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DocIssueCert;
