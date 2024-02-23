import Skeleton from "react-loading-skeleton";

const RowSkeleton = () => {
  return (
    <tr className="border-b bg-white text-center dark:border-gray-700 dark:bg-gray-800">
      <td className="whitespace-nowrap px-6 py-4 text-left font-medium text-gray-900 dark:text-white">
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
      <td className="flex justify-center px-6 py-4 hover:bg-slate-500">
        <Skeleton circle={true} width={50} height={50} />
      </td>
    </tr>
  );
};

export default RowSkeleton;
