"use client";
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
    getTeamId,
    action,
  } = useLeagueStore();
  // Construct  array with match data and corresponding names
  const matches = [
    { matches: matchesCurr, status: currentMatchday },
    { matches: matchesNext, status: currentMatchday + 1 },
    { matches: matchesPrev, status: currentMatchday - 1 },
  ];
  console.log(matches);
  function changeTeamId(teamId) {
    getTeamId(teamId);
  }
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
    <section className=" h-full w-full overflow-auto">
      <div>
        {matches.map((match, index) => (
          <MatchesTable
            key={index}
            matches={match}
            changeTeamId={changeTeamId}
          />
        ))}
      </div>
    </section>
  );
}
