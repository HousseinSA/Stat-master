import CompetionContent from "../../../../../../components/mainSection/CompetionData/CompetionContent";
import MatchesContainer from "../../../../../../components/mainSection/CompetionData/MatchesContainer/MatchesContainer";
import { getCompetionData } from "../../../../../../utils/allDataFetchingFunctions";

const fetchMatchData = async (league, season, action, matchday, stage) => {
  return getCompetionData(league, season, action, matchday, stage);
};

const page = async ({ params }) => {
 

  const { action, league, season, matchday } = params;
  const matchdayNum = Number(matchday);
  const uclStages = ["LAST_16", "QUARTER_FINALS", "SEMI_FINALS"];
  // Fetching data for current, previous, and next matchdays in parallel
  const [currentMatches, prevMatches, nextMatches] = await Promise.all([
    fetchMatchData(league, season, action, matchdayNum, uclStages[0]),
    fetchMatchData(league, season, action, matchdayNum - 1, uclStages[1]),
    fetchMatchData(league, season, action, matchdayNum + 1, uclStages[2]),
  ]);

  return (
    <MatchesContainer
      currentMatches={currentMatches}
      prevMatches={prevMatches}
      nextMatches={nextMatches}
    />
  );
};

export default page;
