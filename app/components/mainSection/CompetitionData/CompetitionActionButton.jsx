import Link from "next/link";
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
  return (
    <Link href={actionLink} prefetch>
      <button
        onClick={() => activeAction(action)}
        className={`item-hover ${
          activeBtn && "bg-gray-700 "
        } w-full flex-1 px-6 py-3 text-center  capitalize`}
      >
        {action}
      </button>
    </Link>
  );
};

export default CompetitionActionButton;
