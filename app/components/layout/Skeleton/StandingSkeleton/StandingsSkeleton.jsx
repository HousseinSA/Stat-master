import Skeleton from "react-loading-skeleton";

const StandingsSkeleton = () => {
  const numRows = 20; // Number of rows in the skeleton

  return (
    <main className="h-full w-full overflow-auto">
      <div className="w-full rounded-lg shadow-lg">
        <div className="h-full w-full">
          <div className="overflow-x-auto overflow-y-auto sm:overflow-x-scroll">
            <table className="w-full">
              <thead className="sticky top-0 z-50 bg-[#F1F5F9] text-xs uppercase text-gray-700 marker:text-center dark:bg-gray-700 dark:text-white">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left">
                    <Skeleton width={100} />
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <Skeleton width={50} />
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <Skeleton width={50} />
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <Skeleton width={50} />
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <Skeleton width={50} />
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <Skeleton width={50} />
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <Skeleton width={50} />
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <Skeleton width={50} />
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <Skeleton width={50} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...Array(numRows)].map((_, index) => (
                  <tr
                    key={index}
                    className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium text-gray-900 dark:text-white">
                      <Skeleton width={100} />
                    </td>
                    <td className="px-6 py-4">
                      <Skeleton width={50} />
                    </td>
                    <td className="px-6 py-4">
                      <Skeleton width={50} />
                    </td>
                    <td className="px-6 py-4">
                      <Skeleton width={50} />
                    </td>
                    <td className="px-6 py-4">
                      <Skeleton width={50} />
                    </td>
                    <td className="px-6 py-4">
                      <Skeleton width={50} />
                    </td>
                    <td className="px-6 py-4">
                      <Skeleton width={50} />
                    </td>
                    <td className="px-6 py-4">
                      <Skeleton width={50} />
                    </td>
                    <td className="px-6 py-4">
                      <Skeleton width={50} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default StandingsSkeleton;
