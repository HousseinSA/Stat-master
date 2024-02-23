import TableContainer from "../../../../layout/table/TableContainer";

const UCLStandings = ({ CompetionData, season, league, changeAction }) => {
  const uclStandings = CompetionData?.standings;
  console.log(uclStandings);
  return (
    // <TableContainer
    //   leagueTable={uclStandings}
    //   season={season}
    //   changeAction={changeAction}
    //   league={league}
    // />
    <div className="">there you are</div>
  );
};

export default UCLStandings;

// const uclTable = leagueTable?.map((groupTable, index) => {
//     return (
//       <>
//         <tr key={index}>
//           <td className="p-4 font-semibold">{groupTable.group}</td>
//         </tr>
//         {groupTable?.table?.map((table, index) => {
//           return (
//             <TableRow
//               season={season}
//               league={league}
//               changeAction={changeAction}
//               key={index}
//               team={table}
//             />
//           );
//         })}
//       </>
//     );
//   });
