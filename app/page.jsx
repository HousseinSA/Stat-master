"use client"
import { redirect } from "next/navigation"
import CompitionContent from "./components/mainSection/CompitionData/CompitionContent"
import { useLeagueStore } from "./utils/StateStore"
const Page = () => {
  const { currentSeason } = useLeagueStore()
  redirect(`/compition/PL/${currentSeason}/standings`)
  return <CompitionContent />
}

export default Page
