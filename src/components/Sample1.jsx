import React from 'react'

const Sample1 = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      
      <table className="border-collapse border border-red-500 shadow-lg bg-yellow">
        <thead className="oklch(62.7% 0.194 149.214)">
          <tr>
            <th className="border border-gray-300 px-6 py-3 text-left">
              State
            </th>
            <th className="border border-gray-300 px-6 py-3 text-left">
              City
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="border border-gray-300 px-6 py-2">
              Indiana
            </td>
            <td className="border border-pink-300 px-6 py-2">
              Indianapolis
            </td>
          </tr>

          <tr className="hover:bg-gray-100">
            <td className="border border-gray-300 px-6 py-2">
              Ohio
            </td>
            <td className="border border-orange-300 px-6 py-2">
              Columbus
            </td>
          </tr>

          <tr className="hover:bg-gray-100">
            <td className="border border-gray-300 px-6 py-2">
              Michigan
            </td>
            <td className="border border-green-300 px-6 py-2">
              Detroit
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default Sample1
