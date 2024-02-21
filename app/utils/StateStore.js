import { create } from "zustand"
import { persist } from "zustand/middleware"
const store = (set) => ({
  leagueCode: "PL",
  leagueColor: null,
  getClickedLeauge: (clickedLeague) => set({ leagueCode: clickedLeague }),
  getClickedLeagueColor: (clickedLeagueColor) =>
    set({ leagueColor: clickedLeagueColor }),
  action: null,
  getClickedAction: (clickedAction) => set({ action: clickedAction }),
  theme: null,
  themeSwitcher: (themeStatus) => set({ theme: themeStatus }),
  season: 2023,
  setSeason: (selectedSeason) => set({ season: selectedSeason }),
  currentSeason: null,
  setCurrentSeason: (currSeason) =>
    set({
      currentSeason: currSeason,
    }),
  currentMatchday: null,
  setCurrentMatchday: (currMatchDay) => set({ currentMatchday: currMatchDay }),
  teamId: null,
  getTeamId: (clickTeamId) => set({ teamId: clickTeamId }),
  compList: {},
  setCompList: (list) => set({ compList: list }),
})

export const useLeagueStore = create(persist(store, { name: "store" }))
