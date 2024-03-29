"use client";
import LeagueItem from "./LeagueItem";
import { useLeagueStore } from "@/utils/StateStore";
import { useEffect } from "react";
import { getCompetitionColor } from "@/utils/getCompetitionColor";
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
  const currentMatchday = orderedLeagues[0].currentSeason?.currentMatchday;

  const {
    getClickedLeague,
    setClickedLeagueColor,
    setCurrentMatchday,
    season,
    setSeason,
    leagueCode,
    setLeagueList,
    action,
    setSelectedLeague,
  } = useLeagueStore();
  // get clicked league info  mainly it's logo and name and add it to season year
  const selectedLeague = competitions?.find((comp) => comp.code === leagueCode);

  const { name, emblem } = selectedLeague;

  useEffect(() => {
    setLeagueList(orderedLeagues);
    setSeason(currentSeason);
    setCurrentMatchday(currentMatchday);
    setSelectedLeague({ name, emblem });
  }, [leagueCode]); //eslint-disable-line
  function handelSelectedLeague(code, leagueColor, matchday) {
    getClickedLeague(code);
    setTimeout(() => setClickedLeagueColor(leagueColor), 200);
    if (season === currentSeason) {
      setCurrentMatchday(matchday);
    }
  }
  return (
    <div className=" hidden h-full w-auto rounded-bl-md rounded-tl-md bg-[#001F3F] p-2 transition duration-300 md:block lg:w-1/4">
      <ul className="flex h-full w-full flex-col gap-2  py-4 text-white">
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
