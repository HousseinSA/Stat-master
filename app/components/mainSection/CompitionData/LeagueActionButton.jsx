

const LeagueActionButton = ({ action, activeBtn, activeAction }) => {
  return (
    <button
      onClick={() => activeAction(action)}
      className={`item-hover ${
        activeBtn ? " bg-slate-700 " : ""
      } text-center w-full capitalize`}
    >
      {action}
    </button>
  )
}

export default LeagueActionButton
