import HeadSkeleton from "./HeadSkeleton";
import RowSkeleton from "./RowSkeleton";
const TableSkeleton = () => {
  <div className="overflow-x-auto overflow-y-auto sm:overflow-x-scroll">
    <table className="w-full">
      <HeadSkeleton />
      <tbody>
        {[1, 2, 3].map((index) => (
          <RowSkeleton key={index} />
        ))}
      </tbody>
    </table>
  </div>;
};

export default TableSkeleton;
