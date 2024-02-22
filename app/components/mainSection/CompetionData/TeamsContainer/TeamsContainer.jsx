"use client"

import { useLeagueStore } from "../../../../utils/StateStore"
import TeamCard from "./TeamCard"
const TeamsContainer = ({ CompetionData }) => {
  const teams = CompetionData.teams
  const { leagueCode, season, action, leagueColor } = useLeagueStore()
  return (
    <div className="w-full min-w-full flex gap-4 justify-center flex-wrap overflow-y-scroll items-center p-2">
      {teams.map((team, index) => {
        return (
          <TeamCard
            key={index}
            leauge={leagueCode}
            action={action}
            season={season}
            leagueColor={leagueColor}
            team={team}
          />
        )
      })}
    </div>
  )
}

export default TeamsContainer
