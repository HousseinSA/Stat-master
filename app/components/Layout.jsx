import HeaderComponent from "./HeaderComponent"
import CompitionsList from "./CompitionsList"
import { getCompitionList } from "../utils/getCompitionsList"

const Layout = async ({ children }) => {
  const compitionList = await getCompitionList()
  
  return (
    <main className="h-screen flex flex-col bg-[#303134] px-10 container mx-auto md:px-20">
      <HeaderComponent />
      <div className="my-4 flex gap-2  h-full">
        <CompitionsList compitionList={compitionList} />
        {children}
      </div>
    </main>
  )
}

export default Layout
