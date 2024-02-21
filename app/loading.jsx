import CompetionContent from "./components/mainSection/CompetionData/CompetionContent"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const Loading = () => {
  // const SkeletonArray = Array.from({ length: 20 })
  return (
    <CompetionContent>
      {/* <div className="w-full h-full px-4 ">
      {/* <SkeletonTheme baseColor="#F3F4F6" highlightColor="#525252">
          <TeamRowSkeleton />
        </SkeletonTheme>
      </div> */}
      <div>Hello</div>
    </CompetionContent>
  )
}

export default Loading
