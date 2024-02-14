"use client"
import { useLeagueStore } from "../../../../../utils/StateStore"
import TeamStandingContainer from "./TeamStandingContainer"
import UCLStandings from "../UCl_container/uclStandings"
import TableContainer from "../../../../table/TableContainer"
const LeagueStandingsContainer = ({ compitionData }) => {
  const { leagueCode } = useLeagueStore()
  const leagueTable = compitionData?.standings[0].table

  return (
    <section className=" w-full h-full overflow-auto font-mono">
      <div className="w-full rounded-lg shadow-lg">
        <div className="w-full h-full ">
          {leagueCode === "CL" ? (
            <UCLStandings compitionData={compitionData} />
          ) : (
            <TableContainer>
              {leagueTable?.map((teamState, index) => (
                <TeamStandingContainer key={index} teamState={teamState} />
              ))}
            </TableContainer>
          )}
        </div>
      </div>
    </section>
  )
}

export default LeagueStandingsContainer
