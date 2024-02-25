const baseUrl = "http://api.football-data.org/v4/competitions";
const teamBaseUrl = "http://api.football-data.org/v4";
export async function getCompetitionsList() {
  const competitionList = `${baseUrl}?areas=2077`;
  const competitionListData = await fetchFunction(competitionList);
  return competitionListData;
}

// fetching function to prevent duplicate
async function fetchFunction(url) {
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

// compition standing
export async function getCompetitionData(
  league,
  season,
  action,
  matchday,
  uclStages,
) {
  // Constructing the dynamic part of the URL based on league, action, season, and matchday

  const stats = `${league}/scorers`;
  const dynamicPart =
    action === "stats"
      ? stats
      : `${league}/${action}${
          league !== "CL" ? `?season=${season}` : ""
        }${matchday && league !== "CL" ? `&matchday=${matchday}` : ""}`;

  // Constructing the query string for UEFA Champions League matches
  const uclMatchQuery =
    league === "CL" && action === "matches"
      ? `?season=${season}&stage=${uclStages}`
      : "";
  // Combining the base URL, dynamic part, and UEFA Champions League match query
  const finalUrl = `${baseUrl}/${dynamicPart}${uclMatchQuery}`;
  const fetchData = await fetchFunction(finalUrl);
  return fetchData;
}

// team data

export async function getTeamData(action, teamId) {
  const teamLink = `${teamBaseUrl}/${action}/${teamId}`;
  const fetchTeamData = await fetchFunction(teamLink);
  return fetchTeamData;
}

export async function getTeamMatches(action, teamId) {
  const teamLink = `${teamBaseUrl}/${action}/${teamId}/matches`;

  const fetchTeamMatches = await fetchFunction(teamLink);
  return fetchTeamMatches;
}
