"use client";

import { useLeagueStore } from "@/utils/StateStore";
import TeamCard from "./TeamCard";

const TeamsContainer = ({ competitionData }) => {
  const { teams } = competitionData;
  const { leagueCode, season, action, theme, leagueColor } = useLeagueStore();

  return (
    <main className="h-full w-full overflow-auto">
      <div className="flex w-full flex-wrap items-center justify-center gap-4 p-2">
        {teams.map((team, index) => (
          <TeamCard
            key={index}
            league={leagueCode}
            action={action}
            season={season}
            leagueColor={leagueColor}
            team={team}
            theme={theme}
          />
        ))}
      </div>
    </main>
  );
};

export default TeamsContainer;
