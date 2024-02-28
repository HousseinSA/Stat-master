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
        className={`${inter.className} transition duration-300 dark:bg-[#222222] `}
      >
        <main className="container mx-auto flex h-screen flex-col items-center justify-center p-5">
          <HeaderComponent />
          <div className="mt-24 flex h-full w-full flex-col items-center justify-center md:mt-0 md:flex-row">
            <CompetitionList competitionsList={competitionsList} />
            <CompetitionContent>{children}</CompetitionContent>
          </div>
        </main>
      </body>
    </html>
  );
}
