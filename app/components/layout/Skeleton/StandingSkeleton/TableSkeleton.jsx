import RowSkeleton from "./RowSkeleton"
const TableSkeleton = () => {
  const skeletonRow = Array.from({ length: 6 })
  return (
    <table className="w-full h-full overflow-auto">
      <tbody className="ml-4">
        {skeletonRow.map((row) => {
          return <RowSkeleton key={row} />
        })}
      </tbody>
    </table>
  )
}

export default TableSkeleton
