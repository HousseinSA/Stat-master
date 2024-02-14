import CompitionContent from "../../../../components/mainSection/CompitionData/CompitionContent"
import MatchesContainer from "../../../../components/mainSection/CompitionData/MatchesContainer/MatchesContainer"
import TeamsContainer from "../../../../components/mainSection/CompitionData/TeamsContainer/TeamsContainer"
import StatsContainer from "../../../../components/mainSection/CompitionData/StatsContainer/StatsContainer"
import { getcompitiondata } from "../../../../utils/allDataFetchingFunctions"
import StandingsContainer from "../../../../components/mainSection/CompitionData/StandingsContainer/LeagueContainer/StandingsContainer"
import Layout from "../../../../components/layout/Layout"
const StandingsPage = async ({ params: { league, season, action } }) => {
  const compitionData = await getcompitiondata(league, season, action)
  const actionList = {
    standings: <StandingsContainer compitionData={compitionData} />,
    matches: <MatchesContainer compitionData={compitionData} />,
    teams: <TeamsContainer compitionData={compitionData} />,
    stats: <StatsContainer compitionData={compitionData} />,
  }
  return (
    <Layout>
      <CompitionContent>{actionList[action]}</CompitionContent>
    </Layout>
  )
}

export default StandingsPage
