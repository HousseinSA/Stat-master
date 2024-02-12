"use client"
import { useLeagueStore } from "../../../../../utils/StateStore"
export const LeageYear = ({ currentSeason }) => {
  const seasonsList = Array.from(
    { length: 4 },
    (_, index) => currentSeason - index
  )

  const { season, setLeagueSeason, leagueColor, leagueCode } = useLeagueStore()
  // get state
  function handelSeasonChange(event) {
    const selectedSeason = event.target.value
    setLeagueSeason(selectedSeason)
    
  }

  // fetch year season data
  return (
    <div className="w-auto h-fit z-50 p-2 flex gap-3 bg-slate-100 text-slate-500 items-center ">
      <h3 className="font-semibold ">Season</h3>
      <select
        value={season}
        onChange={handelSeasonChange}
        style={{ borderColor: leagueColor }}
        className={`border rounded-sm outline-none transition duration-500`}
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
