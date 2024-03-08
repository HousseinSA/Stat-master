"use client";

import { useLeagueStore } from "@/utils/StateStore";
import TeamCard from "./TeamCard";
import { getCompetitionColor } from "@/utils/getCompetitionColor";
import { useCallback, useEffect } from "react";

const TeamsContainer = ({ competitionData }) => {
  const { teams } = competitionData;
  const {
    leagueCode,
    season,
    action,
    theme,
    leagueColor,
    getTeamId,
    setClickedLeagueColor,
  } = useLeagueStore();
  const checkUclLeague =
    leagueCode === "CL" ? getCompetitionColor(leagueCode) : leagueColor;

  useEffect(() => setClickedLeagueColor(checkUclLeague), [checkUclLeague]);

  return (
    <main className="h-full w-full overflow-auto">
      <div className="flex w-full flex-wrap items-center justify-center gap-4 p-2">
        {teams.map((team, index) => (
          <TeamCard
            key={index}
            league={leagueCode}
            action={action}
            season={season}
            leagueColor={checkUclLeague}
            team={team}
            theme={theme}
            getTeamId={getTeamId}
          />
        ))}
      </div>
    </main>
  );
};

export default TeamsContainer;
