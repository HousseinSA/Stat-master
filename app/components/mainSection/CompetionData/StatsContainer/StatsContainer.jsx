"use client"

import { useLeagueStore } from "../../../../utils/StateStore"

const StatsContainer = () => {
  const { teamId } = useLeagueStore()
  // console.log(teamId)
  return <div>StatsContainer</div>
}

export default StatsContainer
