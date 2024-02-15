import MatchesContainer from "../../../../components/mainSection/CompetionData/MatchesContainer/MatchesContainer"
import CompetionContent from "../../../../components/mainSection/CompetionData/CompetionContent"
import Layout from "../../../../components/layout/Layout"
// import {} from "../../../../components/mainSection/CompetionData/"
import { getCompetionData } from "../../../../utils/allDataFetchingFunctions"
const PageData = async ({ props: { league, season, action } }) => {
  // const competionList =//
  const competionData = await getCompetionData(league, season, action)
  return (
    <Layout>
      <CompetionContent>
        <MatchesContainer />
      </CompetionContent>
    </Layout>
  )
}

export default PageData
