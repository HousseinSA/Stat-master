import Skeleton from "react-loading-skeleton";
const RowSkeleton = () => {
  return (
    <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
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
  );
};

export default RowSkeleton;
