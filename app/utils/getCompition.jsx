export async function getCompition(code) {
  const response = await fetch(
    `http://api.football-data.org/v4/competitions/${code || "PL"}`,
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
