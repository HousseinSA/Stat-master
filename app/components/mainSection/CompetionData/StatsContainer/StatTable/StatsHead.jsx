const StatsHead = () => {
  return (
    <thead className="sticky top-[92px] z-50 bg-[#F1F5F9]  text-center text-xs uppercase text-gray-700 marker:text-center dark:bg-gray-700 dark:text-white">
      <tr>
        <th scope="col" className="px-6 py-3 text-left">
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
