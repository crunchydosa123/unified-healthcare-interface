import React from 'react'

type Props = {}

const DocPatientsTable = (props: Props) => {
    const patients = [
        { uuid: "123-abc", name: "John Doe", age: 28, certs: "2" },
        { uuid: "456-def", name: "Jane Smith", age: 35, certs: "2" },
      ];
  return (
  <div className="overflow-x-auto bg-black border border-gray-700 rounded-md">
  <table className="w-full border-collapse text-sm">
    <thead>
      <tr className="bg-[#98e5dd] text-black">
        <th className="p-3 border-b border-gray-600 text-left">UUID</th>
        <th className="p-3 border-b border-gray-600 text-left">Name</th>
        <th className="p-3 border-b border-gray-600 text-left">Age</th>
        <th className="p-3 border-b border-gray-600 text-left">Certificates</th>
      </tr>
    </thead>

    <tbody>
      {patients.length > 0 ? (
        patients.map((patient) => (
          <tr key={patient.uuid} className="hover:bg-gray-900">
            <td className="p-3 border-b border-gray-700">{patient.uuid}</td>
            <td className="p-3 border-b border-gray-700">{patient.name}</td>
            <td className="p-3 border-b border-gray-700">{patient.age}</td>
            <td className="p-3 border-b border-gray-700">{patient.certs}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td
            colSpan={4}
            className="p-3 text-center text-gray-400 border-b border-gray-700"
          >
            No patients found
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>
  )
}

export default DocPatientsTable