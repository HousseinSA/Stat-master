import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getCurrentSeason } from "./getCurrentSeason";

// Check if localStorage is available
const localStorageAvailable = typeof localStorage !== "undefined";

// Get action from localStorage if available, else default to "standings"
const actionStore = localStorageAvailable
  ? JSON.parse(localStorage.getItem("store"))?.state?.action || "standings"
  : "standings";

const store = (set) => ({
  leagueCode: "PL",
  leagueColor: "#9e2baf",
  getClickedLeague: (clickedLeague) => set({ leagueCode: clickedLeague }),
  setClickedLeagueColor: (clickedLeagueColor) =>
    set({ leagueColor: clickedLeagueColor }),
  action: actionStore,
  setClickedAction: (clickedAction) => set({ action: clickedAction }),
  theme: null,
  selectedLeague: {},
  setSelectedLeague: (league) => set({ selectedLeague: league }),
  themeSwitcher: (themeStatus) => set({ theme: themeStatus }),
  season: getCurrentSeason(),
  setSeason: (selectedSeason) => set({ season: selectedSeason }),
  currentMatchday: null,
  setCurrentMatchday: (currMatchDay) => set({ currentMatchday: currMatchDay }),
  teamId: null,
  getTeamId: (clickTeamId) => set({ teamId: clickTeamId }),
  leagueList: [],
  setLeagueList: (list) => set({ leagueList: list }),
});

export const useLeagueStore = create(persist(store, { name: "store" }));
