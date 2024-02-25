import Image from "next/image";
import FormattedMatchTime from "./FormattedMatchTime";
import Link from "next/link";

const MatchRow = ({ match, season, league, changeAction, leagueColor }) => {
  const { homeTeam, awayTeam, score, utcDate } = match;
  // Check if home team and away team short names are available
  const isTeamsInfoAvailable =
    homeTeam.shortName !== null && awayTeam.shortName !== null;
  // Check if full-time scores are available
  const isScoresAvailable =
    score.fullTime.home !== null && score.fullTime.away !== null;
  const winner = score.winner;

  const arrowSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-4 w-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
      />
    </svg>
  );
  console.log(match);
  return (
    <>
      {isTeamsInfoAvailable && (
        <div
          onClick={() => changeAction("teams")}
          className="flex flex-col justify-center rounded-md bg-[#F1F5F9] dark:bg-gray-800"
        >
          <div className="flex flex-col gap-2">
            <Link
              href={`/competition/${league}/${season}/teams/${homeTeam.id}`}
              className="item-hover  p-2 hover:text-white"
            >
              <div className="flex items-center gap-3 text-sm">
                <div className="relative h-8 w-8 flex-shrink-0 ">
                  <Image
                    className="h-full w-full  "
                    src={homeTeam.crest}
                    alt={homeTeam.shortName}
                    width={50}
                    height={50}
                  />
                </div>
                <span className="flex  flex-grow items-center gap-2">
                  {homeTeam.shortName}
                  {winner === "HOME_TEAM" && arrowSvg}
                </span>
              </div>
            </Link>

            <div className="flex flex-col items-center justify-center font-semibold ">
              {isScoresAvailable && (
                <>
                  <span className="text-sm">FT</span>
                  <div className="flex items-center gap-2">
                    <span>{score.fullTime.home}</span>
                    <span>:</span>
                    <span>{score.fullTime.away}</span>
                  </div>
                </>
              )}
              {utcDate ? (
                <FormattedMatchTime matchTime={utcDate} />
              ) : (
                <div className="text-white">TPD</div>
              )}
            </div>

            <Link
              href={`/competition/${league}/${season}/teams/${awayTeam.id}`}
              className="item-hover rounded-sm p-2 hover:text-white"
            >
              <div className="flex items-center gap-3 text-sm">
                <div className="relative h-8 w-8 flex-shrink-0 ">
                  <Image
                    className="h-full w-full "
                    src={awayTeam.crest}
                    alt={awayTeam.shortName}
                    width={50}
                    height={50}
                  />
                </div>
                <span className="flex flex-grow items-center gap-2">
                  {awayTeam.shortName}
                  {winner === "AWAY_TEAM" && arrowSvg}
                </span>
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default MatchRow;
