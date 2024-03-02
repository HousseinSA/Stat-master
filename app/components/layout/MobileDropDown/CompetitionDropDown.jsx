import { Menu } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

const CompetitionDropDown = ({
  selectedComp,
  name,
  season,
  emblem,
  code,
  action,
  matchday,
  leagueColor,
  handleLeague,
}) => {
  const leagueActionPath =
    action !== "matches"
      ? `/competition/${code}/${season}/${action}`
      : `/competition/${code}/${season}/${action}/matchday/${matchday}`;
  return (
    <Menu.Item>
      <Link href={leagueActionPath}>
        <div
          className={`${selectedComp ? "bg-slate-700 text-white" : ""} item-hover
          action-hover 
            dark: cursor-pointer p-2 text-gray-500  dark:text-white  `}
          onClick={() => handleLeague(code, leagueColor, matchday)}
        >
          <div className="flex items-center gap-4">
            <Image
              src={emblem}
              alt={name}
              className="min-h-8 min-w-8"
              width={25}
              height={25}
              priority
            />
            <span className=" text-sm">{code === "PD" ? "La Liga" : name}</span>
          </div>
        </div>
      </Link>
    </Menu.Item>
  );
};

export default CompetitionDropDown;
