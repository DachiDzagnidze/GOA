import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThemeStore = create(
  persist(
    (set) => ({
      theme: "light",
      toggleTheme: () =>
        set((s) => ({
          theme: s.theme === "light" ? "dark" : "light"
        }))
    }),
    { name: "theme" }
  )
);