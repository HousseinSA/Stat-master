import React from "react";
import MatchRow from "./MatchRow";
import { useLeagueStore } from "../../../../utils/StateStore";

const MatchesTable = ({ matches }) => {
  const { leagueCode, season, getClickedAction } = useLeagueStore();
  // Determine matchday title
  let matchdayTitle;
  if (leagueCode === "CL") {
    const isAnyMatchScheduled = matches?.matches?.some(
      (match) => match.status !== "SCHEDULED",
    );
    matchdayTitle =
      isAnyMatchScheduled && `Stage: ${matches.matches[0]?.stage}`;
  } else {
    matchdayTitle = `Matchday ${matches.status}`;
  }

  return (
    <>
      <h1 style={{}} className="bg-white p-3 font-semibold dark:bg-[#001F3F] ">
        {matchdayTitle}
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {matches.matches?.map((match, index) => (
          <MatchRow
            season={season}
            league={leagueCode}
            key={index}
            match={match}
            changeAction={getClickedAction}
            className="w-full md:w-1/3" // Set width to 1/3 on medium screens and above
          />
        ))}
      </div>
    </>
  );
};

export default MatchesTable;
