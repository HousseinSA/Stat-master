import Link from "next/link"

const LeagueActionButton = ({
  action,
  leagueCode,
  clickedButton,
  activeBtn,
}) => {
  return (
    <Link href={`/compition/${leagueCode}/${action}`}>
      <button
        onClick={() => clickedButton(action)}
        className={`item-hover ${
          activeBtn ? " bg-slate-700 " : ""
        } text-center w-full capitalize `}
      >
        {action}
      </button>
    </Link>
  )
}

export default LeagueActionButton
