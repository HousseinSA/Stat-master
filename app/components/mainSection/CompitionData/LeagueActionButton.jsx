const LeagueActionButton = ({ action, clickedButton, activeBtn }) => {
  return (
    <button
      onClick={() => clickedButton(action)}
      className={` item-hover ${
        activeBtn ? " bg-slate-700 " : ""
      } text-center w-full `}
    >
      {action}
    </button>
  )
}

export default LeagueActionButton
