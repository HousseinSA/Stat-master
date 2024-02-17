import { create } from "zustand"
import { persist } from "zustand/middleware"
const store = (set) => ({
  leagueCode: "PL",
  leagueColor: null,
  leagueId: "2021",
  getClickedLeagueId: (clickId) => set({ leagueId: clickId }),
  getClickedLeauge: (clickedLeague) => set({ leagueCode: clickedLeague }),
  getClickedLeagueColor: (clickedLeagueColor) =>
    set({ leagueColor: clickedLeagueColor }),
  action: "standings",
  getClickedAction: (clickedAction) => set({ action: clickedAction }),
  theme: null,
  themeSwitcher: (themeStatus) => set({ theme: themeStatus }),
  season: 2023,
  setSeason: (selectedSeason) => set({ season: selectedSeason }),
  currentSeason: 2023,
  setCurrentSeason: (currSeason) =>
    set({
      currentSeason: currSeason,
    }),
  currentMatchday: null,
  setCurrentMatchday: (currMatchDay) => set({ currentMatchday: currMatchDay }),
  teamId: null,
  getTeamId: (clickTeamId) => set({ teamId: clickTeamId }),
})

export const useLeagueStore = create(store, { name: "store" })
