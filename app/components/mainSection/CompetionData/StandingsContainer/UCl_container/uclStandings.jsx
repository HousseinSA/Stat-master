import TeamStandingContainer from "../LeagueContainer/TeamStandingContainer"
import TableContainer from "../../../../layout/table/TableContainer"

const UCLStandings = ({ CompetionData, season, league, changeAction }) => {
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
              return (
                <TeamStandingContainer
                  season={season}
                  league={league}
                  changeAction={changeAction}
                  key={index}
                  teamState={table}
                />
              )
            })}
          </>
        )
      })}
    </TableContainer>
  )
}

export default UCLStandings
