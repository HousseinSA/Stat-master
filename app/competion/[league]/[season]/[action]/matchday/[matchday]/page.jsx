import React from "react"
import Layout from "../../../../../../components/layout/Layout"
import CompetionContent from "../../../../../../components/mainSection/CompetionData/CompetionContent"
import MatchesContainer from "../../../../../../components/mainSection/CompetionData/MatchesContainer/MatchesContainer"
import { getCompetionData } from "../../../../../../utils/allDataFetchingFunctions"

const page = async ({ params }) => {
  const { action, league, season, matchday } = params
  // each match day value
  const currentMatchday = matchday
  const nextMatchday = +matchday + 1
  const prevMatchday = matchday - 1
  // matchday current , next and previous

  const uclStages = ["LAST_16", "QUARTER_FINALS", "SEMI_FINALS"]
  const currentMatchesdata = getCompetionData(
    league,
    season,
    action,
    currentMatchday,
    uclStages[0]
  )
  const prevMatchesData = getCompetionData(
    league,
    season,
    action,
    prevMatchday,
    uclStages[1]
  )
  const nextMatchesData = getCompetionData(
    league,
    season,
    action,
    nextMatchday,
    uclStages[2]
  )
  // doing parrell fetching three matchdays
  const [currentMatches, prevMatches, nextMatches] = await Promise.all([
    currentMatchesdata,
    prevMatchesData,
    nextMatchesData,
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
