"use client"
import LeagueActionButton from "./LeagueActionButton"
import { useLeagueStore } from "../../../utils/StateStore"
import StandingsContainer from "./StandingsContainer/StandingsContainer"
import MatchesContainer from "./MatchesContainer/MatchesContainer"
import { LeageYear } from "./StandingsContainer/LeagueYear"
import { useState } from "react"

const CompitionContent = ({ compitionData }) => {
  // get data in league store

  // const {action, leagueCode,} = useLeagueStore(store=>{store.action, store.leagueCode, store.leagueColor, store.getClickedAction, store})

  const { leagueCode, leagueColor, action, getClickedAction } = useLeagueStore()

  const [compitionContent, setLeagueCompition] = useState(compitionData)
  const currentMatchDay = compitionContent?.season?.currentMatchday + 1
  const currentSeason = compitionContent?.filters?.season

  // array of info button
  const infoButton = ["Standings", "Matches", "Teams", "Stats"]

  function fetchActionData() {
    fetch(
      `/api/compition/route?league=${leagueCode}&matchday=${currentMatchDay}&season=${currentSeason}`
    )
      .then((res) => res.json())
      .then((result) => console.log(result))
  }
  // fetching data based on action and get the currentMatchDate
  function buttonClickActions(btnaction) {
    getClickedAction(btnaction)
    fetchActionData()
  }
  // useEffect(() => {
  //   fetchActionData()
  // }, [leagueCode])
  // action component object
  const ActionComponent = {
    Standings: (
      <div>
        <LeageYear currentSeason={currentSeason} />
        <StandingsContainer season={compitionContent} />
      </div>
    ),
    Matches: <MatchesContainer season={compitionContent} />,
  }
  return (
    <div className=" flex flex-col w-full rounded-md border-2 dark:text-white  h-full">
      <div
        style={{ borderColor: leagueColor }}
        className={`flex font-semibold w-full rounded-tr-md rounded-br-md bg-[#001F3F] gap-4 group text-white p-4 -center, getClickedAction flex-wrap border-b-4 transition duration-300`}
      >
        {infoButton?.map((btnName, index) => {
          return (
            <LeagueActionButton
              activeBtn={action === btnName}
              key={index}
              action={btnName}
              clickedButton={buttonClickActions}
            />
          )
        })}
      </div>
      {ActionComponent[action]}
    </div>
  )
}

export default CompitionContent
