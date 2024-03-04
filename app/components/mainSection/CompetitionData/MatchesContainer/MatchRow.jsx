import Image from "next/image";
import FormattedMatchTime from "./FormattedMatchTime";
import Link from "next/link";

const MatchRow = ({ match, season, league, changeAction, textColor }) => {
  // Check if match object is available and not null
  if (!match) {
    return null;
  }

  // Destructure match object and provide default values for properties
  const { homeTeam = {}, awayTeam = {}, score = {}, utcDate } = match;

  // Check if home and away team info is available
  const isTeamsInfoAvailable =
    homeTeam && awayTeam && homeTeam.shortName && awayTeam.shortName;

  // Check if full-time scores are available
  const isScoresAvailable =
    score &&
    score.fullTime &&
    score.fullTime.home !== null &&
    score.fullTime.away !== null;

  // Check if winner is available
  const winner = score && score.winner;

  // Arrow SVG element
  const arrowSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-4 w-4"
      style={{ color: textColor }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
      />
    </svg>
  );

  return (
    <div className="flex h-full w-full justify-center">
      {isTeamsInfoAvailable && (
        <div
          onClick={() => changeAction("teams")}
          className="flex h-full w-full flex-col items-center justify-center rounded-md bg-[#F1F5F9] dark:bg-gray-800"
        >
          <div className="flex h-full w-full flex-col justify-center gap-2">
            {homeTeam && (
              <Link
                href={`/competition/${league}/${season}/teams/${homeTeam.id}`}
                className={`item-hover rounded-tl-md rounded-tr-md p-2 ${
                  winner !== "HOME_TEAM" && "text-gray-600"
                }`}
              >
                <div className="flex h-full items-center justify-center gap-3 text-sm">
                  {homeTeam.crest && (
                    <div className="relative h-8 w-8 flex-shrink-0">
                      <Image
                        className="h-full w-full"
                        src={homeTeam.crest}
                        alt={homeTeam.shortName}
                        width={50}
                        height={50}
                      />
                    </div>
                  )}
                  <span className={`flex flex-grow items-center gap-2 `}>
                    {homeTeam.shortName}
                    {winner === "HOME_TEAM" && arrowSvg}
                  </span>
                </div>
              </Link>
            )}
            <div className="flex flex-col items-center justify-center font-semibold">
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
              {utcDate && <FormattedMatchTime matchTime={utcDate} />}
            </div>
            {awayTeam && (
              <Link
                href={`/competition/${league}/${season}/teams/${awayTeam.id}`}
                className={`item-hover rounded-bl-md rounded-br-md p-2 ${
                  winner !== "AWAY_TEAM" && "text-gray-600"
                }`}
              >
                <div className="flex h-full items-center justify-center gap-3 text-sm">
                  {awayTeam.crest && (
                    <div className="relative h-8 w-8 flex-shrink-0">
                      <Image
                        className="h-full w-full"
                        src={awayTeam.crest}
                        alt={awayTeam.shortName}
                        width={50}
                        height={50}
                      />
                    </div>
                  )}
                  <span className={`flex flex-grow items-center gap-2 `}>
                    {awayTeam.shortName}
                    {winner === "AWAY_TEAM" && arrowSvg}
                  </span>
                </div>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchRow;
