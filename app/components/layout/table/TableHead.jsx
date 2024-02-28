const TableHead = ({ league, textColor }) => {
  return (
    <thead
      style={{ color: textColor }}
      className=" sticky top-0 z-50 bg-[#F1F5F9] text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-white"
    >
      <tr>
        <th className=" p-3 text-left text-sm font-semibold tracking-wide">
          Club
        </th>
        <th className="w-20 p-3 text-left text-sm font-semibold tracking-wide">
          MP
        </th>
        <th className=" w-20 p-3  text-center text-sm font-semibold tracking-wide">
          W
        </th>
        <th className="w-20 p-3 text-center text-sm font-semibold tracking-wide">
          D
        </th>
        <th className=" w-20 p-3  text-center text-sm font-semibold tracking-wide">
          L
        </th>
        <th className="w-20 p-3  text-left text-sm font-semibold tracking-wide">
          GF
        </th>
        <th className=" w-20 p-3 text-left text-sm font-semibold tracking-wide">
          GA
        </th>
        <th className="w-20 p-3  text-left text-sm font-semibold tracking-wide">
          GD
        </th>
        <th className=" w-20 p-3 text-left text-sm font-semibold tracking-wide">
          PTS
        </th>
        {league !== "CL" && (
          <th className="p-3 text-center text-sm font-semibold tracking-wide">
            FORM
          </th>
        )}
      </tr>
    </thead>
  );
};

export default TableHead;
