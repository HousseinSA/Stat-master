import TeamContainer from "../../../../../components/mainSection/CompetitionData/TeamsContainer/TeamContainer";
import {
  getTeamData,
  getTeamMatches,
} from "../../../../../utils/allDataFetchingFunctions";
const TeamPage = async ({ params }) => {
  const { teamId, action } = params;

  const [data, matches] = await Promise.all([
    getTeamData(action, teamId),
    getTeamMatches(action, teamId),
  ]);

  return <TeamContainer teamData={data} teamMatches={matches} />;
};

export default TeamPage;
