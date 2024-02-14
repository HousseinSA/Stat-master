import React from "react"

const TableContainer = ({ children }) => {
  return (
    <table className="w-full">
      <thead className="sticky top-0 z-50">
        <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase">
          <th className="px-4 py-3  bg-gray-100 clear-start sticky z-20 left-0">
            Club
          </th>
          <th className="px-4 py-3">MP</th>
          <th className="px-4 py-3">W</th>
          <th className="px-4 py-3">D</th>
          <th className="px-4 py-3">L</th>
          <th className="px-4 py-3">GF</th>
          <th className="px-4 py-3">GA</th>
          <th className="px-4 py-3">GD</th>
          <th className="px-4 py-3">PTS</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  )
}

export default TableContainer
