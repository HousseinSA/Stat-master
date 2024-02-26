import React from "react";
import Skeleton from "react-loading-skeleton";
import TableHead from "../../table/TableHead";
const StandingsSkeleton = () => {
  return (
    <main className="h-full w-full overflow-auto">
      <div className="w-full">
        <TableContainerSkeleton />
      </div>
    </main>
  );
};

const TableContainerSkeleton = () => {
  return (
    <table className="w-full overflow-auto">
      <TableHead />
      <tbody>
        {Array.from({ length: 10 }).map((index) => {
          return <TableRowSkeleton key={index} />;
        })}
      </tbody>
    </table>
  );
};

const TableRowSkeleton = () => {
  return (
    <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
      <td className="item-hover sticky left-0 z-20 flex cursor-pointer items-center gap-1 whitespace-nowrap px-6 py-4 font-medium text-gray-900 shadow-sm hover:text-white dark:text-white">
        <Skeleton width={50} height={50} />
        <Skeleton width={60} />
      </td>
      {Array.from({ length: 9 }).map((index) => {
        return (
          <td key={index}>
            <Skeleton width={50} />
          </td>
        );
      })}
    </tr>
  );
};

export default StandingsSkeleton;
