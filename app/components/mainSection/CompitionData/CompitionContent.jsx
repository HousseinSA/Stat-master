"use client"
import LeagueActionButton from "./LeagueActionButton"
import { useLeagueStore } from "../../../utils/StateStore"
import { LeageYear } from "./StandingsContainer/LeagueContainer/LeagueYear"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
const CompitionContent = ({ children }) => {
  // get data in league store
  const {
    leagueCode,
    getClickedAction,
    leagueColor,
    action,
    currentSeason,
    season,
  } = useLeagueStore()
  // array of info button
  const infoButton = ["standings", "matches", "teams", "stats"]

  const handelAction = (action) => {
    getClickedAction(action)
  }
  const { push } = useRouter()
  useEffect(() => {
    push(`/compition/${leagueCode}/${season}/${action}`)
  }, [action])
  return (
    <div className=" flex flex-col w-full rounded-md dark:text-white  h-full">
      <div
        style={{ borderColor: leagueColor }}
        className={`flex font-semibold w-full  rounded-tr-md  bg-[#001F3F] gap-4 group text-white p-4 flex-wrap border-b-4 transition duration-300`}
      >
        {infoButton?.map((btnName, index) => {
          return (
            <LeagueActionButton
              activeBtn={action === btnName}
              key={index}
              action={btnName}
              activeAction={handelAction}
            />
          )
        })}
      </div>
      {leagueCode === "CL" ? null : <LeageYear currentSeason={currentSeason} />}
      {children}
    </div>
  )
}

export default CompitionContent
