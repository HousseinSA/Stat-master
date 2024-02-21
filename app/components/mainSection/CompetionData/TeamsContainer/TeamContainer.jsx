"use client"
import Image from "next/image"
import Link from "next/link"
import { useLeagueStore } from "../../../../utils/StateStore"
import NotFound from "../../../../error"
const TeamContainer = ({ teamData }) => {
  const { crest, name, founded, venue, website, coach, runningCompetitions } =
    teamData
  const { leagueColor } = useLeagueStore()
  const textColor = { color: leagueColor }

  // if (!teamData) {
  //   return <NotFound />
  // }

  return (
    <div className="flex flex-col justify-center gap-8 p-4 ">
      <div className="flex items-center justify-around ">
        <div className="flex gap-3  items-center">
          <Link href={website}>
            <Image src={crest} width={200} height={200} alt={name} />
          </Link>
          <h3 className="font-semibold text-xl ">{name}</h3>
        </div>
        <div>
          <div className="flex items-center gap-1">
            <span style={textColor} className="font-semibold">
              Founded:
            </span>
            <p className="text-lg text-slate-700">{founded}</p>
          </div>
          <div className="flex gap-1 items-center">
            <span style={textColor} className="font-semibold ">
              Stadium:
            </span>
            <p className="text-lg text-slate-700"> {venue}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-center">
        <h1 className="flex items-center gap-1">
          <span style={textColor} className="font-semibold">
            Coach:
          </span>
          <p className="text-lg text-slate-700">{coach.name}</p>
        </h1>
        <div className="flex flex-col  justify-center w-full items-center gap-6">
          <h3 style={textColor} className="text-xl font-bold">
            Competitons
          </h3>
          <div className="w-full flex items-center gap-6 justify-center">
            {runningCompetitions.map((competion) => {
              return (
                <div
                  key={competion.id}
                  className="flex gap-3 items-center justify-center"
                >
                  <Image
                    src={competion.emblem}
                    width={80}
                    height={80}
                    alt={competion.name}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamContainer
