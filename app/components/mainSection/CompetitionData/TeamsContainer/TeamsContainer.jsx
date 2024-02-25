"use client";

import { useLeagueStore } from "../../../../utils/StateStore";
import TeamCard from "./TeamCard";

const TeamsContainer = ({ competitionData }) => {
  const teams = competitionData.teams;
  const { leagueCode, season, action, theme, leagueColor } = useLeagueStore();
  return (
    <div className="flex h-full w-full flex-wrap  items-center justify-center gap-4 overflow-y-scroll p-2">
      {teams.map((team, index) => {
        return (
          <TeamCard
            key={index}
            league={leagueCode}
            action={action}
            season={season}
            leagueColor={leagueColor}
            team={team}
            theme={theme}
          />
        );
      })}
    </div>
  );
};

export default TeamsContainer;
