import HeaderComponent from "../HeaderSection/HeaderComponent"
import CompitionsList from "../mainSection/sideNav/CompitionsList"
import { getCompitionList } from "../../utils/allDataFetchingFunctions"

const Layout = async ({ children }) => {
  const compitionList = await getCompitionList()
  return (
    <main className="h-screen  w-full max-w-[1200px] px-4 mx-auto sm:px-10 md:px-12">
      <HeaderComponent />
      <div className="flex mt-24 md:mt-0 md:flex-row flex-col items-center justify-center w-full h-full">
        <CompitionsList compitionList={compitionList} />
        {children}
      </div>
    </main>
  )
}

export default Layout
