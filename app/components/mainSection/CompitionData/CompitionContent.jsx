"use client"
import LeagueActionButton from "./LeagueActionButton"
import { useLeagueStore } from "../../../utils/StateStore"
import StandingsContainer from "./StandingsContainer/LeagueContainer/StandingsContainer"
import MatchesContainer from "./MatchesContainer/MatchesContainer"
import { LeageYear } from "./StandingsContainer/LeagueContainer/LeagueYear"
import { useState } from "react"
import TeamContainer from "./TeamsContainer/TeamContainer"
const CompitionContent = ({ compitionData }) => {
  // get data in league store
  const { leagueCode, leagueColor, action, getClickedAction } = useLeagueStore()

  const [compitionContent, setLeagueCompition] = useState(
    compitionData && compitionData
  )
  const currentMatchDay = compitionContent?.season?.currentMatchday + 1
  const currentSeason = compitionContent?.filters?.season

  // array of info button
  const infoButton = ["standings", "matches", "teams", "stats"]

  const ActionComponent = {
    standings: (
      <>
        <LeageYear currentSeason={currentSeason} />
        <StandingsContainer season={compitionContent} />
      </>
    ),
    matches: <MatchesContainer season={compitionContent} />,
    teams: <TeamContainer />,
  }
  return (
    <div className=" flex flex-col w-full rounded-md dark:text-white  h-full">
      <div
        style={{ borderColor: leagueColor }}
        className={`flex font-semibold w-full rounded-tr-md  bg-[#001F3F] gap-4 group text-white p-4 flex-wrap border-b-4 transition duration-300`}
      >
        {infoButton?.map((btnName, index) => {
          return (
            <LeagueActionButton
              activeBtn={action === btnName}
              key={index}
              action={btnName}
              leagueCode={leagueCode}
              clickedButton={getClickedAction}
            />
          )
        })}
      </div>
      {ActionComponent[action]}
    </div>
  )
}

export default CompitionContent
