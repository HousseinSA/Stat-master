const baseUrl = "http://api.football-data.org/v4/competitions";
const teamBaseUrl = "http://api.football-data.org/v4";

// Reusable fetch function with error handling
async function fetchData(url) {
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": process.env.FOOTBALL_DATA_API_KEY,
        "Accept-Encoding": "",
      },
      next: { revalidate: 1000 },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch Data");
    }
    return await response.json();
  } catch (error) {
    return { error: error.message }; // Return error message
  }
}

// Fetch competition list
export async function getCompetitionsList() {
  const competitionListUrl = `${baseUrl}?areas=2077`;
  return await fetchData(competitionListUrl);
}

// Fetch competition data
export async function getCompetitionData(
  league,
  season,
  action,
  matchday,
  uclStages,
) {
  const stats = `${league}/scorers`;
  const dynamicPart =
    action === "stats"
      ? stats
      : `${league}/${action}${league !== "CL" ? `?season=${season}` : ""}${
          matchday && league !== "CL" ? `&matchday=${matchday}` : ""
        }`;

  const uclMatchQuery =
    league === "CL" && action === "matches"
      ? `?season=${season}&stage=${uclStages}`
      : "";
  const finalUrl = `${baseUrl}/${dynamicPart}${uclMatchQuery}`;
  return await fetchData(finalUrl);
}

// Fetch team data
export async function getTeamData(action, teamId) {
  const teamLink = `${teamBaseUrl}/${action}/${teamId}`;
  return await fetchData(teamLink);
}

// Fetch team matches
import { getMatchesDates } from "@/utils/getMatchesDates";
export async function getTeamMatches(action, teamId) {
  const dates = getMatchesDates();
  const { currentDate, dateTwoMonthsAhead } = dates;
  const teamMatchesLink = `${teamBaseUrl}/${action}/${teamId}/matches?dateFrom=${currentDate}&dateTo=${dateTwoMonthsAhead}`;
  return await fetchData(teamMatchesLink);
}
