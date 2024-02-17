import React from "react"
import Layout from "../../../../../../components/layout/Layout"
import CompetionContent from "../../../../../../components/mainSection/CompetionData/CompetionContent"
import MatchesContainer from "../../../../../../components/mainSection/CompetionData/MatchesContainer/MatchesContainer"
import { getCompetionData } from "../../../../../../utils/allDataFetchingFunctions"

const fetchMatchData = async (league, season, action, matchday, stage) => {
  return getCompetionData(league, season, action, matchday, stage)
}

const page = async ({ params }) => {
  const { action, league, season, matchday } = params
  const uclStages = ["LAST_16", "QUARTER_FINALS", "SEMI_FINALS"]

  // Fetching data for current, previous, and next matchdays in parallel
  const [currentMatches, prevMatches, nextMatches] = await Promise.all([
    fetchMatchData(league, season, action, matchday, uclStages[0]),
    fetchMatchData(league, season, action, matchday - 1, uclStages[1]),
    fetchMatchData(league, season, action, matchday + 1, uclStages[2]),
  ])

  return (
    <Layout>
      <CompetionContent>
        <MatchesContainer
          currentMatches={currentMatches}
          prevMatches={prevMatches}
          nextMatches={nextMatches}
        />
      </CompetionContent>
    </Layout>
  )
}

export default page
