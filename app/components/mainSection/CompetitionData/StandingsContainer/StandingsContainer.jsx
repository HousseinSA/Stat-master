"use client";
import { useEffect } from "react";
import { useLeagueStore } from "@/utils/StateStore";
import TableContainer from "../../../layout/table/TableContainer";
import { getCurrentSeason } from "@/utils/getCurrentSeason";
const StandingsContainer = ({ competitionData }) => {
  const {
    leagueCode,
    setCurrentMatchday,
    season,
    setClickedAction,
    leagueColor,
  } = useLeagueStore();
  const competitionTable =
    leagueCode !== "CL"
      ? competitionData?.standings[0]?.table
      : competitionData?.standings;
  const currentMatchday = competitionData?.season?.currentMatchday;
  const currentSeason = getCurrentSeason()
  // Effect for setting current matchday
  useEffect(() => {
    if (season === currentSeason) {
      setCurrentMatchday(currentMatchday);
    }
  }, [currentMatchday]); /* eslint-disable-line */
  return (
    <main className=" h-full w-full  overflow-auto">
      <TableContainer
        competitionTable={competitionTable}
        season={season}
        changeAction={setClickedAction}
        league={leagueCode}
        leagueColor={leagueColor}
      />
    </main>
  );
};

export default StandingsContainer;
