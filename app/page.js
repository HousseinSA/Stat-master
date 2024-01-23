import React from "react"
import HeaderComponent from "./component/HeaderComponent"
import CompitionList from "./component/CompitionList"
import DataComponent from "./component/DataComponent"

const page = () => {
  return (
    <main className="h-screen flex flex-col bg-[#303134] px-10 container mx-auto md:px-20">
      <HeaderComponent />
      <div className="my-4 flex gap-2   h-full">
        <CompitionList />
        <DataComponent />
      </div>
    </main>
  )
}

export default page
