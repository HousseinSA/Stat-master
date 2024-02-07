import CompitionContent from "@/app/components/mainSection/CompitionData/CompitionContent"
import Layout from "@/app/components/layout/Layout"
import { getCompitionStandings } from "@/app/utils/allDataFetchingFunctions"

const CompitionPage = async ({ params: { code } }) => {
  const compitionData = await getCompitionStandings(code)
  return (
    <Layout>
      <CompitionContent compitionData={compitionData} />
    </Layout>
  )
}

export default CompitionPage
