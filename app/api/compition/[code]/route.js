export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const obj = Object.fromEntries(searchParams.entries())
  // console.log(obj)
  const res = await fetch(
    `http://api.football-data.org/v4/competitions/${obj.league}/matches?matchday=${obj.matchday}&season=${obj.season}`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": process.env.FOOTBALL_DATA_API_KEY,
        "Accept-Encoding": "",
      },
    }
  )

  const product = await res.json()

  return Response.json({ product })
}
