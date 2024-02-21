import Layout from "../../../../../components/layout/Layout"
import CompetionContent from "../../../../../components/mainSection/CompetionData/CompetionContent"
import TeamContainer from "../../../../../components/mainSection/CompetionData/TeamsContainer/TeamContainer"
import { getTeamData } from "../../../../../utils/allDataFetchingFunctions"
const TeamPage = async ({ params }) => {
  const { teamId, action } = params
  const teamData = await getTeamData(action, teamId)
  
  return (
    <div>
      <Layout>
        <CompetionContent>
          <TeamContainer teamData={teamData} />
        </CompetionContent>
      </Layout>
    </div>
  )
}

export default TeamPage
