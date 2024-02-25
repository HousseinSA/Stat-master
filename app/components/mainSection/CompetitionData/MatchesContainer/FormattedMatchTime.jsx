import React from "react";

const FormattedMatchTime = ({ matchTime }) => {
  const date = new Date(matchTime);

  const formattedDateTime = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);

  return (
    <span className=" text-xs  dark:text-white">
      {formattedDateTime}
    </span>
  );
};

export default FormattedMatchTime;
