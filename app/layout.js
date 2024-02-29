import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import { Providers } from "./providers";
import CompetitionList from "./components/mainSection/sideNav/CompetitionsList";
import HeaderComponent from "./components/HeaderSection/HeaderComponent";
import { getCompetitionsList } from "./utils/allDataFetchingFunctions";
import CompetitionContent from "./components/mainSection/CompetitionData/CompetitionContent";
export const metadata = {
  title: "StatMaster",
  description: "Amazing App created to show All teams info",
};

export default async function RootLayout({ children }) {
  const competitionsList = await getCompetitionsList();

  return (
    <html lang="en">
      <link rel="icon" href="/StatMaster.svg" />
      <body
        className={`${inter.className} h-full transition duration-300 dark:bg-[#222222] `}
      >
        <main
          className=" mx-auto flex
         h-screen flex-col items-start justify-start overflow-hidden p-5"
        >
          <HeaderComponent />
          <div className=" flex  h-[93%]  w-full items-center justify-center  ">
            <CompetitionList competitionsList={competitionsList} />
            <CompetitionContent>{children}</CompetitionContent>
          </div>
        </main>
      </body>
    </html>
  );
}
