"use client"
import { useLeagueStore } from "../../../utils/StateStore"
const TableHead = () => {
  const { leagueCode, action } = useLeagueStore()
  const statsHeaders = (
    <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase">
      <th className="px-4 py-3">Player</th>
      <th className="px-4 py-3">Goals</th>
      <th className="px-4 py-3">Assists</th>
      <th className="px-4 py-3">Played Matches</th>
      <th className="px-4 py-3">Team</th>
    </tr>
  )

  return (
    <thead
      className={`sticky ${action === "stats" ? "top-20 pt-8" : "top-0"} z-50`}
    >
      {action === "stats" ? (
        statsHeaders
      ) : (
        <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase">
          <th className="px-4 py-3 bg-gray-100 clear-start sticky z-20 left-0">
            Club
          </th>
          <th className="px-4 py-3">MP</th>
          <th className="px-4 py-3">W</th>
          <th className="px-4 py-3">D</th>
          <th className="px-4 py-3">L</th>
          <th className="px-4 py-3">GF</th>
          <th className="px-4 py-3">GA</th>
          <th className="px-4 py-3">GD</th>
          <th className="px-4 py-3">PTS</th>
          {leagueCode !== "CL" ? <th className="px-4 py-3">Form</th> : null}
        </tr>
      )}
    </thead>
  )
}

export default TableHead
