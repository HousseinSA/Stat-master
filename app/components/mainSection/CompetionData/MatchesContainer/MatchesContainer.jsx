"use client";
import Image from "next/image";
import MatchesTable from "./MatchesTable";
import { useLeagueStore } from "../../../../utils/StateStore";

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
  const { currentMatchday } = useLeagueStore();
  // Extract competition name and emblem
  const { name: competitionName, emblem } = currentMatches?.competition;
  const noData = [currentMatches, nextMatches, prevMatches].every(Boolean);
  // Construct matches array with match data and corresponding names
  const matches = [
    { matches: matchesCurr, name: currentMatchday },
    { matches: matchesNext, name: currentMatchday + 1 },
    { matches: matchesPrev, name: currentMatchday - 1 },
  ];

  return (
    <div className="overflow-y-scroll">
      <div className="flex items-center sticky top-0 left-0 z-50 dark:bg-[#001F3F] bg-white gap-3">
        <Image
          src={emblem}
          width={50}
          className="mx-4 my-2"
          height={30}
          alt={competitionName}
        />
        <h3 className="font-semibold">{competitionName}</h3>
      </div>
      <div>
        {matches.map((match, index) => (
          <MatchesTable key={index} matches={match} />
        ))}
      </div>
    </div>
  );
}
