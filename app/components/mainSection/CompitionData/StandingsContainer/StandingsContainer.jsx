import TeamStateContainer from "./TeamStateContainer"

const StandingsContainer = ({ standingsData }) => {
  const table = standingsData?.standings[0]?.table
  return (
    <section className=" w-full h-full overflow-scroll  mx-auto  font-mono">
      <div className="w-full rounded-lg shadow-lg">
        <div className="w-full h-full ">
          <table className="w-full">
            <thead className="sticky top-0 z-10">
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="px-4 py-3">Club</th>
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
            <tbody className="bg-white">
              {table?.map((teamState, index) => (
                <TeamStateContainer key={index} teamState={teamState} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default StandingsContainer
