"use client";
import Image from "next/image";
import Link from "next/link";
import { useLeagueStore } from "../../../../utils/StateStore";
import MatchRow from "../MatchesContainer/MatchRow";
const TeamContainer = ({ teamData, teamMatches }) => {
  const { crest, name, founded, venue, website, coach, runningCompetitions } =
    teamData;
  const {
    leagueColor,
    currentMatchday,
    season,
    leagueCode,
    theme,
    getClickedAction,
  } = useLeagueStore();

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
  return (
    <section className=" h-full w-full ">
      <div className="flex h-full w-full flex-col">
        <div className="flex flex-col justify-center bg-[#F1F5F9] p-4 dark:bg-gray-700 ">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Link href={website}>
                <Image src={crest} width={150} height={150} alt={name} />
              </Link>
              <h3 className="text-xl font-semibold ">{name}</h3>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span style={textColor} className="font-semibold ">
                  Founded:
                </span>
                <p className="text-lg text-slate-700  dark:text-white">
                  {founded}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <span style={textColor} className="font-semibold ">
                  Stadium:
                </span>
                <p className="text-lg text-slate-700 dark:text-white">
                  {venue}
                </p>
              </div>
            </div>
          </div>
          <div className="flex  items-center  gap-8">
            <h1 className="flex items-center gap-1">
              <span style={textColor} className="font-semibold">
                Coach:
              </span>
              <p className="text-lg text-slate-700 dark:text-white">
                {coach.name}
              </p>
            </h1>
            <div className=" flex   items-center justify-center gap-6">
              <h3 style={textColor} className="text-md font-semibold ">
                Competitions
              </h3>
              <div className="flex w-full items-center justify-center gap-6">
                {runningCompetitions.map((competition) => {
                  return (
                    <div
                      key={competition.id}
                      className="flex items-center justify-center gap-3"
                    >
                      <Image
                        src={competition.emblem}
                        width={80}
                        height={80}
                        alt={competition.name}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="md:px-4 md:py-2">
          <h3 style={textColor} className="font-semibold">
            Next Matches
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {nextMatches?.map((match, index) => (
              <MatchRow
                season={season}
                league={leagueCode}
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
