import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
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
        className={`${inter.className} h-full w-full transition duration-300 dark:bg-[#222222] `}
      >
        <main className="mx-auto h-full w-full px-2 md:px-4 lg:px-8 xl:px-12">
          <HeaderComponent />
          <div className="h-full w-full sm:flex sm:flex-row sm:justify-center">
            <CompetitionList competitionsList={competitionsList} />
            <CompetitionContent>{children}</CompetitionContent>
          </div>
        </main>
      </body>
    </html>
  );
}
