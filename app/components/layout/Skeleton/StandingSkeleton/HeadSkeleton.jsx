import Skeleton from "react-loading-skeleton";
const HeadSkeleton = () => {
  return (
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
  );
}

export default HeadSkeleton