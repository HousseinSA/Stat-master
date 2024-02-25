
import TeamsContainer from "../../../../components/mainSection/CompetitionData/TeamsContainer/TeamsContainer";
import StatsContainer from "../../../../components/mainSection/CompetitionData/StatsContainer/StatsContainer";
import { getCompetitionData } from "../../../../utils/allDataFetchingFunctions";
import StandingsContainer from "../../../../components/mainSection/CompetitionData/StandingsContainer/StandingsContainer";
const MainDataPage = async ({ params }) => {
  const { league, season, action } = params;
  const competitionData = await getCompetitionData(league, season, action);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const actionList = {
    standings: <StandingsContainer competitionData={competitionData} />,
    teams: <TeamsContainer competitionData={competitionData} />,
    stats: <StatsContainer competitionData={competitionData} />,
  };
  return <>{actionList[action]}</>;
};

export default MainDataPage;
