import CompitionContent from "@/app/components/mainSection/CompitionData/CompitionContent"
import Layout from "@/app/components/layout/Layout"
import { getCompition } from "@/app/utils/getCompition"

const CompitionPage = async ({ params: { code } }) => {
`  // const leagueData = await getCompition
  // console.log(leagueData)`
  return (
    <Layout>
      <CompitionContent />
    </Layout>
  )
}

export default CompitionPage
