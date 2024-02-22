import Skeleton from "react-loading-skeleton"
const RowSkeleton = () => {
  return (
    <tr className="ml-3">
      <td className="px-4 py-3  bg-white">
        <div className="flex gap-4 items-center text-sm">
          <div className="relative mr-4 w-8 h-8 mb-5 rounded-full md:block">
            <Skeleton circle width={50} height={50} />
          </div>
          <div>
            <Skeleton width={80} height={20} />
          </div>
        </div>
      </td>
      <td className="px-4 py-3 text-ms font-semibold ">
        <Skeleton width={50} height={20} />
      </td>
      <td className="px-4 py-3 text-xs ">
        <Skeleton width={50} height={20} />
      </td>
      <td className="px-4 py-3 text-sm ">
        <Skeleton width={50} height={20} />
      </td>
      <td className="px-4 py-3 text-sm ">
        <Skeleton width={50} height={20} />
      </td>
      <td className="px-4 py-3 text-sm ">
        <Skeleton width={50} height={20} />
      </td>
      <td className="px-4 py-3 text-sm ">
        <Skeleton width={50} height={20} />
      </td>
      <td className="px-4 py-3 text-sm ">
        <Skeleton width={50} height={20} />
      </td>
      <td className="px-4 py-3 font-bold text-sm ">
        <Skeleton width={50} height={20} />
      </td>
      <td className="px-4 py-3 text-white font-semibold text-sm flex justify-center items-center gap-1"></td>
    </tr>
  )
}

export default RowSkeleton
