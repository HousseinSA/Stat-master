"use client"
import { useState } from "react"
import LeagueItem from "./LeagueItem"
import { useClickLeagueStore } from "../../../utils/StateStore"

const CompitionsList = ({ compitionList }) => {
  const [compitions, setCompitions] = useState(compitionList?.competitions)
  const LeaguesToInclude = ["PL", "EC", "CL", "FL1", "BL1", "SA", "PD"]
  const filteredLeagues = compitions?.filter((comp) =>
    LeaguesToInclude.includes(comp?.code)
  )
  function handelSelectedLeague(code) {
    getClickedItem(code)
  }
  const { item, getClickedItem } = useClickLeagueStore()

  console.log(item)
  return (
    <div
      className={`h-auto sm:h-full w-full transition duration-300 border border-slate-500 rounded-md sm:max-w-60 bg-[#001F3F]`}
    >
      <div className=" sm:h-full p-2">
        <ul className="w-full flex flex-row flex-wrap sm:flex-nowrap text-white sm:flex-col gap-2">
          {filteredLeagues?.map(({ name, code, emblem }, index) => (
            <LeagueItem
              key={index}
              selectedComp={item === code}
              name={name}
              emblem={emblem}
              code={code}
              handelSelectedLeague={handelSelectedLeague}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CompitionsList
