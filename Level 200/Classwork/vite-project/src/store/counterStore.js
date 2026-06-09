import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCounterStore = create(
  persist(
    (set) => ({
      count: 0,
      increase: () => set((state) => ({ count: state.count + 1 })),
      decrease: () => set((state) => ({ count: state.count - 1 })),
      reset: () => set({ count: 0 }),
    }),
    { name: "counter-storage" }
  )
);
