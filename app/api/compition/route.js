import { NextResponse } from "next/server"
export async function GET() {
  const { code } = request.json()
  console.log(code)
  const res = await fetch(`https://data.mongodb-api.com/product/${code}`, {
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.FOOTBALL_DATA_API_KEY,
    },
  })
  const product = await res.json()

  return NextResponse({ product })
}
