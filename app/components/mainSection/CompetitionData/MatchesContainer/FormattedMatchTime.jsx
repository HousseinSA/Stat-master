import { format } from "date-fns";

const FormattedMatchTime = ({ matchTime }) => {
  const formattedDate = format(matchTime, "EEE MMM-dd"); // Adding 'EEE' for short day name
  const formattedTime = format(matchTime, "hh:mm a"); // Adding 'hh:mm a' for hours, minutes, and am/pm

  return (
    <div className="text-xs dark:text-white">
      <div>{formattedDate}</div>
      <div>{formattedTime}</div>
    </div>
  );
};

export default FormattedMatchTime;
