"use client";
import Image from "next/image";
import Link from "next/link";
import { useLeagueStore } from "@/utils/StateStore";
import MatchRow from "../MatchesContainer/MatchRow";
import TitleAnimation from "app/components/layout/TitleAnimation";
import { getCompetitionColor } from "@/utils/getCompetitionColor";
import { googleSearch } from "@/utils/GoogleSearch";
import { useEffect } from "react";

// use client
const TeamContainer = ({ teamData, teamMatches }) => {
  const { crest, name, founded, venue, website, coach, runningCompetitions } =
    teamData;
  const { setClickedLeagueColor } = useLeagueStore();
  const { leagueColor, season, leagueCode, theme, setClickedAction } =
    useLeagueStore();

  useEffect(() => {
    const localLeague = runningCompetitions.filter(
      (competition) => competition.code !== "CL",
    );
    if (localLeague) {
      localLeague.forEach((competition) => {
        const { code } = competition;
        const color = getCompetitionColor(code);
        if (color) {
          setClickedLeagueColor(color);
        }
      });
    }
  }, []); /* eslint-disable-line */
  const infoColor = theme ? "#fff" : leagueColor;

  return (
    <section className="h-full w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="sticky left-0 top-0 flex w-full flex-col  bg-[#F1F5F9] px-3 pb-2 dark:bg-gray-700 md:px-2">
          <div className="flex flex-wrap items-center justify-around gap-3 sm:justify-between">
            {crest && (
              <TitleAnimation>
                <div className="flex flex-col items-center justify-center gap-2 sm:justify-start md:flex-row">
                  <Link
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={crest}
                      width={100}
                      className="md:max-w-35 md:max-h-35 min-h-16 min-w-16"
                      height={100}
                      priority
                      alt={name}
                    />
                  </Link>
                  <h3
                    className="text-sm font-semibold sm:text-base md:text-xl md:font-medium"
                    style={{ color: infoColor }}
                  >
                    {name}
                  </h3>
                </div>
              </TitleAnimation>
            )}
            <div className="flex flex-col items-center justify-center gap-1 md:items-start">
              <div className="flex items-center  gap-1">
                <span
                  className="text-sm font-medium sm:text-base md:text-lg md:font-semibold"
                  style={{ color: infoColor }}
                >
                  Founded:
                </span>
                {founded && (
                  <p className="text-sm text-slate-700 dark:text-gray-200 sm:text-base md:text-lg md:font-medium">
                    {founded}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-1 pr-2">
                <span
                  className="text-sm font-medium sm:text-base md:text-lg md:font-semibold"
                  style={{ color: infoColor }}
                >
                  Stadium:
                </span>
                <Link
                  href={googleSearch(venue)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {venue && (
                    <p className="text-sm text-slate-700 dark:text-gray-200 sm:text-base md:text-lg md:font-medium">
                      {venue}
                    </p>
                  )}
                </Link>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-2 md:flex-row md:justify-between">
            <div className="flex items-center gap-1">
              <span
                className="text-sm font-medium sm:text-base md:text-lg md:font-semibold"
                style={{ color: infoColor }}
              >
                Coach:
              </span>
              {coach?.name && (
                <Link
                  href={googleSearch(coach.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-sm text-slate-700 dark:text-gray-200 sm:text-base md:text-lg md:font-medium">
                    {coach.name}
                  </p>
                </Link>
              )}
            </div>
            <div className="flex flex-col items-center justify-center gap-2  pr-2 md:gap-6 lg:flex-row">
              <h3
                className="font-medium sm:block sm:text-base md:text-lg md:font-semibold"
                style={{ color: infoColor }}
              >
                Competitions
              </h3>
              <div className="flex w-full flex-1 flex-wrap items-center justify-center gap-2 md:flex-auto md:gap-6">
                {runningCompetitions.map((competition) =>
                  competition?.emblem ? (
                    <div
                      key={competition.id}
                      className="flex items-center justify-center gap-3"
                    >
                      <Link
                        href={googleSearch(competition.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={competition.emblem}
                          width={50}
                          height={50}
                          className="min-h-10 min-w-10 md:h-16 md:w-16"
                          alt={competition.name}
                        />
                      </Link>
                    </div>
                  ) : null,
                )}
              </div>
            </div>
          </div>
        </div>
        {teamMatches?.matches?.length === 0 ? (
          <div
            className="flex h-full w-full flex-col items-center justify-center text-sm font-medium md:text-lg md:font-semibold lg:text-xl"
            style={{ color: infoColor }}
          >
            Sorry, couldn&apos;t find Matches Data for {name}
          </div>
        ) : (
          <div className=" w-full overflow-auto px-4 pb-2">
            <TitleAnimation>
              <div
                className="text-base sm:text-lg  sm:font-medium md:font-semibold"
                style={{ color: infoColor }}
              >
                Next Matches
              </div>
            </TitleAnimation>
            <div className="grid w-full grid-cols-1 items-center justify-center gap-3 sm:grid-cols-2 md:grid-cols-3">
              {teamMatches?.matches?.map((match, index) => (
                <MatchRow
                  season={season}
                  league={leagueCode}
                  textColor={leagueColor}
                  key={index}
                  match={match}
                  changeAction={setClickedAction}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamContainer;
