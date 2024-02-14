"use client"
import { useEffect } from "react"
import { useLeagueStore } from "../../../../../utils/StateStore"
import { useRouter } from "next/navigation"
export const LeageYear = () => {
  const { season, setSeason, currentSeason, leagueColor, action, leagueCode } =
    useLeagueStore()
  const route = useRouter()
  const seasonsList = Array.from(
    { length: 4 },
    (_, index) => currentSeason - index
  )
  function handelSeasonChange(event) {
    const Season = event.target.value
    setSeason(Season)
  }

  useEffect(() => {
    route.push(`/compition/${leagueCode}/${season}/${action}`)
  }, [season])
  console.log(season)
  return (
    <div className="w-auto h-fit z-50 p-2 flex gap-3 bg-slate-100 text-slate-500 items-center ">
      <h3 className="font-semibold ">Season</h3>
      <select
        value={season === 0 ? "loading" : season}
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
