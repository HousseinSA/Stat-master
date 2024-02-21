"use client"

import Image from "next/image"
import { useLeagueStore } from "../../../../utils/StateStore"
import ScorerRow from "./ScorerRow"
import TableContainer from "../../../table/TableContainer"

const StatsContainer = ({ CompetionData }) => {
  const { leagueColor, leagueCode, season } = useLeagueStore()
  const {
    scorers,
    competition: { emblem, name },
  } = CompetionData
  return (
    <div className="w-full h-full  overflow-auto">
      <div className="flex w-full flex-col p-3 justify-center gap-">
        <div className="flex bg-white top-0 sticky gap-2 items-center">
          <Image src={emblem} width={100} height={80} alt={name} />
          <h3 style={{ color: leagueColor }} className="text-xl font-semibold">
            {name}
          </h3>
        </div>
        <TableContainer>
          {scorers.map((scorer, index) => {
            return (
              <ScorerRow
                key={index}
                index={index}
                season={season}
                league={leagueCode}
                scorer={scorer}
                color={leagueColor}
              />
            )
          })}
        </TableContainer>
      </div>
    </div>
  )
}

export default StatsContainer
