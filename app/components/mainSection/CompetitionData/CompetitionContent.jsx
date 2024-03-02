"use client";
import CompetitionActionButton from "./CompetitionActionButton";
import { useLeagueStore } from "../../../utils/StateStore";
import LeagueYear from "./StandingsContainer/LeagueContainer/LeagueYear";
import DropDownContainer from "../../layout/MobileDropDown/DropDownContainer";
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
    <div className=" flex h-full w-full flex-col overflow-hidden rounded-tr-md dark:text-white">
      <div
        style={{ borderColor: leagueColor }}
        className={`group hidden w-full items-center justify-around gap-4 bg-[#001F3F] p-6 font-semibold text-white transition duration-300 md:flex `}
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
      <DropDownContainer
        actionBtn={actionButton}
        matchday={currentMatchday}
        activeAction={handelAction}
      />

      <div className="h-full w-full overflow-hidden">
        {leagueCode === "CL" || action !== "standings" ? null : (
          <LeagueYear currentSeason={currentSeason} />
        )}
        {children}
      </div>
    </div>
  );
};

export default CompetitionContent;
