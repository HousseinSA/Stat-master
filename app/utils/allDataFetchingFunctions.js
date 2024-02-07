// compitionslist
export async function getCompitionList() {
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
    throw new Error("Failed to fetch Data ")
  }
  return await response.json()
}

// compition standing

export async function getCompitionStandings(code) {
  const response = await fetch(
    `http://api.football-data.org/v4/competitions/${code || "PL"}/standings/`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": process.env.FOOTBALL_DATA_API_KEY,
        "Accept-Encoding": "",
      },
    }
  )
  if (!response.ok) {
    throw new Error("Failed to fetch Data ")
  }
  return await response.json()
}

// compition matches
