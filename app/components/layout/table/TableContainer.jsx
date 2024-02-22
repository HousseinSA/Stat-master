import TableHead from "./TableHead"
import Loading from "../../../competion/[league]/[season]/[action]/loading"
const TableContainer = ({ children }) => {
  return (
    <table className="w-full h-full">
      <TableHead />

      <tbody>{children}</tbody>
    </table>
  )
}

export default TableContainer
