"use client";
import CompetionActionButtons from "./competionActionButton";
import { useLeagueStore } from "../../../utils/StateStore";
import LeagueYear from "./StandingsContainer/LeagueContainer/LeagueYear";
const CompetitionContent = ({ children }) => {
  // get data in league store
  const {
    leagueCode,
    getClickedAction,
    leagueColor,
    action,
    currentSeason,
    season,
    currentMatchday,
  } = useLeagueStore();
  // array of action buttons
  const actionButton = ["standings", "matches", "teams", "stats"];
  const handelAction = (action) => {
    getClickedAction(action);
  };
  return (
    <div className=" flex h-full w-full flex-1 flex-col rounded-md  dark:text-white">
      <div
        style={{ borderColor: leagueColor }}
        className={`group flex w-full flex-wrap gap-4 rounded-tr-md border-b-4 bg-[#001F3F] p-4 font-semibold text-white transition duration-300`}
      >
        {actionButton?.map((btnName, index) => {
          return (
            <CompetionActionButtons
              season={season}
              league={leagueCode}
              matchday={currentMatchday}
              activeBtn={action === btnName}
              key={index}
              action={btnName}
              activeAction={handelAction}
            />
          );
        })}
      </div>
      {leagueCode === "CL" || action !== "standings" ? null : (
        <LeagueYear currentSeason={currentSeason} />
      )}
      {children}
    </div>
  );
};

export default CompetitionContent;
