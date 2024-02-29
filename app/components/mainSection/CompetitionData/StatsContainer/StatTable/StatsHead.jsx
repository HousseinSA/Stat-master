import { useLeagueStore } from "../../../../../utils/StateStore";

const StatsHead = ({ color: textColor }) => {
  const { leagueColor } = useLeagueStore();
  return (
    <thead
      style={{ color: textColor || leagueColor }}
      className="sticky top-0 z-50 bg-[#F1F5F9] text-xs uppercase text-gray-700 dark:bg-gray-700"
    >
      <tr>
        <th
          scope="col"
          className="sticky left-0 z-50 bg-[#F1F5F9] px-6 py-3 text-left shadow-sm dark:bg-gray-700"
        >
          Player
        </th>

        <th scope="col" className="px-6 py-3">
          Goals
        </th>
        <th scope="col" className="px-6 py-3">
          Assists
        </th>
        <th scope="col" className="px-6 py-3">
          Played Matches
        </th>
        <th scope="col" className="px-6 py-3 text-center">
          Team
        </th>
      </tr>
    </thead>
  );
};

export default StatsHead;
