"use client";
import { useEffect } from "react";
import { useLeagueStore } from "../../../../utils/StateStore";
import TableContainer from "../../../layout/table/TableContainer";
const StandingsContainer = ({ competitionData }) => {
  // State and context initialization
  const {
    leagueCode,
    setCurrentMatchday,
    season,
    getClickedAction,
    leagueColor,
  } = useLeagueStore();
  const competitionTable =
    leagueCode !== "CL"
      ? competitionData?.standings[0]?.table
      : competitionData?.standings;
  const currentMatchday = competitionData?.season?.currentMatchday;
  // Effect for setting current matchday
  useEffect(() => {
    setCurrentMatchday(currentMatchday);
  }, [currentMatchday]);

  return (
    <main className="h-full w-full overflow-auto ">
      <div className="w-full ">
        <TableContainer
          competitionTable={competitionTable}
          season={season}
          changeAction={getClickedAction}
          league={leagueCode}
          leagueColor={leagueColor}
        />
      </div>
    </main>
  );
};

export default StandingsContainer;
