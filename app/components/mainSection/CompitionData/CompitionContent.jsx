import CompitionInfoButton from "./CompitionInfoButton"
import { useClickedActionStore } from "@/app/utils/StateStore"

const CompitionContent = ({ leagueData }) => {
  const infoButton = ["Standings", "Matches", "Teams", "Stats"]
  const { item, getClickedItem } = useClickedActionStore()
  return (
    <div className="rounded-md dark:text-white w-full   border border-slate-500 h-full flex-1  ">
      <div className=" flex font-semibold bg-[#001F3F]  gap-4 group text-white p-4 items-center">
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
    </div>
  )
}

export default CompitionContent
