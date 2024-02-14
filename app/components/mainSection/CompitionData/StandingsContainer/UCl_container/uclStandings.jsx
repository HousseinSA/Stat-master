import TeamStandingContainer from "../LeagueContainer/TeamStandingContainer"
import TableContainer from "../../../../table/TableContainer"

const UCLStandings = ({ compitionData }) => {
  const uclStandings = compitionData?.standings
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
