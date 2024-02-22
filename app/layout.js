import { Inter } from "next/font/google"
import Head from "next/head"
import "./globals.css"
const inter = Inter({ subsets: ["latin"] })
import CompetionsList from "./components/mainSection/sideNav/CompetionsList"
import HeaderComponent from "./components/HeaderSection/HeaderComponent"
import { getCompetionList } from "./utils/allDataFetchingFunctions"

export const metadata = {
  title: "StatMaster",
  description: "Amazing App created to show All teams info",
}

export default async function RootLayout({ children }) {
  const competionsList = await getCompetionList()

  return (
    <html lang="en">
      <link rel="icon" href="/StatMaster.svg" />
      <body
        className={`${inter.className}  dark:bg-[#0D0C0A]  transition duration-300 `}
      >
        <main className="h-screen container  w-full  px-4 mx-auto sm:px-10 ">
          <HeaderComponent />
          <div className="flex mt-24 md:mt-0 md:flex-row flex-col items-center justify-center w-full h-full">
            <CompetionsList competionsList={competionsList} />
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
