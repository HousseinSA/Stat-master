import { format, addMonths } from "date-fns";

export const getMatchesDates = () => {
  // Get the current date
  const currentDate = new Date();
  // Get the date two months ahead
  const dateTwoMonthsAhead = addMonths(currentDate, 2);

  // Format the current date and the date two months ahead in the desired format
  const formattedCurrentDate = format(currentDate, "yyyy-MM-dd");
  const formattedDateTwoMonthsAhead = format(dateTwoMonthsAhead, "yyyy-MM-dd");

  return {
    currentDate: formattedCurrentDate,
    dateTwoMonthsAhead: formattedDateTwoMonthsAhead,
  };
};
