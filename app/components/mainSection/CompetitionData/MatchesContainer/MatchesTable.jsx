import React from "react";
import MatchRow from "./MatchRow";
import { useLeagueStore } from "@/utils/StateStore";

const MatchesTable = ({ matches }) => {
  const { leagueCode, season, leagueColor, setClickedAction } =
    useLeagueStore();
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
    <div className="h-auto w-full">
      <h1
        style={{
          color: leagueColor,
        }}
        className="my-3 p-3 font-semibold "
      >
        {matchdayTitle}
      </h1>
      <div className="grid grid-cols-1 gap-4 p-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ">
        {matches.matches?.map((match, index) => (
          <MatchRow
            key={index}
            match={match}
            season={season}
            league={leagueCode}
            changeAction={setClickedAction}
            textColor={leagueColor}
          />
        ))}
      </div>
    </div>
  );
};

export default MatchesTable;
