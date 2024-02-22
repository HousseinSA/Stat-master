"use client";

import Image from "next/image";
import { useLeagueStore } from "../../../../utils/StateStore";
import ScorerRow from "./ScorerRow";
import TableContainer from "../../../layout/table/TableContainer";

const StatsContainer = ({ CompetionData }) => {
  const { leagueColor, leagueCode, season } = useLeagueStore();
  const {
    scorers,
    competition: { emblem, name },
  } = CompetionData;
  return (
    <div className="h-full w-full overflow-auto">
      <div className="flex w-full flex-col justify-center ">
        <div className="sticky top-0 z-20 flex w-full items-center gap-2 bg-[#F1F5F9] p-2">
          <Image src={emblem} width={80} height={50} alt={name} />
          <h3 style={{ color: leagueColor }} className="text-xl font-semibold">
            {name}
          </h3>
        </div>
        <div className="w-full flex-1">
          <TableContainer>
            {scorers.map((scorer, index) => {
              return (
                <ScorerRow
                  key={index}
                  index={index}
                  season={season}
                  league={leagueCode}
                  scorer={scorer}
                  color={leagueColor}
                />
              );
            })}
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default StatsContainer;
