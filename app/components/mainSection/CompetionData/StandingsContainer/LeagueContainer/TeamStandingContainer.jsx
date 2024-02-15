import Image from "next/image"
import React from "react"
const TeamStandingContainer = ({ teamState }) => {
  const {
    draw,
    goalDifference,
    goalsAgainst,
    goalsFor,
    lost,
    playedGames,
    points,
    position,
    won,
    // form,
  } = teamState
  const { crest, shortName } = teamState.team
  return (
    <tr>
      <td className="px-4 py-3 border hover:text-white item-hover sticky left-0 shadow-sm z-20 bg-white">
        <div className="flex gap-3 items-center text-sm">
          <span>{position}</span>
          <div className="relative w-8 h-8 mr-3 rounded-full md:block">
            <Image
              className="object-cover w-full h-full"
              src={crest}
              alt={shortName}
              width={50}
              height={50}
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-xs ">{shortName}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3 text-ms font-semibold border">{playedGames}</td>
      <td className="px-4 py-3 text-xs border">
        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
          {won}
        </span>
      </td>
      <td className="px-4 py-3 text-sm border">
        <span className="px-2 py-1 font-semibold leading-tight text-slate-700 bg-slate-100 rounded-sm">
          {draw}
        </span>
      </td>
      <td className="px-4 py-3 text-sm border">
        <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm">
          {lost}
        </span>
      </td>
      <td className="px-4 py-3 text-sm border">{goalsFor}</td>
      <td className="px-4 py-3 text-sm border">{goalsAgainst}</td>
      <td className="px-4 py-3 text-sm border">{goalDifference}</td>
      <td className="px-4 py-3 font-semibold text-sm border">{points}</td>
    </tr>
  )
}

export default TeamStandingContainer
