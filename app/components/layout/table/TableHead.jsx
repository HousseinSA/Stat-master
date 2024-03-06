  "use client";
  import { useLeagueStore } from "@/utils/StateStore";

  const TableHead = ({ league, textColor }) => {
    const { leagueColor } = useLeagueStore();

    return (
      <thead
        style={{ color: textColor || leagueColor }}
        className="sticky top-0 z-30 bg-[#F1F5F9] text-xs uppercase text-gray-700 dark:bg-gray-700"
      >
        <tr>
          <th
            scope="col"
            className="sticky left-0 z-50 mr-3 bg-[#F1F5F9] p-2 pr-5 text-left shadow-sm dark:bg-gray-700 md:p-3 "
          >
            Club
          </th>
          <th scope="col" className="p-2 md:p-3">
            MP
          </th>
          <th scope="col" className="p-2 md:p-3">
            W
          </th>
          <th scope="col" className="p-2 md:p-3">
            D
          </th>
          <th scope="col" className="p-2 md:p-3">
            L
          </th>
          <th scope="col" className="p-2 md:p-3">
            GF
          </th>
          <th scope="col" className="p-2 md:p-3">
            GA
          </th>
          <th scope="col" className="p-2 md:p-3">
            GD
          </th>
          <th scope="col" className="p-2 md:p-3">
            Pts
          </th>
          {league !== "CL" && (
            <th scope="col" className="p-2 md:p-3">
              Last 5
            </th>
          )}
        </tr>
      </thead>
    );
  };

  export default TableHead;
