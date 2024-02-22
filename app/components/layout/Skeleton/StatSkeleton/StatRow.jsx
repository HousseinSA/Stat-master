import Skeleton from "react-loading-skeleton";

const StatRow = () => {
  return (
    <div className="w-full h-full flex justify-between items-center">
      <span className="px-4 py-3 text-sm font-semibold ">
        <Skeleton height={20} width={20} />
      </span>
      <span className="px-4 py-3 font-semibold text-md ">
        <Skeleton height={20} width={100} />
      </span>
      <span className="px-4 py-3 font-semibold text-md ">
        <Skeleton height={20} width={40} />
      </span>
      <span className="px-4 font-semibold py-3 text-md ">
        <Skeleton height={20} width={40} />
      </span>
      <span className="px-4 py-3 font-semibold text-md ">
        <Skeleton height={20} width={40} />
      </span>
      <span className="px-4 py-3 text-sm ">
        <Skeleton circle={true} height={50} width={50} />
      </span>
    </div>
  );
};

export default StatRow;
