import CompitionContent from "@/app/components/CompitionContent"
import Layout from "@/app/components/Layout"

const compitionPage = async ({ params: { code } }) => {
//   const compitionContent = await fetch("/api/compition/route", {
//     method: "POST",
//     headers: { "content-type": "application/json" },
//     body: JSON.stringify({ code }),
//   })
//   console.log(compitionContent)
  return (
    <Layout>
      <CompitionContent />
    </Layout>
  )
}

export default compitionPage
