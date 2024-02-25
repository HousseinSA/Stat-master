// export async function GET(request) {
//   const { searchParams } = new URL(request.url)
//   const obj = Object.fromEntries(searchParams.entries())
//
//   const res = await fetch(
//     `http://api.football-data.org/v4/competitions/${obj.league}/standings?season=${obj.season}`,
//     {
//       headers: {
//         "Content-Type": "application/json",
//         "X-Auth-Token": process.env.FOOTBALL_DATA_API_KEY,
//         "Accept-Encoding": "",
//       },
//     }
//   )

//   const leaugeData = await res.json()

//   return Response.json({ leaugeData })
// }
