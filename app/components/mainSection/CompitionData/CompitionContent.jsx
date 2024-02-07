"use client"
import CompitionInfoButton from "./CompitionInfoButton"
import {
  useClickLeagueStore,
  useClickedActionStore,
} from "@/app/utils/StateStore"
import StandingsContainer from "./StandingsContainer/StandingsContainer"

const CompitionContent = ({ compitionData }) => {
  const infoButton = ["Standings", "Matches", "Teams", "Stats"]
  const { item, getClickedItem } = useClickedActionStore()
  const { itemColor } = useClickLeagueStore()
  console.log(itemColor)
  return (
    <div className=" flex flex-col rounded-md dark:text-white w-full border border-slate-500 h-full">
      <div
        style={{ borderColor: itemColor }}
        className={`flex font-semibold bg-[#001F3F] gap-4 group text-white p-4 items-center  border-b-2 transition duration-300`}
      >
        {infoButton?.map((btnName, index) => {
          return (
            <CompitionInfoButton
              activeBtn={getClickedItem}
              key={index}
              title={btnName}
              clickedButton={item === btnName}
            />
          )
        })}
      </div>
      <StandingsContainer standingsData={compitionData} />
    </div>
  )
}

export default CompitionContent
