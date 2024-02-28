import React from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
const TableContainer = ({
  competitionTable,
  season,
  changeAction,
  league,
  leagueColor,
}) => {
  const uclTable = competitionTable?.map((groupTable, index) => {
    return (
      <React.Fragment key={index}>
        <tr>
          <td style={{ color: leagueColor }} className="p-4 font-semibold">
            {groupTable.group}
          </td>
        </tr>
        {groupTable?.table?.map((table, index) => {
          return (
            <TableRow
              season={season}
              league={league}
              changeAction={changeAction}
              key={index}
              team={table}
              textColor={leagueColor}
            />
          );
        })}
      </React.Fragment>
    );
  });
  const leagueTable = competitionTable?.map((team, index) => {
    return (
      <TableRow
        team={team}
        key={index}
        season={season}
        changeAction={changeAction}
        league={league}
        textColor={leagueColor}
      />
    );
  });
  const table = league === "CL" ? uclTable : leagueTable;
  return (
    <table className="w-full overflow-auto">
      <TableHead league={league} textColor={leagueColor} />
      <tbody>{table}</tbody>
    </table>
  );
};

export default TableContainer;
