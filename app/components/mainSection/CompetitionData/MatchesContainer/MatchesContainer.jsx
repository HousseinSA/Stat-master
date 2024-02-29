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
  // Construct matches array with match data and corresponding names
  const matches = [
    { matches: matchesCurr, status: currentMatchday },
    { matches: matchesNext, status: currentMatchday + 1 },
    { matches: matchesPrev, status: currentMatchday - 1 },
  ];
  return (
    <section className="h-full w-full overflow-auto">
      <div className="sticky left-0 top-0 z-50 flex items-center gap-3 bg-[#F1F5F9]  dark:bg-gray-700">
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
    </section>
  );
}
