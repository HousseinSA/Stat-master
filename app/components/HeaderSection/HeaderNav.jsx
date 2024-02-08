"use client"
import { useThemeSwitch } from "../../utils/StateStore"
import React, { useEffect } from "react"
import { RiMenu3Fill } from "react-icons/ri"
import { FaMoon, FaSun } from "react-icons/fa6"
const HeaderNav = () => {
  const { theme, themeSwitcher } = useThemeSwitch()

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleDarkModeChange = (event) => {
      themeSwitcher(event.matches)
    }
    const getThemeState = localStorage.getItem("theme")
    if (getThemeState) {
      themeSwitcher(getThemeState === "true")
    }
    darkModeMediaQuery.addEventListener("change", handleDarkModeChange)

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleDarkModeChange)
    }
  }, [themeSwitcher])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme)
    localStorage.setItem("theme", theme)
  }, [theme])
  return (
    <nav className="flex items-center gap-4">
      <div
        onClick={() => themeSwitcher(!theme)}
        className={`p-4 rounded-full cursor-pointer ${
          theme ? "dark:bg-white  dark:text-black" : "bg-[#001F3F]"
        } transition text-white duration-500`}
      >
        {theme ? (
          <FaMoon width={50} height={50} />
        ) : (
          <FaSun width={50} height={50} />
        )}
      </div>
      <div className="block cursor-pointer sm:hidden">
        <RiMenu3Fill size={50} color="#001F3F" />
      </div>
    </nav>
  )
}

export default HeaderNav
