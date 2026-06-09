import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set) => ({
      username: "",
      setUsername: (name) => set({ username: name }),
      clear: () => set({ username: "" })
    }),
    { name: "user" }
  )
);