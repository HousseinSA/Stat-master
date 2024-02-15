import HeaderComponent from "../HeaderSection/HeaderComponent"
import CompetionsList from "../mainSection/sideNav/CompetionsList"
import { getCompetionList } from "../../utils/allDataFetchingFunctions"

const Layout = async ({ children }) => {
  const competionsList = await getCompetionList()
  return (
    <main className="h-screen  w-full max-w-[1200px] px-4 mx-auto sm:px-10 md:px-12">
      <HeaderComponent />
      <div className="flex mt-24 md:mt-0 md:flex-row flex-col items-center justify-center w-full h-full">
        <CompetionsList competionsList={competionsList} />
        {children}
      </div>
    </main>
  )
}

export default Layout
