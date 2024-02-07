import Image from "next/image"
import React from "react"

const TeamStateContainer = (teamState) => {
  const {
    draw,
    form,
    goalDifference,
    goalsAgainst,
    goalsFor,
    lost,
    playedGames,
    points,
    position,
    won,
  } = teamState
  //   const { crest, shortName } = teamState.team
  return (
    <div className="w-full flex item-center">
      <div className="flex items-center gap-2">
        <span>{position}</span>
        {/* <Image src={crest} width={50} height={50} alt={shortName} />
        <h3 className="text-lg font-semibold">{shortName}</h3> */}
      </div>
      <div className="flex gap-4 items-center">
        <span>{won}</span>
        <span>{won}</span>
        <span>{won}</span>
        <span>{won}</span>
        <span></span>
      </div>
    </div>
  )
}

export default TeamStateContainer
// draw,
//     form,
//     goalDifference,
//     goalsAgainst,
//     goalsFor,
//     lost,
//     playedGames,
//     points,
//     position,
//     won,
