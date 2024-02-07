import { create } from "zustand"

export const useClickLeagueStore = create((set) => ({
  item: "PL",
  getClickedItem: (clickedItem) => set({ item: clickedItem }),
}))

export const useClickedActionStore = create((set) => ({
  item: "Standings",
  getClickedItem: (clickedItem) => set({ item: clickedItem }),
}))
