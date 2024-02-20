import React from "react"
import MatchRow from "./MatchRow"
import { useLeagueStore } from "../../../../utils/StateStore"

const MatchesTable = ({ matches }) => {
  const { leagueColor, leagueCode, season, getClickedAction } = useLeagueStore()
  // console.log(matches)
  // Determine matchday title
  let matchdayTitle
  if (leagueCode === "CL") {
    const isAnyMatchScheduled = matches?.matches?.some(
      (match) => match.status !== "SCHEDULED"
    )
    matchdayTitle = isAnyMatchScheduled && `Stage: ${matches.matches[0]?.stage}`
  } else {
    matchdayTitle = `Matchday ${matches.name}`
  }

  return (
    <>
      <h1 style={{ color: leagueColor }} className="p-3 font-semibold">
        {matchdayTitle}
      </h1>
      <table className="w-full">
        <tbody>
          {matches.matches?.map((match, index) => (
            <MatchRow
              season={season}
              league={leagueCode}
              key={index}
              match={match}
              changeAction={getClickedAction}
            />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default MatchesTable
