import Image from "next/image"
import FormattedMatchTime from "./FormattedMatchTime"
import Link from "next/link"

const MatchRow = ({ match, season, league, changeAction }) => {
  const { homeTeam, awayTeam, score, utcDate } = match
  // Check if home team and away team short names are available
  const isTeamsInfoAvailable =
    homeTeam.shortName !== null && awayTeam.shortName !== null

  // Check if full-time scores are available
  const isScoresAvailable =
    score.fullTime.home !== null && score.fullTime.away !== null
  {
  }
  return (
    <>
      {isTeamsInfoAvailable && (
        <tr>
          <td
            onClick={() => changeAction("teams")}
            className="px-4 py-3 border hover:text-white item-hover sticky left-0 shadow-sm bg-white"
          >
            <Link href={`/competion/${league}/${season}/teams/${homeTeam.id}`}>
              <div className="flex flex-col gap-3 justify-center items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                  <Image
                    className="object-cover w-full h-full"
                    src={homeTeam.crest}
                    alt={homeTeam.shortName}
                    width={50}
                    height={50}
                  />
                </div>
                <span>{homeTeam.shortName}</span>
              </div>
            </Link>
          </td>
          <td className="px-4 py-3 text-center text-ms font-semibold border">
            <div className="flex flex-col ">
              {isScoresAvailable && (
                <>
                  <h4 className=" text-xl"> Full-Time</h4>
                  <div className="flex items-center justify-center gap-2">
                    <span className=" text-xl">{score.fullTime.home}</span>
                    <span className="font-bold text-xl">-</span>
                    <span className=" text-xl">{score.fullTime.away}</span>
                  </div>
                </>
              )}
              {isScoresAvailable && (
                <>
                  <h4 className="text-slate-500 text-sm"> Half-Time</h4>
                  <div className="flex  items-center justify-center gap-2">
                    <span className="text-sm text-gray-500">
                      {score.halfTime.home}
                    </span>
                    <span className="font-bold text-sm">-</span>
                    <span className="text-sm text-gray-500">
                      {score.halfTime.away}
                    </span>
                  </div>
                </>
              )}
              <FormattedMatchTime matchTime={utcDate} />
            </div>
          </td>
          <td className="px-4 py-3 border hover:text-white item-hover sticky left-0 shadow-sm bg-white">
            <Link href={`/competion/${league}/${season}/teams/${awayTeam.id}`}>
              <div className="flex flex-col gap-3 items-center justify-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                  <Image
                    className="object-cover w-full h-full"
                    src={awayTeam.crest}
                    alt={awayTeam.shortName}
                    width={50}
                    height={50}
                  />
                </div>
                <span>{awayTeam.shortName}</span>
              </div>
            </Link>
          </td>
        </tr>
      )}
    </>
  )
}

export default MatchRow
