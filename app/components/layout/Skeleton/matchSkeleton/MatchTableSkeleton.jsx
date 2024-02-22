import Skeleton from "react-loading-skeleton"
import RowSkeleton from "./RowSkeleton"
const MatchTableSkeleton = () => {
  const skeletonRows = Array.from({ length: 3 })
  return (
    <>
      <div className="flex mt-4 ml-4 gap-5 items-center">
        <Skeleton width={50} height={50} circle />
        <div className="w-20 h-8">
          <Skeleton height={20} />
        </div>
      </div>
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
