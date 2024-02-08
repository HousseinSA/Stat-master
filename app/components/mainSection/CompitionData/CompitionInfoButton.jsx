const CompitionInfoButton = ({ title, clickedButton, activeBtn }) => {
  return (
    <button
      onClick={() => activeBtn(title)}
      className={` item-hover ${
        clickedButton ? " bg-slate-700 " : ""
      } text-center w-full `}
    >
      {title}
    </button>
  )
}

export default CompitionInfoButton
