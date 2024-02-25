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

  return (
    <>
      {isTeamsInfoAvailable && (
        <div
          onClick={() => changeAction("teams")}
          className="flex h-full items-center gap-5 p-2"
        >
          <div className="flex flex-col gap-3">
            <Link
              href={`/competition/${league}/${season}/teams/${homeTeam.id}`}
              className="item-hover rounded-sm p-2"
            >
              <div className="flex items-center gap-3 text-sm">
                <div className="relative h-8 w-8 flex-shrink-0">
                  <Image
                    className="h-full w-full object-cover"
                    src={homeTeam.crest}
                    alt={homeTeam.shortName}
                    width={50}
                    height={50}
                  />
                </div>
                <span className="flex-grow">{homeTeam.shortName}</span>
              </div>
            </Link>
            <Link
              href={`/competition/${league}/${season}/teams/${awayTeam.id}`}
              className="item-hover rounded-sm p-2"
            >
              <div className="flex items-center gap-3 text-sm">
                <div className="relative h-8 w-8 flex-shrink-0 rounded-full">
                  <Image
                    className="h-full w-full object-cover"
                    src={awayTeam.crest}
                    alt={awayTeam.shortName}
                    width={50}
                    height={50}
                  />
                </div>
                <span className="flex-grow">{awayTeam.shortName}</span>
              </div>
            </Link>
          </div>

          <div className="h- border- flex flex-col items-center justify-center gap-3 border-l">
            {isScoresAvailable && (
              <div className="flex flex-col items-center">
                <span className="font-mono text-base">FT</span>
                <div className="flex items-center justify-center gap-2">
                  <span>{score.fullTime.home}</span>
                  <span>:</span>
                  <span>{score.fullTime.away}</span>
                </div>
              </div>
            )}
            <FormattedMatchTime matchTime={utcDate} />
          </div>
        </div>
      )}
    </>
  );
};

export default MatchRow;
