import Link from "next/link"
const LeagueActionButton = ({
  season,
  leauge,
  action,
  activeBtn,
  activeAction,
  matchday,
}) => {
  const actionLink =
    action !== "matches"
      ? `/competion/${leauge}/${season}/${action}`
      : `/competion/${leauge}/${season}/${action}/matchday/${matchday}`
  return (
    <Link href={actionLink}>
      <button
        onClick={() => activeAction(action)}
        className={`item-hover ${
          activeBtn ? " bg-slate-700 " : ""
        } text-center w-full capitalize`}
      >
        {action}
      </button>
    </Link>
  )
}

export default LeagueActionButton
