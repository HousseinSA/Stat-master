import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
const inter = Inter({ subsets: ["latin"] });
import CompetitionList from "@/components/mainSection/sideNav/CompetitionsList";
import HeaderComponent from "@/components/HeaderSection/HeaderComponent";
import { getCompetitionsList } from "@/utils/allDataFetchingFunctions";
import CompetitionContent from "@/components/mainSection/CompetitionData/CompetitionContent";
import LeagueSeason from "@/components/layout/LeagueSeason";
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
        className={`${inter.className} h-full transition duration-300 dark:bg-[#222222]`}
      >
        <main
          className=" mx-auto flex
         h-screen flex-col space-y-1 overflow-hidden p-1 md:p-5"
        >
          <HeaderComponent />
          <div className="flex h-[93%]  w-full items-center justify-center  ">
            <CompetitionList competitionsList={competitionsList} />
            <CompetitionContent>
              <LeagueSeason />
              <div className="h-full w-full overflow-auto">{children}</div>
              <SpeedInsights />
            </CompetitionContent>
          </div>
        </main>
      </body>
    </html>
  );
}
