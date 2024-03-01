import React from "react";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import { FaRankingStar } from "react-icons/fa6";
import { IoFootballSharp } from "react-icons/io5";
import { TbSoccerField } from "react-icons/tb";
import { ImStatsBars } from "react-icons/im";
const DropDownItem = ({
  action,
  season,
  league,
  matchday,
  activeBtn,
  handelAction,
}) => {
  const actionLink =
    action === "matches"
      ? `/competition/${league}/${season}/${action}/matchday/${matchday}`
      : `/competition/${league}/${season}/${action}`;
  const actionName = (
    <div className="flex items-center space-x-2">
      {action === "standings" ? (
        <>
          <FaRankingStar /> <span>{action}</span>
        </>
      ) : action === "matches" ? (
        <>
          <IoFootballSharp /> <span>{action}</span>
        </>
      ) : action === "teams" ? (
        <>
          <TbSoccerField /> <span>{action}</span>
        </>
      ) : (
        <>
          <ImStatsBars /> <span>{action}</span>
        </>
      )}
    </div>
  );

  return (
    <Menu.Item>
      <Link
        href={actionLink}
        onClick={() => handelAction(action)}
        className={`text-gray-300 ${activeBtn && "bg-gray-700 text-white"} item-hover block p-2  capitalize`}
      >
        {actionName}
      </Link>
    </Menu.Item>
  );
};

export default DropDownItem;
