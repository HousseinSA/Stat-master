"use client";
import Image from "next/image";
import MatchesTable from "./MatchesTable";
import { useLeagueStore } from "@/utils/StateStore";
import { getCurrentSeason } from "@/utils/getCurrentSeason";

import { useRouter } from "next/navigation";
export default function MatchesContainer({
  currentMatches,
  nextMatches,
  prevMatches,
}) {
  // Destructure match data
  const { matches: matchesCurr } = currentMatches;
  const { matches: matchesNext } = nextMatches;
  const { matches: matchesPrev } = prevMatches;
  // Get current matchday from state store
  const {
    currentMatchday,
    leagueColor,
    season,
    setSeason,
    leagueCode,
    action,
  } = useLeagueStore();
  // Extract competition name and emblem
  const { name: competitionName, emblem } = currentMatches?.competition;
  // Construct  array with match data and corresponding names
  const matches = [
    { matches: matchesCurr, status: currentMatchday },
    { matches: matchesNext, status: currentMatchday + 1 },
    { matches: matchesPrev, status: currentMatchday - 1 },
  ];

  // checking if the current season
  const currentSeason = getCurrentSeason();
  const router = useRouter();
  function redirectToCurrentSeason() {
    setSeason(currentSeason);
    router.push(
      `/competition/${leagueCode}/${currentSeason}/${action}/matchday/${currentMatchday}`,
    );
  }
  if (currentSeason !== parseInt(season)) {
    return (
      <div
        style={{ color: leagueColor }}
        className="md:font-lg flex h-full w-full flex-col items-center justify-center gap-3 text-base"
      >
        <h1> Cannot have Matches of previous season {season}</h1>
        <button
          style={{ color: leagueColor }}
          className="item-hover action-hover bg-[#001F3F] p-3"
          onClick={redirectToCurrentSeason}
        >
          Current Season
        </button>
      </div>
    );
  }

  return (
    <section className="h-full w-full overflow-auto">
      <div className="sticky left-0 top-0 z-30 flex items-center gap-3 bg-[#F1F5F9]  dark:bg-gray-700">
        <Image
          src={emblem}
          width={50}
          className="mx-4 my-2 h-12 w-12"
          height={30}
          alt={competitionName}
        />
        <h3 style={{ color: leagueColor }} className="font-semibold">
          {competitionName}
        </h3>
      </div>
      <div>
        {matches.map((match, index) => (
          <MatchesTable key={index} matches={match} />
        ))}
      </div>
    </section>
  );
}
