import TeamStateContainer from "../LeagueContainer/TeamStateContainer"

const UclStandings = ({ season }) => {
  const ucl_season = season.standings
  const ucl_tables = []
  ucl_season.map((ucl) => {
    ucl_tables.push(...ucl.table)
  })
  // console.log(ucl_season)
  return (
    <>
      {ucl_tables.map((ucl_table, index) => {
        return (
          <div className="background-red-500 my-5" key={index}>
            <TeamStateContainer teamState={ucl_table} />
          </div>
        )
      })}
    </>
  )
}

export default UclStandings
