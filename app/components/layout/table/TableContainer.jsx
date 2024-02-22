import TableHead from "./TableHead";
const TableContainer = ({ children }) => {
  return (
    <table className="h-full w-full bg-white dark:bg-[#001F3F]">
      <TableHead />

      <tbody>{children}</tbody>
    </table>
  );
};

export default TableContainer;
