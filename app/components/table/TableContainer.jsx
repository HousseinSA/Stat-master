import React from "react"
import { useLeagueStore } from "../../utils/StateStore"
import TableHead from "./TableHead"
const TableContainer = ({ children }) => {
  const { leagueCode } = useLeagueStore()

  return (
    <table className="w-full">
      <TableHead />
      <tbody>{children}</tbody>
    </table>
  )
}

export default TableContainer
