import Image from "next/image";
import FormattedMatchTime from "./FormattedMatchTime";
import Link from "next/link";

const MatchRow = ({ match, season, league, changeAction }) => {
  const { homeTeam, awayTeam, score, utcDate } = match;
  // Check if home team and away team short names are available
  const isTeamsInfoAvailable =
    homeTeam.shortName !== null && awayTeam.shortName !== null;
  // Check if full-time scores are available
  const isScoresAvailable =
    score.fullTime.home !== null && score.fullTime.away !== null;
  {
  }
  return (
    <>
      {isTeamsInfoAvailable && (
        <tr>
          <td
            onClick={() => changeAction("teams")}
            className="item-hover sticky left-0 border px-4 py-3 shadow-sm hover:text-white "
          >
            <Link href={`/competion/${league}/${season}/teams/${homeTeam.id}`}>
              <div className="flex flex-col items-center justify-center gap-3 text-sm">
                <div className="relative mr-3 h-8 w-8 rounded-full md:block">
                  <Image
                    className="h-full w-full object-cover"
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
          <td className="text-ms border px-4 py-3 text-center font-semibold">
            <div className="flex flex-col ">
              {isScoresAvailable && (
                <>
                  <h4 className=" text-lg "> Full time</h4>
                  <div className="flex items-center justify-center gap-2">
                    <span className=" text-md">{score.fullTime.home}</span>
                    <span className="text-xl font-bold">-</span>
                    <span className=" text-md">{score.fullTime.away}</span>
                  </div>
                </>
              )}
              {isScoresAvailable && (
                <>
                  <h4 className="dark-gray-500 text-sm text-gray-500 dark:text-white">
                    Half time
                  </h4>
                  <div className="flex  items-center justify-center gap-2 text-gray-500 dark:text-white">
                    <span className="text-sm ">{score.halfTime.home}</span>
                    <span className="text-sm font-bold">-</span>
                    <span className="text-sm ">{score.halfTime.away}</span>
                  </div>
                </>
              )}
              <FormattedMatchTime matchTime={utcDate} />
            </div>
          </td>
          <td className="item-hover sticky left-0 border px-4  py-3 shadow-sm hover:text-white ">
            <Link href={`/competion/${league}/${season}/teams/${awayTeam.id}`}>
              <div className="flex flex-col items-center justify-center gap-3 text-sm">
                <div className="relative mr-3 h-8 w-8 rounded-full md:block">
                  <Image
                    className="h-full w-full object-cover"
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
  );
};

export default MatchRow;
