"use client";
import { useLeagueStore } from "../../../../utils/StateStore";
import Image from "next/image";
import StatsTable from "./StatTable/StatsTable";
const StatsContainer = ({ CompetionData }) => {
  const { leagueColor, getClickedAction, season, theme } = useLeagueStore();
  const {
    scorers,
    competition: { emblem, name },
  } = CompetionData;
  return (
    <div className=" h-full w-full overflow-auto ">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="sticky top-0 z-20 flex w-full items-center gap-2 bg-[#F1F5F9] p-1.5 text-slate-500 dark:bg-gray-700">
          <Image src={emblem} width={80} height={50} alt={name} />
          <h3 style={{ color: leagueColor }} className="text-xl font-semibold">
            {name}
          </h3>
        </div>
        <StatsTable
          scorers={scorers}
          season={season}
          color={leagueColor}
          theme={theme}
          changeAction={getClickedAction}
        />
      </div>
    </div>
  );
};

export default StatsContainer;
