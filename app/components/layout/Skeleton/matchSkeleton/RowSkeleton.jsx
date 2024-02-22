import Skeleton from "react-loading-skeleton";
const RowSkeleton = () => {
  return (
    <tr>
      <td className="px-4 py-3   hover:text-white item-hover sticky left-0 shadow-sm ">
        <div className="flex flex-col gap-3 justify-center items-center text-sm">
          <Skeleton circle width={32} height={32} />
          <Skeleton width={80} height={20} />
        </div>
      </td>
      <td className="px-4 py-3 text-center text-ms font-semibold ">
        <div className="flex flex-col">
          <Skeleton width={40} height={15} />
          <div className="flex items-center justify-center gap-2">
            <Skeleton width={20} height={10} />
            <span className="font-bold text-xl"></span>
            <Skeleton width={20} height={10} />
          </div>
          <Skeleton width={40} height={15} />
          <div className="flex items-center justify-center gap-2 mt-1">
            <Skeleton width={20} height={10} />
            <span className="font-bold text-sm"></span>
            <Skeleton width={20} height={10} />
          </div>
          <Skeleton width={100} height={10} />
        </div>
      </td>
      <td className="px-4 py-3  hover:text-white item-hover sticky left-0 shadow-sm ">
        <div className="flex flex-col gap-3 items-center justify-center text-sm">
          <Skeleton circle width={32} height={32} />
          <Skeleton width={80} height={20} />
        </div>
      </td>
    </tr>
  );
};

export default RowSkeleton;
