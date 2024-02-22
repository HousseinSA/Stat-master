import MatchTableSkeleton from "../../../../../../components/layout/Skeleton/matchSkeleton/MatchTableSkeleton"
import { SkeletonTheme } from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
const loading = () => {
  return (
    <SkeletonTheme baseColor="#818181" highlightColor="#888">
      <MatchTableSkeleton />
    </SkeletonTheme>
  )
}

export default loading
