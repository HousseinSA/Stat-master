import Skeleton from "react-loading-skeleton"
import StatRow from "./StatRow"
const StatSkeleton = () => {
  const statRow = Array.from({ length: 5 })
  return (
    <div className="w-full h-full flex justify-center items-center overflow-auto">
      <div className="flex w-full flex-col items-center p-3 justify-center gap-3">
        <div className="flex w-full bg-white top-0 sticky gap-2 items-center">
          <div className="w-20 h-20">
            <Skeleton circle={true} height={80} width={80} />
          </div>
          <div className="w-40 h-8">
            <Skeleton height={20} />
          </div>
        </div>
        {statRow.map((row) => {
          return <StatRow key={row} />
        })}
      </div>
    </div>
  )
}

export default StatSkeleton
