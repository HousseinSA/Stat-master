
import TeamContainer from "../../../../../components/mainSection/CompetionData/TeamsContainer/TeamContainer"
import { getTeamData } from "../../../../../utils/allDataFetchingFunctions"
const TeamPage = async ({ params }) => {
  const { teamId, action } = params
  const teamData = await getTeamData(action, teamId)
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return (
    <div>

        <TeamContainer teamData={teamData} />
     
    </div>
  )
}

export default TeamPage
