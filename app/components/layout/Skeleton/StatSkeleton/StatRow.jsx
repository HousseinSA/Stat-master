import Skeleton from "react-loading-skeleton"
const StatRow = () => {
  return (
    <tr className="w-full flex  h-full">
      <td className="px-4 py-3 text-sm font-semibold ">
        <Skeleton height={20} width={20} />
      </td>
      <td className="px-4 py-3 font-semibold text-md ">
        <Skeleton height={20} width={100} />
      </td>
      <td className="px-4 py-3 font-semibold text-md ">
        <Skeleton height={20} width={40} />
      </td>
      <td className="px-4 font-semibold py-3 text-md ">
        <Skeleton height={20} width={40} />
      </td>
      <td className="px-4 py-3 font-semibold text-md ">
        <Skeleton height={20} width={40} />
      </td>
      <td className="px-4 py-3  text-sm ">
        <Skeleton circle={true} height={50} width={50} />
      </td>
    </tr>
  )
}

export default StatRow
