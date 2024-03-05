"use client";
import { useEffect } from "react";
import { useLeagueStore } from "@/utils/StateStore";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getCurrentSeason } from "@/utils/getCurrentSeason";
import { googleSearch } from "@/utils/GoogleSearch";
import Link from "next/link";
import { Suspense } from "react";
export const LeagueYear = () => {
  const currentSeason = getCurrentSeason();
  const {
    season,
    setSeason,
    leagueColor,
    action,
    leagueCode,
    selectedLeague: leagueTitle,
  } = useLeagueStore();

  const route = useRouter();
  const seasonsList = Array.from(
    { length: 4 },
    (_, index) => currentSeason - index,
  );
  function handelSeasonChange(event) {
    const Season = event.target.value;
    setSeason(Season);
  }
  useEffect(() => {
    route.push(`/competition/${leagueCode}/${season}/${action}`);
  }, [season]); //eslint-disable-line
  return (
    <div className="z-50 flex h-fit w-auto items-center gap-3 bg-[#F1F5F9] p-2  text-slate-500 dark:bg-gray-700  ">
      {Object.keys(leagueTitle).length !== 0 && (
        <Suspense fallback={<div>loading...</div>}>
          <Link
            href={googleSearch(leagueTitle.name)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="sticky left-0 top-0 z-30 flex items-center gap-3 bg-[#F1F5F9]  dark:bg-gray-700">
              <Image
                src={leagueTitle.emblem}
                width={50}
                className=" md:w- h-12 w-12 md:h-16 md:w-16 "
                height={30}
                alt={leagueTitle.name}
              />
              <h3
                style={{ color: leagueColor }}
                className=" text-base font-medium md:text-lg   md:font-semibold"
              >
                {leagueTitle.name}
              </h3>
            </div>
          </Link>
        </Suspense>
      )}
      <div>
        {leagueCode === "CL" || action !== "standings" ? null : (
          <select
            value={season === 0 ? "loading" : season}
            onChange={handelSeasonChange}
            style={{ borderColor: leagueColor }}
            className={`rounded-sm border outline-none transition duration-500`}
          >
            {seasonsList.map((season) => {
              return (
                <option key={season} value={season}>
                  {season}
                </option>
              );
            })}
          </select>
        )}
      </div>
    </div>
  );
};

export default LeagueYear;
