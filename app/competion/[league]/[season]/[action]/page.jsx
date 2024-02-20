import CompetionContent from "../../../../components/mainSection/CompetionData/CompetionContent"
import TeamsContainer from "../../../../components/mainSection/CompetionData/TeamsContainer/TeamsContainer"
import StatsContainer from "../../../../components/mainSection/CompetionData/StatsContainer/StatsContainer"
import { getCompetionData } from "../../../../utils/allDataFetchingFunctions"
import StandingsContainer from "../../../../components/mainSection/CompetionData/StandingsContainer/StandingsContainer"
import Layout from "../../../../components/layout/Layout"
const MainDataPage = async ({ params }) => {
  const { league, season, action } = params
  const CompetionData = await getCompetionData(league, season, action)
 
  const actionList = {
    standings: <StandingsContainer CompetionData={CompetionData} />,
    teams: <TeamsContainer CompetionData={CompetionData} />,
    // stats: <StatsContainer CompetionData={CompetionData} />,
  }

  return (
    <Layout>
      <CompetionContent>{actionList[action]}</CompetionContent>
    </Layout>
  )
}

export default MainDataPage
