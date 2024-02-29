"use client";
import { useLeagueStore } from "../../../utils/StateStore";

const TableHead = ({ league, textColor }) => {
  const { leagueColor } = useLeagueStore();

  return (
    <thead
      style={{ color: textColor || leagueColor }}
      className="sticky top-0 z-50 bg-[#F1F5F9] text-xs uppercase text-gray-700 dark:bg-gray-700"
    >
      <tr>
        <th
          scope="col"
          className="sticky left-0 z-50 bg-[#F1F5F9] md:p-3 p-2 text-left shadow-sm dark:bg-gray-700"
        >
          Club
        </th>
        <th scope="col" className="md:p-3 p-2">
          MP
        </th>
        <th scope="col" className="md:p-3 p-2">
          W
        </th>
        <th scope="col" className="md:p-3 p-2">
          D
        </th>
        <th scope="col" className="md:p-3 p-2">
          L
        </th>
        <th scope="col" className="md:p-3 p-2">
          GF
        </th>
        <th scope="col" className="md:p-3 p-2">
          GA
        </th>
        <th scope="col" className="md:p-3 p-2">
          GD
        </th>
        <th scope="col" className="md:p-3 p-2">
          Pts
        </th>
        {league !== "CL" && (
          <th scope="col" className="md:p-3 p-2">
            Last 5
          </th>
        )}
      </tr>
    </thead>
  );
};

export default TableHead;
