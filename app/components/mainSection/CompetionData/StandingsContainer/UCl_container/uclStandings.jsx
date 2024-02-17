import TeamStandingContainer from "../LeagueContainer/TeamStandingContainer"
import TableContainer from "../../../../table/TableContainer"

const UCLStandings = ({ CompetionData }) => {
  const uclStandings = CompetionData?.standings
  return (
    <TableContainer>
      {uclStandings?.map((groupTable, index) => {
        return (
          <>
            <tr key={index}>
              <td className="p-4 font-semibold">{groupTable.group}</td>
            </tr>
            {groupTable?.table?.map((table, index) => {
              return <TeamStandingContainer key={index} teamState={table} />
            })}
          </>
        )
      })}
    </TableContainer>
  )
}

export default UCLStandings
