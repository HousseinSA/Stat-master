import Skeleton from "react-loading-skeleton";
import HeadSkeleton from "./HeadSkeleton";
import RowSkeleton from "./RowSkeleton";
const StatSkeleton = () => {
  return (
    <div className="h-full w-full overflow-auto">
      <div className="flex flex-col items-center justify-center">
        <div className="sticky top-0 z-20 flex w-full items-center gap-2 bg-[#F1F5F9] p-1.5 text-slate-500 dark:bg-gray-700">
          {/* Skeleton for emblem */}
          <Skeleton width={80} height={50} />
          {/* Skeleton for name */}
          <Skeleton width={120} />
        </div>
        {/* Skeleton for StatsTable */}
        <table className="h-auto w-full text-sm text-gray-500 dark:text-gray-400">
          <HeadSkeleton />
          <tbody>
            {[...Array(10)].map((index) => (
              <RowSkeleton key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatSkeleton;
