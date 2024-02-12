import { Inter } from "next/font/google"
import Head from "next/head"
import "./globals.css"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "StatMaster",
  description: "Amazing App created to show All teams info",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/StatMaster.svg" />
      <body
        className={`${inter.className}  dark:bg-[#0D0C0A]  transition duration-300 `}
      >
        {children}
      </body>
    </html>
  )
}
