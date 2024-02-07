import { create } from "zustand"

export const useClickLeagueStore = create((set) => ({
  item: "PL",
  itemColor: "#3C0844",
  getClickedItem: (clickedItem) => set({ item: clickedItem }),
  getClickItemColor: (clickedItemColor) => set({ itemColor: clickedItemColor }),
}))

export const useClickedActionStore = create((set) => ({
  item: "Standings",
  getClickedItem: (clickedItem) => set({ item: clickedItem }),
}))

export const useThemeSwitch = create((set) => ({
  theme: typeof window !== "undefined" ? localStorage.getItem("theme") : false,
  themeSwitcher: (themeStatus) => set({ theme: themeStatus }),
}))
