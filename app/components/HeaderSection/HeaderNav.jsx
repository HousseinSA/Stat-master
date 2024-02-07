"use client"
import { useSidenavSwitcher } from "@/app/utils/sidenavSwitcher"
import { useEffect, useState } from "react"
import { MdLightMode, MdDarkMode } from "react-icons/md"
import { RiMenu3Fill } from "react-icons/ri"

const HeaderNav = () => {
  const localTheme = localStorage.getItem("theme")
  const [isDarkMode, setIsDarkMode] = useState(localTheme === "true")

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleDarkModeChange = (event) => {
      setIsDarkMode(event.matches)
    }

    darkModeMediaQuery.addEventListener("change", handleDarkModeChange)
    // Set the initial theme based on local storage or user's system preference

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleDarkModeChange)
    }
  }, [])
  const { switchSideNav } = useSidenavSwitcher()
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode)
    localStorage.setItem("theme", isDarkMode)
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode)
  }

  return (
    <nav className="flex items-center gap-4">
      <div
        onClick={toggleTheme}
        className="p-4 rounded-full cursor-pointer dark:bg-white text-white dark:text-black bg-[#001F3F] transition duration-500"
      >
        {isDarkMode ? (
          <MdDarkMode width={50} height={50} />
        ) : (
          <MdLightMode width={50} height={50} />
        )}
      </div>
      <div className="block cursor-pointer sm:hidden" onClick={switchSideNav}>
        <RiMenu3Fill size={50} color="#001F3F" />
      </div>
    </nav>
  )
}

export default HeaderNav
