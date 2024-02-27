import Skeleton from "react-loading-skeleton";
import StatsHead from '../../../mainSection/CompetitionData/StatsContainer/StatTable/StatsHead'
const StatSkeleton = () => {
  return (
    <div className="h-full w-full ">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="sticky top-0 z-20 flex w-full items-center gap-2 bg-[#F1F5F9] p-1.5 text-slate-500 dark:bg-gray-700">
          <Skeleton width={80} height={50} />
          <Skeleton width={150} height={20} />
        </div>
        <StatsTableSkeleton />
      </div>
    </div>
  );
};

const StatsTableSkeleton = () => {
  return (
    <table className="h-auto w-full text-sm text-gray-500 dark:text-gray-400">
      <StatsHead/>
      <tbody>
        {Array.from({ length: 10 }).map((index) => {
          return <StatsRowSkeleton key={index} />;
        })}
      </tbody>
    </table>
  );
};



const StatsRowSkeleton = () => {
  return (
    <tr className="border-b bg-white text-center dark:border-gray-700 dark:bg-gray-800">
      <th
        scope="row"
        className="whitespace-nowrap px-6 py-4 text-left font-medium text-gray-900 dark:text-white"
      >
        <Skeleton width={50} />
      </th>
      <td className="px-6 py-4">
        <Skeleton width={50} />
      </td>
      <td className="px-6 py-4">
        <Skeleton width={50} />
      </td>
      <td className="px-6 py-4">
        <Skeleton width={50} />
      </td>
      <td className="flex justify-center px-6 py-4 hover:bg-slate-500">
        <Skeleton circle={true} width={50} height={50} />
      </td>
    </tr>
  );
};

export default StatSkeleton;
