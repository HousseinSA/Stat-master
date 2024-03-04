import { format } from "date-fns";

const FormattedMatchTime = ({ matchTime }) => {
  const formattedDate = format(matchTime, "EEE MMM-dd"); // Adding 'EEE' for short day name

  return <span className="text-xs dark:text-white">{formattedDate}</span>;
};

export default FormattedMatchTime;
