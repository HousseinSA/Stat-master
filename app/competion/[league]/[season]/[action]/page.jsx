import CompetionContent from "../../../../components/mainSection/CompetionData/CompetionContent"
import TeamsContainer from "../../../../components/mainSection/CompetionData/TeamsContainer/TeamsContainer"
import StatsContainer from "../../../../components/mainSection/CompetionData/StatsContainer/StatsContainer"
import { getCompetionData } from "../../../../utils/allDataFetchingFunctions"
import StandingsContainer from "../../../../components/mainSection/CompetionData/StandingsContainer/StandingsContainer"
const MainDataPage = async ({ params }) => {
  const { league, season, action } = params
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const CompetionData = await getCompetionData(league, season, action)
  const actionList = {
    standings: <StandingsContainer CompetionData={CompetionData} />,
    teams: <TeamsContainer CompetionData={CompetionData} />,
    stats: <StatsContainer CompetionData={CompetionData} />,
  }
  return <>{actionList[action]}</>
}

export default MainDataPage
