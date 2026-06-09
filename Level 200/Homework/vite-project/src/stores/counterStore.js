import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCounterStore = create(
  persist(
    (set) => ({
      count: 0,
      inc: () => set((s) => ({ count: s.count + 1 })),
      dec: () => set((s) => ({ count: s.count - 1 })),
      reset: () => set({ count: 0 })
    }),
    { name: "counter" }
  )
);