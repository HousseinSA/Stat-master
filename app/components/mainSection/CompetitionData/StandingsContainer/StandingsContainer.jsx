"use client";
import { useEffect } from "react";
import { useLeagueStore } from "@/utils/StateStore";
import TableContainer from "../../../layout/table/TableContainer";
import { getCurrentSeason } from "@/utils/getCurrentSeason";
const StandingsContainer = ({ competitionData }) => {
  const { leagueCode, setCurrentMatchday, season, leagueColor, getTeamId } =
    useLeagueStore();
  const competitionTable =
    leagueCode !== "CL"
      ? competitionData?.standings[0]?.table
      : competitionData?.standings;
  const currentMatchday = competitionData?.season?.currentMatchday;
  const currentSeason = getCurrentSeason();
  function changeTeamId(teamId) {
    getTeamId(teamId);
  }
  // Effect for setting current matchday
  useEffect(() => {
    if (season === currentSeason) {
      setCurrentMatchday(currentMatchday);
    }
  }, [currentMatchday]); /* eslint-disable-line */
  return (
    <TableContainer
      competitionTable={competitionTable}
      season={season}
      changeTeamId={changeTeamId}
      league={leagueCode}
      leagueColor={leagueColor}
    />
  );
};

export default StandingsContainer;
