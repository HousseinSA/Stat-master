import { useLeagueStore } from "../../../../../utils/StateStore"
import TeamStandingContainer from "./TeamStandingContainer"

const LeagueStandingsContainer = ({ season }) => {
  const { leagueCode } = useLeagueStore()
  const ucl_tables = []
  season.standings.map((ucl) => {
    ucl_tables.push(...ucl.table)
  })
  const leagueTable = season?.standings[0].table
  const table = leagueCode === "CL" ? ucl_tables : leagueTable
  return (
    <section className=" w-full h-full overflow-auto font-mono">
      <div className="w-full rounded-lg shadow-lg">
        <div className="w-full h-full ">
          <table className="w-full">
            <thead className="sticky top-0 z-50">
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase">
                <th className="px-4 py-3  bg-gray-100 clear-start sticky z-20 left-0">
                  Club
                </th>
                <th className="px-4 py-3">MP</th>
                <th className="px-4 py-3">W</th>
                <th className="px-4 py-3">D</th>
                <th className="px-4 py-3">L</th>
                <th className="px-4 py-3">GF</th>
                <th className="px-4 py-3">GA</th>
                <th className="px-4 py-3">GD</th>
                <th className="px-4 py-3">PTS</th>
              </tr>
            </thead>
            <tbody>
              {table?.map((teamState, index) => (
                <TeamStandingContainer key={index} teamState={teamState} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default LeagueStandingsContainer
