import React from "react";
import Skeleton from "react-loading-skeleton";

const MatchesSkeleton = () => {
  return (
    <div className="overflow-y-scroll">
      <div className="sticky left-0 top-0 z-50 flex items-center gap-3 bg-[#F1F5F9] dark:bg-gray-700">
        <Skeleton width={50} height={30} className="mx-4 my-2" />
        <Skeleton width={150} height={20} />
      </div>
      <div>
        <MatchesTableSkeleton />
        <MatchesTableSkeleton />
        <MatchesTableSkeleton />
      </div>
    </div>
  );
};

const MatchesTableSkeleton = () => {
  return (
    <>
      <h1 className="my-3 p-3 font-semibold">
        <Skeleton width={100} height={20} />
      </h1>
      <div className="grid grid-cols-1 gap-4 p-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <MatchRowSkeleton />
        <MatchRowSkeleton />
        <MatchRowSkeleton />
      </div>
    </>
  );
};

const MatchRowSkeleton = () => {
  return (
    <div className="flex h-full w-full flex-1">
      <div className="flex h-full w-full flex-col justify-center rounded-md bg-[#F1F5F9] dark:bg-gray-800">
        <Skeleton width={50} height={50} />
        <div className="flex flex-col items-center justify-center font-semibold">
          <div className="flex items-center gap-2">
            <span>
              <Skeleton width={50} height={20} />
            </span>
            <span>:</span>
            <span>
              <Skeleton width={50} height={20} />
            </span>
          </div>
          <Skeleton width={50} height={20} />
          <Skeleton width={50} height={20} />
        </div>
        <Skeleton width={50} height={50} />
      </div>
    </div>
  );
};

export default MatchesSkeleton;
