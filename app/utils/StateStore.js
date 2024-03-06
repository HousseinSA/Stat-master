import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getCurrentSeason } from "./getCurrentSeason";

const getStore = () => {
  let store;
  const storage = localStorage.getItem("store");
  if (storage !== null) {
    store = JSON.parse(storage);
  }
  return store;
};
const localStore = getStore();

const store = (set) => ({
  leagueCode: localStore?.leagueCode || "PL",
  getClickedLeague: (clickedLeague) => set({ leagueCode: clickedLeague }),
  leagueColor: localStore?.leagueColor || "#9e2baf",
  setClickedLeagueColor: (clickedLeagueColor) =>
    set({ leagueColor: clickedLeagueColor }),
  action: localStore?.action || "standings",
  setClickedAction: (clickedAction) => set({ action: clickedAction }),
  theme: null,
  selectedLeague: {},
  setSelectedLeague: (league) => set({ selectedLeague: league }),
  themeSwitcher: (themeStatus) => set({ theme: themeStatus }),
  season: localStore?.season || getCurrentSeason(),
  setSeason: (selectedSeason) => set({ season: selectedSeason }),
  currentMatchday: localStore?.currentMatchday || null,
  setCurrentMatchday: (currMatchDay) => set({ currentMatchday: currMatchDay }),
  teamId: null,
  getTeamId: (clickTeamId) => set({ teamId: clickTeamId }),
  leagueList: localStorage?.leagueList || [],
  setLeagueList: (list) => set({ leagueList: list }),
});

export const useLeagueStore = create(persist(store, { name: "store" }));
