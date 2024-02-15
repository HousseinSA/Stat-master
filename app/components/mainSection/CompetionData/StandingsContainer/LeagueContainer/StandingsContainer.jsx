"use client"
import { useLeagueStore } from "../../../../../utils/StateStore"
import TeamStandingContainer from "./TeamStandingContainer"
import UCLStandings from "../UCl_container/uclStandings"
import TableContainer from "../../../../table/TableContainer"
import { useEffect } from "react"
const LeagueStandingsContainer = ({ CompetionData }) => {
  const { leagueCode, setCurrentMatchday } = useLeagueStore()
  const leagueTable = CompetionData?.standings[0].table
  const currentMatchDay = CompetionData.season.currentMatchday
  useEffect(() => {
    setCurrentMatchday(currentMatchDay)
  }, [CompetionData])

  // /compition/${code}/${currentSeason}/standings`
  return (
    <section className=" w-full h-full overflow-auto font-mono">
      <div className="w-full rounded-lg shadow-lg">
        <div className="w-full h-full">
          {leagueCode === "CL" ? (
            <UCLStandings CompetionData={CompetionData} />
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
