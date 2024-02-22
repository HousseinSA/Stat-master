import Skeleton from "react-loading-skeleton"
import RowSkeleton from "./RowSkeleton"
const MatchTableSkeleton = () => {
  const skeletonRows = Array.from({ length: 3 })
  return (
    <>
      <h1 className="p-3 font-semibold bg-gray-200 w-full">
        <Skeleton />
      </h1>
      <table className="w-full">
        <tbody>
          {skeletonRows.map((row) => {
            return <RowSkeleton key={row} />
          })}
        </tbody>
      </table>
    </>
  )
}

export default MatchTableSkeleton
