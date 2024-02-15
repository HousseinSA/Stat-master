"use client"
import LeagueActionButton from "./LeagueActionButton"
import { useLeagueStore } from "../../../utils/StateStore"
import { LeageYear } from "./StandingsContainer/LeagueContainer/LeagueYear"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
const CompetionContent = ({ children }) => {
  // get data in league store
  const {
    leagueCode,
    getClickedAction,
    leagueColor,
    action,
    currentSeason,
    season,
    currentMatchday,
  } = useLeagueStore()
  // array of action buttons
  const actionButton = ["standings", "matches", "teams", "stats"]
  const handelAction = (action) => {
    getClickedAction(action)
  }
  const { push } = useRouter()
  useEffect(() => {
    if (action === "matches") {
      push(
        `/competion/${leagueCode}/${season}/${action}/matchday/${currentMatchday}`
      )
    } else {
      push(`/competion/${leagueCode}/${season}/${action}`)
    }
  }, [action])
  return (
    <div className=" flex flex-col w-full rounded-md dark:text-white  h-full">
      <div
        style={{ borderColor: leagueColor }}
        className={`flex font-semibold w-full  rounded-tr-md  bg-[#001F3F] gap-4 group text-white p-4 flex-wrap border-b-4 transition duration-300`}
      >
        {actionButton?.map((btnName, index) => {
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

export default CompetionContent
