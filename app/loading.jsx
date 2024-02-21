import Layout from "./components/layout/Layout"
import CompetionContent from "./components/mainSection/CompetionData/CompetionContent"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
const Loading = () => {
  return (
    <Layout>
      <CompetionContent>
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <p>
            <Skeleton count={3} />
          </p>
        </SkeletonTheme>
      </CompetionContent>
    </Layout>
  )
}

export default Loading
