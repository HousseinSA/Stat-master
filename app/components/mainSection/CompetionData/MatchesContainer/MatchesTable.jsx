import React from "react"
import MatchRow from "./MatchRow"
import { useLeagueStore } from "../../../../utils/StateStore"

const MatchesTable = ({ matches }) => {
  const { leagueColor, leagueCode } = useLeagueStore()
  const matchdayTitle =
    leagueCode === "CL"
      ? `Stage: ${matches.matches[0]?.stage}`
      : `Matchday ${matches.name}`

  return (
    <>
      <h1 style={{ color: leagueColor }} className="p-3 font-semibold">
        {matchdayTitle}
      </h1>
      <table className="w-full">
        <tbody>
          {matches.matches?.map((match, index) => (
            <MatchRow key={index} match={match} />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default MatchesTable
