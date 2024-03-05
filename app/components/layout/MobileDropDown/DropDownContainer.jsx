import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import DropDownItem from "./DropDownItem";
import { useLeagueStore } from "@/utils/StateStore";
import CompetitionDropDown from "./CompetitionDropDown";
import { CiMenuKebab } from "react-icons/ci";
import TitleAnimation from "../TitleAnimation";
import { getCurrentSeason } from "@/utils/getCurrentSeason";
const DropDown = ({ actionBtn, matchday, activeAction }) => {
  const {
    getClickedLeague,
    setClickedLeagueColor,
    setCurrentMatchday,
    season,
    leagueCode,
    action,
    leagueList,
    leagueColor,
  } = useLeagueStore();
  const currentSeason = getCurrentSeason();
  const leagueColors = [
    "#9e2baf",
    "#FAEC40",
    "#3838c4",
    "#D40914",
    "#19C030",
    "#CFFB12",
    "#2C3C82",
    "#FFD337",
    ,
  ];
  function handleLeague(code, leagueColor, matchday) {
    getClickedLeague(code);
    setClickedLeagueColor(leagueColor);
    if (season === currentSeason) {
      setCurrentMatchday(matchday);
    }
  }

  function handleAction(clickedAction) {
    activeAction(clickedAction);
  }
  return (
    <Menu
      as="div"
      className="relative z-40 inline-block w-full text-left md:hidden"
    >
      <div>
        <Menu.Button className="inline-flex w-full items-center justify-center gap-2 gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 dark:bg-[#001F3F] dark:text-white ">
          <CiMenuKebab />
          Options
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-50 w-full origin-top-right divide-y divide-gray-100 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-[#001F3F] dark:text-white">
          {actionBtn.map((actionBtn, index) => (
            <DropDownItem
              key={index}
              action={actionBtn}
              season={season}
              handelAction={handleAction}
              league={leagueCode}
              leagueColor={leagueColor}
              matchday={matchday}
              activeBtn={action === actionBtn}
            />
          ))}
          <div className="max-h-60 overflow-auto">
            <TitleAnimation>
              <div
                className="p-2 text-sm font-semibold dark:bg-[#001F3F] dark:text-white "
                style={{ color: leagueColor }}
              >
                Competitions
              </div>
            </TitleAnimation>
            {leagueList.map(({ name, code, emblem, currentSeason }, index) => {
              const leagueColor = leagueColors[index];
              return (
                <CompetitionDropDown
                  key={index}
                  selectedComp={leagueCode === code}
                  name={name}
                  season={season}
                  leagueColor={leagueColor}
                  emblem={emblem}
                  code={code}
                  action={action}
                  matchday={currentSeason?.currentMatchday}
                  handleLeague={handleLeague}
                />
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropDown;
