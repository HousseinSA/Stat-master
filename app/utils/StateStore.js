import { create } from "zustand"
import { persist } from "zustand/middleware"
const store = (set) => ({
  leagueCode: null,
  leagueColor: null,
  getClickedLeauge: (clickedLeague) => set({ leagueCode: clickedLeague }),
  getClickedLeagueColor: (clickedLeagueColor) =>
    set({ leagueColor: clickedLeagueColor }),
  action: null,
  getClickedAction: (clickedAction) => set({ action: clickedAction }),
  theme: null,
  themeSwitcher: (themeStatus) => set({ theme: themeStatus }),
  season: null,
  setLeagueSeason: (selectedSeason) => set({ season: selectedSeason }),
})

export const useLeagueStore = create(persist(store, { name: "store" }))
