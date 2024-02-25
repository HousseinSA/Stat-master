import TableContainer from "../../../../layout/table/TableContainer";

const UCLStandings = ({ CompetitionData, season, league, changeAction }) => {
  const uclStandings = CompetitionData?.standings;

  return (
    <TableContainer
      leagueTable={uclStandings}
      season={season}
      changeAction={changeAction}
      league={league}
    />
  );
};

export default UCLStandings;
