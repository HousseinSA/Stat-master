import Link from "next/link";
const CompetionActionButtons = ({
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
  return (
    <Link href={actionLink} prefetch>
      <button
        onClick={() => activeAction(action)}
        className={`item-hover ${
          activeBtn ? " bg-slate-700 " : ""
        } w-full text-center capitalize`}
      >
        {action}
      </button>
    </Link>
  );
};

export default CompetionActionButtons;
