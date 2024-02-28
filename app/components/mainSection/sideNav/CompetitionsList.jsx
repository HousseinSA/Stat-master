"use client";
import LeagueItem from "./LeagueItem";
import { useLeagueStore } from "../../../utils/StateStore";

const CompetitionList = ({ competitionsList }) => {
  const competitions = competitionsList?.competitions;
  const currentSeason = competitions[0]?.currentSeason?.startDate?.substring(
    0,
    4,
  );
  const LeaguesToInclude = ["PL", "DED", "PPL", "CL", "FL1", "PD", "BL1", "SA"];
  const filteredLeagues = competitions?.filter((comp) =>
    LeaguesToInclude.includes(comp?.code),
  );
  const leagueColors = [
    "#9e2baf",
    "#3838c4",
    "#CFFB12",
    "#D40914",
    "#19C030",
    "#2C3C82",
    "#FFD337",
    "#FAEC40",
  ];
  const {
    getClickedLeague,
    getClickedLeagueColor,
    setCurrentSeason,
    setCurrentMatchday,
    season,
    leagueCode,
    action,
  } = useLeagueStore();
  function handelSelectedLeague(code, leagueColor, matchday) {
    setCurrentSeason(currentSeason);
    getClickedLeague(code);
    getClickedLeagueColor(leagueColor);
    setCurrentMatchday(matchday);
  }
  return (
    <div
      className={`hidden w-1/5 flex-shrink-0 rounded-bl-md rounded-tl-md bg-[#001F3F] p-2 transition duration-300 md:block md:h-full `}
    >
      <ul className="flex w-full flex-shrink-0 lg justify-center gap-2 text-white md:flex-col">
        {filteredLeagues?.map(
          ({ name, code, emblem, currentSeason }, index) => {
            const leagueColor = leagueColors[index];
            return (
              <LeagueItem
                key={index}
                selectedComp={leagueCode === code}
                name={name}
                season={season}
                leagueColor={leagueColor}
                emblem={emblem}
                code={code}
                action={action}
                matchday={currentSeason?.currentMatchday}
                handelSelectedLeague={handelSelectedLeague}
              />
            );
          },
        )}
      </ul>
    </div>
  );
};

export default CompetitionList;
