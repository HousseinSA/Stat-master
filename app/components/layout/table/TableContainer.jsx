import TableHead from "./TableHead";
import TableRow from "./TableRow";

const TableContainer = ({ leagueTable, season, changeAction, league }) => {
  return (
    <div className="overflow--auto ">
      <table className="w-full">
        <TableHead league={league} />
        <tbody>
          {leagueTable.map((team, index) => {
            return (
              <TableRow
                team={team}
                key={index}
                season={season}
                changeAction={changeAction}
                league={league}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableContainer;
