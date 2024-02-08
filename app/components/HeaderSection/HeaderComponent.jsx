import Image from "next/image"
import React from "react"
import HeaderNav from "./HeaderNav"

const HeaderComponent = () => {
  return (
    <header className="flex items-center h-auto py-4 justify-between">
      <div>
        <Image
          src={"/StatMaster.png"}
          className="w-auto"
          alt="Logo"
          width={150}
          height={20}
          priority
        />
      </div>
      <HeaderNav />
    </header>
  )
}

export default HeaderComponent
