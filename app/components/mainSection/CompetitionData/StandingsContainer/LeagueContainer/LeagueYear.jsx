"use client";
import { useEffect } from "react";
import { useLeagueStore } from "../../../../../utils/StateStore";
import { useRouter } from "next/navigation";
export const LeagueYear = () => {
  const { season, setSeason, currentSeason, leagueColor, action, leagueCode } =
    useLeagueStore();
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
  }, [season]);
  return (
    <div className="z-50 flex h-fit w-full items-center gap-3 bg-[#F1F5F9] p-2  text-slate-500 dark:bg-gray-700  ">
      <h3 className=" font-normal dark:text-white sm:font-semibold ">Season</h3>

      <select
        value={season}
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
    </div>
  );
};

export default LeagueYear;
