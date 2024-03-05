"use client";
import { useLeagueStore } from "@/utils/StateStore";
import Image from "next/image";
import StatsTable from "./StatTable/StatsTable";
import { getCompetitionColor } from "@/utils/getCompetitionColor";
const StatsContainer = ({ competitionData }) => {
  const { leagueCode, setClickedAction, season, theme } = useLeagueStore();
  const { scorers } = competitionData;
  const clickedLeagueColor = getCompetitionColor(leagueCode);
  return (
    <section className="flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <div className="w-full overflow-auto">
        <StatsTable
          scorers={scorers}
          season={season}
          color={clickedLeagueColor}
          theme={theme}
          changeAction={setClickedAction}
        />
      </div>
    </section>
  );
};

export default StatsContainer;
