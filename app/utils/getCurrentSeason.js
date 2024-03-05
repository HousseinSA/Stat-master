export const getCurrentSeason = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
  const currentYear = currentDate.getFullYear();

  // Define the start and end months of the season
  const startMonth = 8; // August

  let seasonYear = currentYear;

  // If the current month is before August (8), consider the previous year
  if (currentMonth < startMonth) {
    seasonYear = currentYear - 1;
  }
  return seasonYear;
};
