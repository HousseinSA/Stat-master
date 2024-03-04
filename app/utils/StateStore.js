import { create } from "zustand";
import { persist } from "zustand/middleware";
const store = (set) => ({
  leagueCode: "PL",
  leagueColor: null,
  getClickedLeague: (clickedLeague) => set({ leagueCode: clickedLeague }),
  setClickedLeagueColor: (clickedLeagueColor) =>
    set({ leagueColor: clickedLeagueColor }),
  action: getActionStore() || "standings",
  setClickedAction: (clickedAction) => set({ action: clickedAction }),
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
  leagueList: [],
  setLeagueList: (list) => set({ leagueList: list }),
});

export const useLeagueStore = create(store, { name: "store" });

function getActionStore() {
  if (typeof window !== "undefined") {
    const actionState = JSON.parse(localStorage.getItem(store))?.state.action;
    return actionState;
  }
  // Default value if localStorage is not available
  return null;
}
