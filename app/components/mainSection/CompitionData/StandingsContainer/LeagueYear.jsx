"use client"

import { useLeagueStore } from "../../../../utils/StateStore"
export const LeageYear = ({ currentSeason }) => {
  const seasonsList = Array.from(
    { length: 4 },
    (_, index) => currentSeason - index
  )

  const { season, setLeagueSeason } = useLeagueStore()
  // get state
  function handelSeasonChange(event) {
    const selectedSeason = event.target.value
    setLeagueSeason(selectedSeason)
  }
  // fetch year season data

  return (
    <div className="w-auto h-fit my-2 px-2 flex gap-3 items-center ">
      <h3>Season</h3>
      <select
        value={currentSeason}
        onChange={handelSeasonChange}
        className="border outline-none"
      >
        {seasonsList.map((season) => {
          return (
            <option key={season} value={season}>
              {season}
            </option>
          )
        })}
      </select>
    </div>
  )
}
