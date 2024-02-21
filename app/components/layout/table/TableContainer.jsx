import { Suspense } from "react"
import Loading from "../../../loading"
import TableHead from "./TableHead"
const TableContainer = ({ children }) => {
  return (
    <table className="w-full h-full">
      <TableHead />
      <Suspense fallback={<Loading />}>
        <tbody>{children}</tbody>
      </Suspense>
    </table>
  )
}

export default TableContainer
