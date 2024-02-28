const StatsHead = ({ color: textColor }) => {
  return (
    <thead
      style={{ color: textColor }}
      className="sticky left-0 top-0 z-40 bg-[#F1F5F9] text-center text-xs uppercase text-gray-700 marker:text-center dark:bg-gray-700 dark:text-white"
    >
      <tr>
        <th
          scope="col"
          className="sticky left-0 z-50 bg-[#F1F5F9] px-6 py-3 text-left shadow-sm dark:bg-slate-700"
        >
          Player
        </th>
        {/* Add shadow class to the other th elements if needed */}
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
