import { NextResponse } from "next/server"
export async function GET() {
  const res = await fetch(
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
  const compitionList = await res.json()

  return NextResponse({ product })
}
