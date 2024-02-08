"use client"
import CompitionInfoButton from "./CompitionInfoButton"
import {
  useClickLeagueStore,
  useClickedActionStore,
  useCurrentMatchDate,
} from "../../../utils/StateStore"
import StandingsContainer from "./StandingsContainer/StandingsContainer"
import { useEffect } from "react"

const CompitionContent = ({ compitionData }) => {
  // get current match date
  const currentMatchDate = compitionData.season.currentMatchday
  const {matchDate, getCurrentMatchDate } = useCurrentMatchDate()

  useEffect(() => {
    getCurrentMatchDate(currentMatchDate)
  }, [])
  // array of info button
  const infoButton = ["Standings", "Matches", "Teams", "Stats"]

  // hightlight the active button
  const { action, getClickedAction } = useClickedActionStore()
  // leauge color
  const { leagueColor } = useClickLeagueStore()
  return (
    <div className=" flex flex-col w-full rounded-md border-2 dark:text-white  h-full">
      <div
        style={{ borderColor: leagueColor }}
        className={`flex font-semibold w-full rounded-tr-md rounded-br-md bg-[#001F3F] gap-4 group text-white p-4 -center, getClickedAction flex-wrap border-b-4 transition duration-300`}
      >
        {infoButton?.map((btnName, index) => {
          return (
            <CompitionInfoButton
              activeBtn={getClickedAction}
              key={index}
              title={btnName}
              clickedButton={action === btnName}
            />
          )
        })}
      </div>
      <StandingsContainer standingsData={compitionData} />
    </div>
  )
}

export default CompitionContent
