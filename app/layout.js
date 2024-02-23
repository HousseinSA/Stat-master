import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import CompetitionList from "./components/mainSection/sideNav/CompetitionsList";
import HeaderComponent from "./components/HeaderSection/HeaderComponent";
import { getCompetitionsList } from "./utils/allDataFetchingFunctions";

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
        className={`${inter.className}  transition  duration-300 dark:bg-[#222222] `}
      >
        <main className="container mx-auto  h-screen  w-full px-4 sm:px-10 ">
          <HeaderComponent />
          <div className="mt-24 flex h-full w-full flex-col items-center justify-center md:mt-0 md:flex-row">
            <CompetitionList competitionsList={competitionsList} />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
