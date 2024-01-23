'use client'
import { useState } from "react"
const CompitionList = () => {
  const [selectedItem, setSelectedItem] = useState(null)

  const handleItemClick = (index) => {
    setSelectedItem(index)
  }
  const navItems = ["Premier League", "La Liga", "Bundesliga", "Serie A"]

  return (
    <nav className="h-full max-w-60 bg-slate-500">
      <div className="h-full border rounded p-2">
        <ul className="text-white flex flex-col gap-2">
          {navItems.map((item, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(index)}
              className={`cursor-pointer w-full p-3 ${
                selectedItem === index ? "bg-slate-700" : ""
              } hover:bg-slate-700 active:bg-[#BED250] rounded-md` }
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default CompitionList
