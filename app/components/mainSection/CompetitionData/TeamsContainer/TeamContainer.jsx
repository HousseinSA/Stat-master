"use client";
import Image from "next/image";
import Link from "next/link";
import { useLeagueStore } from "@/utils/StateStore";
import MatchRow from "../MatchesContainer/MatchRow";
import TitleAnimation from "app/components/layout/TitleAnimation";
import { getCompetitionColor } from "@/utils/getCompitionColor";
import { useEffect } from "react";

const TeamContainer = ({ teamData, teamMatches }) => {
  const { crest, name, founded, venue, website, coach, runningCompetitions } =
    teamData;
  const localLeague = teamData.runningCompetitions.filter(
    (competion) => competion.code !== "CL",
  );
  const { setClickedLeagueColor } = useLeagueStore();

  useEffect(() => {
    if (localLeague) {
      localLeague.forEach((competition) => {
        const { code } = competition;
        const color = getCompetitionColor(code);
        if (color) {
          setClickedLeagueColor(color);
        }
      });
    }
  }, []);

  const {
    leagueColor,
    currentMatchday,
    season,
    leagueCode,
    theme,
    getClickedAction,
  } = useLeagueStore();
  console.log(teamMatches);
  const infoColor = theme ? "#fff" : leagueColor;
  const textColor = { color: infoColor };
  const matches = teamMatches.matches;
  const matchIndex = matches.findIndex(
    (match) => match.matchday === currentMatchday,
  );
  const nextMatches = [
    matches[matchIndex],
    matches[matchIndex + 1],
    matches[matchIndex + 2],
  ];
  const generateGoogleSearchLink = (query) =>
    `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  return (
    <section className="h-full w-full">
      <div className="flex h-full w-full flex-col">
        <div className="flex w-full flex-col justify-center space-y-4 bg-[#F1F5F9] p-1 dark:bg-gray-700 md:p-3 ">
          <div className="flex flex-wrap items-center  justify-center gap-3 sm:justify-between">
            {crest && (
              <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:justify-start">
                <Link href={website} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={crest}
                    width={150}
                    className=" md:max-w-35 md:max-h-35 min-h-16 min-w-16"
                    height={150}
                    priority
                    alt={name}
                  />
                </Link>
                <h3 className="text-sm font-semibold sm:text-base md:text-xl  md:font-medium ">
                  {name}
                </h3>
              </div>
            )}
            <div>
              <div className="flex items-center gap-1">
                <span
                  style={textColor}
                  className="text-sm font-medium sm:text-base md:text-lg md:font-semibold"
                >
                  Founded:
                </span>

                {founded && (
                  <p className="text-xs text-slate-700 dark:text-gray-200 sm:text-base md:text-lg md:font-medium">
                    {founded}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-1">
                <span
                  style={textColor}
                  className="text-sm font-medium sm:text-base md:text-lg md:font-semibold "
                >
                  Stadium:
                </span>
                <Link
                  href={generateGoogleSearchLink(venue)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {venue && (
                    <p className="text-xs text-slate-700 dark:text-gray-200 sm:text-base  md:text-lg md:font-medium">
                      {venue}
                    </p>
                  )}
                </Link>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-2 md:flex-row  md:justify-between">
            <h1 className="flex items-center gap-1">
              <span
                style={textColor}
                className="text-sm font-medium sm:text-base md:text-lg md:font-semibold "
              >
                Coach:
              </span>
              {coach?.name && (
                <Link
                  href={generateGoogleSearchLink(coach.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-xs text-slate-700 dark:text-gray-200 sm:text-base  md:text-lg md:font-medium">
                    {coach.name}
                  </p>
                </Link>
              )}
            </h1>
            <div className="flex items-center justify-center gap-6 pb-2 md:pb-0 ">
              <h3
                style={textColor}
                className="hidden font-medium sm:block sm:text-base md:text-lg md:font-semibold"
              >
                Competitions
              </h3>
              <div className="flex w-full flex-1 flex-wrap items-center justify-center gap-6 md:flex-auto">
                {runningCompetitions.map((competition) =>
                  competition?.emblem ? (
                    <div
                      key={competition.id}
                      className="flex items-center justify-center gap-3"
                    >
                      <Link
                        href={generateGoogleSearchLink(competition.name)}
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
        <div className="w-full overflow-auto px-4 py-2">
          <TitleAnimation>
            <div
              style={textColor}
              className="text-base sm:text-lg  sm:font-medium md:font-semibold"
            >
              Next Matches
            </div>
          </TitleAnimation>
          <div className="grid w-full grid-cols-1 items-center justify-center gap-3 sm:grid-cols-2 md:grid-cols-3">
            {nextMatches.map((match, index) => (
              <MatchRow
                season={season}
                league={leagueCode}
                textColor={leagueColor}
                key={index}
                match={match}
                changeAction={getClickedAction}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamContainer;
