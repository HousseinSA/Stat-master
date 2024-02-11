import CompitionContent from "../../components/mainSection/CompitionData/CompitionContent"
import Layout from "../../components/layout/Layout"
import { getCompitionStandings } from "../../utils/allDataFetchingFunctions"

const CompitionPage = async ({ params: { code } }) => {
  const compitionData = await getCompitionStandings(code)
  return (
    <Layout>
      <CompitionContent compitionData={compitionData} />
    </Layout>
  )
}

export default CompitionPage
