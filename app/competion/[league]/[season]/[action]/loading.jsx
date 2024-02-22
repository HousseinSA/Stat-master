"use client"
import { SkeletonTheme } from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import TeamRowSkeleton from "../../../../components/layout/Skeleton/StandingSkeleton/TableSkeleton"
import { useLeagueStore } from "../../../../utils/StateStore"
import TeamSkeleton from "../../../../components/layout/Skeleton/TeamSkeleton/TeamSkeleton"
import StatSkeleton from "../../../../components/layout/Skeleton/StatSkeleton/StatSkeleton"

const Loading = () => {
  const { action } = useLeagueStore()
  return (
    <div className="mt-5 w-full  justify-center">
      {/* Ensure the parent container stretches to full width */}
      <div className="w-full max-w-screen-lg">
        <SkeletonTheme baseColor="#818181" highlightColor="#888">
          {action === "teams" ? (
            <TeamSkeleton />
          ) : action === "stats" ? (
            <StatSkeleton />
          ) : (
            <TeamRowSkeleton />
          )}
        </SkeletonTheme>
      </div>
    </div>
  )
}

export default Loading
