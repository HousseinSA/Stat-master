import { redirect } from "next/navigation"
import Layout from "./components/layout/Layout"
import CompitionContent from "./components/mainSection/CompitionData/CompitionContent"
const Page = () => {
  redirect("/compition/PL/standings")
  return (
    <Layout>
      <CompitionContent />
    </Layout>
  )
}

export default Page
