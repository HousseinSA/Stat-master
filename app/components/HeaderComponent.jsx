import Image from "next/image"
import React from "react"

const HeaderComponent = () => {
  return (
    <header className="flex text-white items-center py-4 justify-between">
      <div>
        <Image src={"/StatMaster.png"} alt="Logo" width={200} height={50} />
      </div>
      <div>
        <button>Theme</button>
      </div>
    </header>
  )
}

export default HeaderComponent
