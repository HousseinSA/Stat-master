// import { Providers } from "../../../providers";
// import { useMemo, useState } from "react";
// import {
//   Table,
//   TableHeader,
//   TableColumn,
//   TableBody,
//   TableRow,
//   TableCell,
//   Pagination,
//   getKeyValue,
// } from "@nextui-org/react";

// const NextUITable = ({
//   competitionTable,
//   season,
//   changeAction,
//   league,
//   leagueColor,
// }) => {
//   const [page, setPage] = useState(1);
//   const rowsPerPage = 4;

//   const pages = Math.ceil(competitionTable.length / rowsPerPage);

//   const items = useMemo(() => {
//     const start = (page - 1) * rowsPerPage;
//     const end = start + rowsPerPage;

//     return competitionTable.slice(start, end);
//   }, [page, competitionTable]);

//   return (
//     <Providers>
//       <Table
//         aria-label="Example table with client side pagination"
//         bottomContent={
//           <div className="flex w-full justify-center">
//             <Pagination
//               isCompact
//               showControls
//               showShadow
//               color="secondary"
//               page={page}
//               total={pages}
//               onChange={(page) => setPage(page)}
//             />
//           </div>
//         }
//         classNames={{
//           wrapper: "min-h-[222px]",
//         }}
//       >
//         <TableHeader>
//           <TableColumn key="club">Club</TableColumn>
//           <TableColumn key="mp">MP</TableColumn>
//           <TableColumn key="w">W</TableColumn>
//           <TableColumn key="d">D</TableColumn>
//           <TableColumn key="l">L</TableColumn>
//           <TableColumn key="gf">GF</TableColumn>
//           <TableColumn key="ga">GA</TableColumn>
//           <TableColumn key="gd">GD</TableColumn>
//           <TableColumn key="pts">PTS</TableColumn>
//           {league !== "CL" && <TableColumn key="form">FORM</TableColumn>}
//         </TableHeader>
//         <TableBody>
//           {items.map((team, index) => (
//             <TableRow
//               key={index}
//               team={team}
//               league={league}
//               season={season}
//               changeAction={changeAction}
//               textColor={leagueColor}
//             >
//               <TableCell>{team.club}</TableCell>
//               <TableCell>{team.mp}</TableCell>
//               <TableCell>{team.w}</TableCell>
//               <TableCell>{team.d}</TableCell>
//               <TableCell>{team.l}</TableCell>
//               <TableCell>{team.gf}</TableCell>
//               <TableCell>{team.ga}</TableCell>
//               <TableCell>{team.gd}</TableCell>
//               <TableCell>{team.pts}</TableCell>
//               {league !== "CL" && <TableCell>{team.form}</TableCell>}
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </Providers>
//   );
// };

// export default NextUITable;
