import TeamStandingContainer from "../LeagueContainer/TeamStandingContainer"
import TableContainer from "../../../../table/TableContainer"

const UCLStandings = ({ CompetionData }) => {
  const uclStandings = CompetionData?.standings
  return (
    <TableContainer>
      {uclStandings?.map((group) => {
        return (
          <>
            <tr>
              <td className="p-4 font-semibold">{group.group}</td>
            </tr>
            {group?.table?.map((table, index) => {
              return <TeamStandingContainer key={index} teamState={table} />
            })}
          </>
        )
      })}
    </TableContainer>
  )
}

export default UCLStandings
