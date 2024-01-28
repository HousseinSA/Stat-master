"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

const CompitionsList = ({ compitionList }) => {
  const [selectedcomp, setSelectedComp] = useState("PL")
  const [compitions, setCompitions] = useState(compitionList?.competitions)
  const handleItemClick = (code) => {
    setSelectedComp(code)
  }
  const LeaugesToInclude = ["PL", "EC", "CL", "FL1", "BL1", "SA", "PD"]
  const filteredLeagues = compitions?.filter((comp) =>
    LeaugesToInclude.includes(comp?.code)
  )

  return (
    <nav className="h-full max-w-60 bg-[#001F3F]">
      <div className="h-full border rounded p-2">
        <ul className="text-white w-full flex flex-col gap-2">
          {filteredLeagues?.map(({ name, code, emblem }, index) => (
            <Link
              key={index}
              onClick={() => handleItemClick(code)}
              href={`/compition/${code}`}
              className={`cursor-pointer w-full p-3 ${
                selectedcomp === code ? "bg-slate-700 rounded-md" : ""
              } hover:bg-slate-700 active:bg-[#BED250] hover:rounded-md flex items-center w-full  gap-4`}
            >
              <Image src={emblem} alt={name} width={25} height={25} priority />
              <li className="flex flex-1">
                {code === "PD" ? "La Liga" : name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default CompitionsList
