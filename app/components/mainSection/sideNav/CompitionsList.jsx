"use client"
import { useState } from "react"
import LeagueItem from "./LeagueItem"
import { useClickLeagueStore } from "../../../utils/StateStore"
const CompitionsList = ({ compitionList }) => {
  const [compitions, setCompitions] = useState(compitionList?.competitions)
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
  function handelSelectedLeague(code, leagueColor) {
    getClickedLeauge(code)
    getClickedLeagueColor(leagueColor)
  }
  const { leagueCode, getClickedLeauge, getClickedLeagueColor } =
    useClickLeagueStore()
  return (
    <div
      className={`h-auto md:h-full w-full  transition duration-300 border border-slate-500 rounded-tl-md rounded-bl-md max-w-60 bg-[#001F3F]`}
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
