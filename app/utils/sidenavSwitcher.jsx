"use client"
import { useEffect, useState } from "react"
export const useSidenavSwitcher = () => {
  const [showSideNav, setShowSideNav] = useState(false)
  function switchSideNav() {
    setShowSideNav((prev) => !prev)
  }
  return { showSideNav, switchSideNav }
}
