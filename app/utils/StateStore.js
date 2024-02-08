import { create } from "zustand"

export const useClickLeagueStore = create((set) => ({
  leagueCode: "PL",
  leagueColor: "#3C0844",
  getClickedLeauge: (clickedLeague) => set({ leagueCode: clickedLeague }),
  getClickedLeagueColor: (clickedLeagueColor) =>
    set({ leagueColor: clickedLeagueColor }),
}))

export const useClickedActionStore = create((set) => ({
  action: "Standings",
  getClickedAction: (clickedAction) => set({ action: clickedAction }),
}))

export const useThemeSwitch = create((set) => ({
  theme: typeof window !== "undefined" ? localStorage.getItem("theme") : false,
  themeSwitcher: (themeStatus) => set({ theme: themeStatus }),
}))

export const useCurrentMatchDate = create((set) => ({
  matchDate: null,
  getCurrentMatchDate: (currMatchDate) => set({ matchDate: currMatchDate }),
}))
