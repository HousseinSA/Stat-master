"use client"
import { useEffect } from "react"
import { useLeagueStore } from "../../../../utils/StateStore"
import TeamStandingContainer from "./LeagueContainer/TeamStandingContainer"
import UCLStandings from "./UCl_container/uclStandings"
import TableContainer from "../../../table/TableContainer"

const LeagueStandingsContainer = ({ CompetionData }) => {
  // State and context initialization
  const { leagueCode, setCurrentMatchday, getTeamId, getClickedAction } =
    useLeagueStore()
  const leagueTable = CompetionData?.standings[0]?.table
  const currentMatchday = CompetionData?.season?.currentMatchday
  // Effect for setting current matchday
  useEffect(() => {
    setCurrentMatchday(currentMatchday)
    console.log(currentMatchday)
  }, [currentMatchday])
  function handelSelectedTeam(id) {
    getTeamId(id)
    getClickedAction("teams")
  }
  return (
    <section className="w-full h-full overflow-auto font-mono">
      <div className="w-full rounded-lg shadow-lg">
        <div className="w-full h-full">
          {leagueCode === "CL" ? (
            // Render UCLStandings component for Champions League
            <UCLStandings CompetionData={CompetionData} />
          ) : (
            // Render TableContainer with TeamStandingContainer for other leagues
            <TableContainer>
              {leagueTable?.map((teamState, index) => (
                <TeamStandingContainer
                  key={index}
                  teamState={teamState}
                  selectedTeam={handelSelectedTeam}
                />
              ))}
            </TableContainer>
          )}
        </div>
      </div>
    </section>
  )
}

export default LeagueStandingsContainer
