import Link from "next/link";
import { FaRankingStar } from "react-icons/fa6";
import { IoFootballSharp } from "react-icons/io5";
import { TbSoccerField } from "react-icons/tb";
import { ImStatsBars } from "react-icons/im";
const CompetitionActionButton = ({
  season,
  league,
  action,
  activeBtn,
  activeAction,
  matchday,
}) => {
  const actionLink =
    action !== "matches"
      ? `/competition/${league}/${season}/${action}`
      : `/competition/${league}/${season}/${action}/matchday/${matchday}`;

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
    <Link href={actionLink} prefetch>
      <button
        onClick={() => activeAction(action)}
        className={`action-hover item-hover ${
          activeBtn && "bg-gray-700 "
        } w-full flex-1 px-6 py-3 text-center  capitalize`}
      >
        {actionName}
      </button>
    </Link>
  );
};

export default CompetitionActionButton;
