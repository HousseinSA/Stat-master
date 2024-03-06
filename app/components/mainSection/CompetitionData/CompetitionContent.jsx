"use client";
import CompetitionActionButton from "./CompetitionActionButton";
import { useLeagueStore } from "@/utils/StateStore";
import DropDownContainer from "../../layout/MobileDropDown/DropDownContainer";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
const CompetitionContent = ({ children }) => {
  // get data in league store
  const {
    leagueCode,
    setClickedAction,
    leagueColor,
    action,
    season,
    currentMatchday,
  } = useLeagueStore();
  // array of action buttons
  const actionButton = ["standings", "matches", "teams", "stats"];
  const handelAction = (action) => {
    setClickedAction(action);
  };

  // on render routing
  const route = useRouter();
  useEffect(() => {
    action !== "matches"
      ? route.push(`/competition/${leagueCode}/${season}/${action}`)
      : route.push(
          `/competition/${leagueCode}/${season}/${action}/matchday/${currentMatchday}`,
        );
  }, []); //eslint-disable-line
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
      {children}
    </div>
  );
};

export default CompetitionContent;
