"use client";
import LeagueItem from "./LeagueItem";
import { useLeagueStore } from "@/utils/StateStore";
import { useEffect } from "react";
import { getCompetitionColor } from "@/utils/getCompitionColor";
const CompetitionList = ({ competitionsList }) => {
  const competitions = competitionsList?.competitions;
  const currentSeason = competitions[0]?.currentSeason?.startDate?.substring(
    0,
    4,
  );
  const LeaguesToInclude = ["PL", "PD", "CL", "BL1", "SA", "FL1", "DED", "PPL"];
  const filteredLeagues = competitions?.filter((comp) =>
    LeaguesToInclude.includes(comp?.code),
  );

  // Reorder filteredLeagues based on the order of LeaguesToInclude
  const orderedLeagues = LeaguesToInclude.map((code) =>
    filteredLeagues.find((comp) => comp?.code === code),
  );

  const {
    getClickedLeague,
    setClickedLeagueColor,
    setCurrentSeason,
    setCurrentMatchday,
    season,
    leagueCode,
    setLeagueList,
    action,
  } = useLeagueStore();
  useEffect(() => {
    setLeagueList(orderedLeagues);
  }, []);
  function handelSelectedLeague(code, leagueColor, matchday) {
    setCurrentSeason(currentSeason);
    getClickedLeague(code);
    setClickedLeagueColor(leagueColor);
    setCurrentMatchday(matchday);
  }

  return (
    <div className="`hidden h-full w-1/4  rounded-bl-md rounded-tl-md bg-[#001F3F] p-2 transition  duration-300 ">
      <ul className="flex h-full w-full flex-col justify-center gap-2 text-white">
        {orderedLeagues?.map(({ name, code, emblem, currentSeason }, index) => {
          return (
            <LeagueItem
              key={index}
              selectedComp={leagueCode === code}
              name={name}
              season={season}
              leagueColor={getCompetitionColor(code)}
              emblem={emblem}
              code={code}
              action={action}
              matchday={currentSeason?.currentMatchday}
              handelSelectedLeague={handelSelectedLeague}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default CompetitionList;
