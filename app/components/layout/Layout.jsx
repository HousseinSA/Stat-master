import HeaderComponent from "../HeaderSection/HeaderComponent"
import CompitionsList from "../mainSection/sideNav/CompitionsList"
import { getCompitionList } from "../../utils/allDataFetchingFunctions"

const Layout = async ({ children }) => {
  const compitionList = await getCompitionList()
  return (
    <main className="h-screen container overflow-hidden w-full px-4 mx-auto md:px-5">
      <HeaderComponent />
      <div className="flex  w-full h-full">
        <CompitionsList compitionList={compitionList} />
        {children}
      </div>
    </main>
  )
}

export default Layout
