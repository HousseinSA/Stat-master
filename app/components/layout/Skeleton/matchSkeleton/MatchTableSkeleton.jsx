import Skeleton from "react-loading-skeleton";
import RowSkeleton from "./RowSkeleton";
import React from "react";
const MatchTableSkeleton = () => {
  const skeletonRows = Array.from({ length: 3 });
  return (
    <>
      <div className="ml-4 mt-4 flex items-center gap-5">
        <Skeleton width={50} height={50} circle />
        <div className="h-8 w-20">
          <Skeleton height={20} />
        </div>
      </div>
      <table className="w-full">
        <tbody>
          {skeletonRows.map((row, index) => {
            return <RowSkeleton key={index} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default MatchTableSkeleton;
