// compitionslist
export async function getCompetionList() {
  try {
    const response = await fetch(
      `http://api.football-data.org/v4/competitions?areas=2077`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": process.env.FOOTBALL_DATA_API_KEY,
          "Accept-Encoding": "",
        },
      }
    )
    if (!response.ok) {
      throw new Error("Failed to fetch Data")
    }
    return await response.json()
  } catch (error) {
    return { error: error.message }
  }
}

// compition standing
export async function getCompetionData(league, season, action) {
  const url = `http://api.football-data.org/v4/competitions/${league}/${action}${
    league === "CL" ? "?" : "?season=" + season
  }`
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": process.env.FOOTBALL_DATA_API_KEY,
        "Accept-Encoding": "",
      },
      next: { revalidate: 3600 },
    })
    if (!response.ok) {
      throw new Error("Failed to fetch Data")
    }
    return await response.json()
  } catch (error) {
    return { error: error.message } // Return error message
  }
}
