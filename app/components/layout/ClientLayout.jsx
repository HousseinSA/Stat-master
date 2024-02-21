"use client"
import { useLeagueStore } from "../../utils/StateStore"
import HeaderComponent from "../HeaderSection/HeaderComponent"
import CompetionsList from "../mainSection/sideNav/CompetionsList"
import CompetionContent from "../mainSection/CompetionData/CompetionContent"
const ClientLayout = ({ children }) => {
  const { compList } = useLeagueStore()

  return (
    <main className="h-screen  w-full max-w-[1200px] px-4 mx-auto sm:px-10 md:px-12">
      <HeaderComponent />
      <div className="flex mt-24 md:mt-0 md:flex-row flex-col items-center justify-center w-full h-full">
        <CompetionsList competionsList={compList} />
        <CompetionContent>{children}</CompetionContent>
      </div>
    </main>
  )
}

export default ClientLayout
