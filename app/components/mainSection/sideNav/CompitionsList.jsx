"use client"
import LeagueItem from "./LeagueItem"
import { useLeagueStore } from "../../../utils/StateStore"
import { useEffect, useState } from "react"
const CompitionsList = ({ compitionList }) => {
  const [compitions, setCompitions] = useState(compitionList?.competitions)
  const currentSeason = compitions[0].currentSeason.startDate.substring(0, 4)
  const LeaguesToInclude = ["PL", "DED", "PPL", "CL", "FL1", "BL1", "PD", "SA"]
  const filteredLeagues = compitions?.filter((comp) =>
    LeaguesToInclude.includes(comp?.code)
  )
  const leagueColors = [
    "#3C0844",
    "#09084E",
    "#CFFB12",
    "#D40914",
    "#19C030",
    "#2C3C82",
    "#FFD337",
    "#FAEC40",
  ]

  const {
    leagueCode,
    getClickedLeauge,
    getClickedLeagueColor,
    setCurrentSeason,
  } = useLeagueStore()

  function handelSelectedLeague(code, leagueColor) {
    setCurrentSeason(currentSeason)
    getClickedLeauge(code)
    getClickedLeagueColor(leagueColor)
  }
  return (
    <div
      className={`h-auto md:h-full w-full transition duration-300 rounded-tl-md rounded-bl-md max-w-60 bg-[#001F3F]`}
    >
      <div className="p-2">
        <ul className="w-full flex flex-row flex-wrap  text-white md:flex-col gap-2">
          {filteredLeagues?.map(({ name, code, emblem }, index) => {
            const leagueColor = leagueColors[index]
            return (
              <LeagueItem
                key={index}
                selectedComp={leagueCode === code}
                name={name}
                leagueColor={leagueColor}
                emblem={emblem}
                code={code}
                handelSelectedLeague={handelSelectedLeague}
              />
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default CompitionsList
