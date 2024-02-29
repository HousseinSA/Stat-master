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
  const uclTable = competitionTable?.map((groupTable, index) => (
    <React.Fragment key={index}>
      <tr>
        <td
          style={{ color: leagueColor, background: "transparent" }}
          className="p-4 font-semibold"
        >
          {groupTable.group}
        </td>
      </tr>
      {groupTable?.table?.map((table, index) => (
        <TableRow
          season={season}
          league={league}
          changeAction={changeAction}
          key={index}
          team={table}
          textColor={leagueColor}
        />
      ))}
    </React.Fragment>
  ));

  const leagueTable = competitionTable?.map((team, index) => (
    <TableRow
      team={team}
      key={index}
      season={season}
      changeAction={changeAction}
      league={league}
      textColor={leagueColor}
    />
  ));

  const table = league === "CL" ? uclTable : leagueTable;

  return (
    <div className="h-full w-full overflow-auto">
      <table className="h-auto w-full text-sm ">
        <TableHead league={league} textColor={leagueColor} />
        <tbody className="divide-y divide-gray-400 bg-white dark:border-gray-700  ">
          {table}
        </tbody>
      </table>
    </div>
  );
};

export default TableContainer;
