const leagueColors = {
  PL: "#9e2baf",
  PD: "#FAEC40",
  CL: "#3838c4",
  BL1: "#D40914",
  SA: "#19C030",
  FL1: "#CFFB12",
  DED: "#2C3C82",
  PPL: "#FFD337",
};
export const getCompetitionColor = (leagueCode) => {
  const leagueColor = leagueColors[leagueCode];
  return leagueColor;
};
