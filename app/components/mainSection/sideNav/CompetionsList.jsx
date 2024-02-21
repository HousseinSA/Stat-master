"use client"
import LeagueItem from "./LeagueItem"
import { useLeagueStore } from "../../../utils/StateStore"
import { useEffect, useState } from "react"
const CompetionsList = ({ competionsList }) => {
  const [competions, setCompetions] = useState(competionsList?.competitions)
  const currentSeason = competions[0]?.currentSeason?.startDate?.substring(0, 4)
  const LeaguesToInclude = ["PL", "DED", "PPL", "CL", "FL1", "BL1", "PD", "SA"]

  const filteredLeagues = competions?.filter((comp) =>
    LeaguesToInclude.includes(comp?.code)
  )
  console.log(competionsList)
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
    getClickedLeauge,
    getClickedLeagueColor,
    setCurrentSeason,
    setCurrentMatchday,
    season,
    leagueCode,
    action,
    setCompList,
  } = useLeagueStore()
  function handelSelectedLeague(code, leagueColor, matchday) {
    setCurrentSeason(currentSeason)
    getClickedLeauge(code)
    getClickedLeagueColor(leagueColor)
    setCurrentMatchday(matchday)
    setCompList(competionsList)
  }
  return (
    <div
      className={`h-auto md:h-full w-full transition duration-300 rounded-tl-md rounded-bl-md max-w-60 bg-[#001F3F]`}
    >
      <div className="p-2">
        <ul className="w-full flex flex-row flex-wrap text-white md:flex-col gap-2">
          {filteredLeagues?.map(
            ({ name, code, emblem, currentSeason }, index) => {
              const leagueColor = leagueColors[index]
              return (
                <LeagueItem
                  key={index}
                  selectedComp={leagueCode === code}
                  name={name}
                  season={season}
                  leagueColor={leagueColor}
                  emblem={emblem}
                  code={code}
                  action={action}
                  matchday={currentSeason?.currentMatchday}
                  handelSelectedLeague={handelSelectedLeague}
                />
              )
            }
          )}
        </ul>
      </div>
    </div>
  )
}

export default CompetionsList
