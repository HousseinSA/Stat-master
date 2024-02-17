const BaseUrl = "http://api.football-data.org/v4/competitions"
export async function getCompetionList() {
  try {
    const response = await fetch(`${BaseUrl}?areas=2077`, {
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": process.env.FOOTBALL_DATA_API_KEY,
        "Accept-Encoding": "",
      },
    })
    if (!response.ok) {
      throw new Error("Failed to fetch Data")
    }
    return await response.json()
  } catch (error) {
    return { error: error.message }
  }
}

// compition standing
export async function getCompetionData(
  league,
  season,
  action,
  matchday,
  uclStages
) {
  const baseUrl = `${BaseUrl}/`
  const dynamicUrl = `${league}/${action}${
    league === "CL" ? "" : "?season=" + season
  }${matchday && league !== "CL" ? "&matchday=" + matchday : ""}`
  const uclMatchQuery =
    league === "CL" && action === "matches"
      ? `?season=${season}&stage=${uclStages}`
      : ""
  const finalUrl = baseUrl + dynamicUrl + uclMatchQuery
  console.log(finalUrl)
  try {
    const response = await fetch(finalUrl, {
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": process.env.FOOTBALL_DATA_API_KEY,
        "Accept-Encoding": "",
      },
      next: { revalidate: 1000 },
    })
    if (!response.ok) {
      throw new Error("Failed to fetch Data")
    }
    return await response.json()
  } catch (error) {
    return { error: error.message } // Return error message
  }
}
