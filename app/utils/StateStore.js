import { create, createSelector } from "zustand"

const store = (set) => ({
  leagueCode: "PL",
  leagueColor: "#3C0844",
  getClickedLeauge: (clickedLeague) => set({ leagueCode: clickedLeague }),
  getClickedLeagueColor: (clickedLeagueColor) =>
    set({ leagueColor: clickedLeagueColor }),
  action: "Standings",
  getClickedAction: (clickedAction) => set({ action: clickedAction }),
  theme: typeof window !== "undefined" ? localStorage.getItem("theme") : false,
  themeSwitcher: (themeStatus) => set({ theme: themeStatus }),
  season: null,
  setLeagueSeason: (selectedSeason) => set({ season: selectedSeason }),
  season: null,
  setLeagueSeason: (selectedSeason) => set({ season: selectedSeason }),
})



export const useLeagueStore = create(store)


