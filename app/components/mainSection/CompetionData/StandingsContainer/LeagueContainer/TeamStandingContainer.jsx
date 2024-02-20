import Image from "next/image"
import Link from "next/link"
const TeamStandingContainer = ({ teamState, league, season, changeAction }) => {
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
    form,
  } = teamState
  const { crest, shortName, id } = teamState.team

  return (
    <tr>
      <td
        className="px-4 py-3 border hover:text-white item-hover sticky left-0 shadow-sm z-20 bg-white"
        onClick={() => changeAction("teams")}
      >
        <Link href={`/competion/${league}/${season}/teams/${id}`}>
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
              <p className="text-sm font-serif ">{shortName}</p>
            </div>
          </div>
        </Link>
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
      <td className="px-4 py-3 font-bold text-sm border">{points}</td>
      {form && (
        <td className="py-2 h-full text-white  font-semibold text-sm flex justify-center items-center gap-1">
          {form.split(",").map((state, index) => {
            return (
              <div
                key={index}
                className={`mt-2 p-2 w-5 h-5 text-sm font-thin flex items-center justify-center rounded-full ${
                  state === "W"
                    ? "bg-green-500"
                    : state === "D"
                    ? "bg-slate-500"
                    : state === "L" && "bg-red-500"
                }`}
              >
                {state}
              </div>
            )
          })}
        </td>
      )}
    </tr>
  )
}

export default TeamStandingContainer
