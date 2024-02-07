import HeaderComponent from "../HeaderSection/HeaderComponent"
import CompitionsList from "../mainSection/sideNav/CompitionsList"
import { getCompitionList } from "../../utils/getCompitionsList"

const Layout = async ({ children }) => {
  const compitionList = await getCompitionList()
  return (
    <main className="h-screen container flex flex-col w-full px-2 mx-auto md:px-5 lg:px-20">
      <HeaderComponent />
      <div className="my-4 flex-col sm:flex-row flex items-center justify-center gap-2 w-full h-full">
        <CompitionsList compitionList={compitionList} />
        {children}
      </div>
    </main>
  )
}

export default Layout
