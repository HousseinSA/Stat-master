"use client";
import CompetitionActionButton from "./CompetitionActionButton";
import { useLeagueStore } from "../../../utils/StateStore";
import LeagueYear from "./StandingsContainer/LeagueContainer/LeagueYear";
const CompetitionContent = ({ children }) => {
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
  const handelAction = () => {
    getClickedAction();
  };
  return (
    <main className="flex h-full w-full flex-col justify-center rounded-md dark:text-white">
      <div
        style={{ borderColor: leagueColor }}
        className={`group hidden w-full items-center justify-around gap-4 rounded-tr-md border-b-4 bg-[#001F3F] p-6 font-semibold text-white transition duration-300 sm:flex`}
      >
        {actionButton?.map((btnName, index) => {
          return (
            <CompetitionActionButton
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
      <div className="h-full w-full">{children}</div>
    </main>
  );
};

export default CompetitionContent;
