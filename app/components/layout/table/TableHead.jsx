const TableHead = ({ league, textColor }) => {
  return (
    <thead
      style={{ color: textColor }}
      className="sticky top-0 z-50 w-full bg-[#F1F5F9] text-xs uppercase text-gray-700 marker:text-center dark:bg-gray-700 dark:text-white sm:text-sm"
    >
      <tr>
        <th scope="col" className=" px-3 py-2 text-left sm:px-6 sm:py-3">
          Club
        </th>
        <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3">
          MP
        </th>
        <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3">
          W
        </th>
        <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3">
          D
        </th>
        <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3">
          L
        </th>
        <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3">
          GF
        </th>
        <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3">
          GA
        </th>
        <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3">
          GD
        </th>
        <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3">
          PTS
        </th>
        {league !== "CL" && (
          <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3">
            FORM
          </th>
        )}
      </tr>
    </thead>
  );
};

export default TableHead;
