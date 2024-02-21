"use client"
import { useEffect } from "react"
import { useLeagueStore } from "../../../../utils/StateStore"
import TeamStandingContainer from "./LeagueContainer/TeamStandingContainer"
import UCLStandings from "./UCl_container/uclStandings"
import TableContainer from "../../../layout/table/TableContainer"
const LeagueStandingsContainer = ({ CompetionData }) => {
  // State and context initialization
  const { leagueCode, setCurrentMatchday, season, getClickedAction } =
    useLeagueStore()
  const leagueTable = CompetionData?.standings[0]?.table
  const currentMatchday = CompetionData?.season?.currentMatchday
  // Effect for setting current matchday
  useEffect(() => {
    setCurrentMatchday(currentMatchday)
  }, [currentMatchday])
  return (
    <section className="w-full h-full overflow-auto font-mono">
      <div className="w-full rounded-lg shadow-lg">
        <div className="w-full h-full">
          {leagueCode === "CL" ? (
            // Render UCLStandings component for Champions League
            <UCLStandings
              CompetionData={CompetionData}
              season={season}
              changeAction={getClickedAction}
              league={leagueCode}
            />
          ) : (
            // Render TableContainer with TeamStandingContainer for other leagues
            <TableContainer>
              {leagueTable?.map((teamState, index) => (
                <TeamStandingContainer
                  key={index}
                  teamState={teamState}
                  season={season}
                  changeAction={getClickedAction}
                  league={leagueCode}
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
