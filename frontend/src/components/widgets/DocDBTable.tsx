import React from 'react'

type Props = {}

const DocDBTable = (props: Props) => {
  return (
    <table className="w-full text-left border-collapse mt-2 text-sm">
      <thead>
        <tr className="border-b border-gray-600">
          <th className="p-2">Activity</th>
          <th className="p-2">Date</th>
          <th className="p-2">Status</th>
          <th className="p-2">Patient</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-700">
          <td className="p-2">Checkup</td>
          <td className="p-2">Feb 18, 2025</td>
          <td className="p-2 text-green-400">Completed</td>
          <td className="p-2">John Doe</td>
        </tr>
        <tr className="border-b border-gray-700">
          <td className="p-2">Surgery</td>
          <td className="p-2">Feb 16, 2025</td>
          <td className="p-2 text-yellow-400">Pending</td>
          <td className="p-2">Jane Smith</td>
        </tr>
        <tr>
          <td className="p-2">Consultation</td>
          <td className="p-2">Feb 15, 2025</td>
          <td className="p-2 text-red-400">Cancelled</td>
          <td className="p-2">Robert Brown</td>
        </tr>
      </tbody>
    </table>
  )
}

export default DocDBTable