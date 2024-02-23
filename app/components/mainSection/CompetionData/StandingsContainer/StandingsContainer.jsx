"use client";
import { useEffect } from "react";
import { useLeagueStore } from "../../../../utils/StateStore";
import UCLStandings from "./UCl_container/uclStandings";
import LeagueContainer from "../StandingsContainer/LeagueContainer/LeagueContainer";
const StandingsContainer = ({ CompetionData }) => {
  // State and context initialization
  const { leagueCode, setCurrentMatchday, season, getClickedAction } =
    useLeagueStore();
  const leagueTable = CompetionData?.standings[0]?.table;
  const currentMatchday = CompetionData?.season?.currentMatchday;
  // Effect for setting current matchday
  // useEffect(() => {
  //   setCurrentMatchday(currentMatchday);
  // }, [currentMatchday]);
  return (
    <main className="h-full w-full overflow-auto ">
      <div className="w-full rounded-lg shadow-lg">
        <div className="h-full w-full">
          {leagueCode === "CL" ? (
            // Render UCLStandings component for Champions League
            <UCLStandings
              CompetionData={CompetionData}
              season={season}
              changeAction={getClickedAction}
              league={leagueCode}
            />
          ) : (
            <LeagueContainer
              leagueTable={leagueTable}
              season={season}
              changeAction={getClickedAction}
              league={leagueCode}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default StandingsContainer;
