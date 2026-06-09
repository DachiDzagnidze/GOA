import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      add: (item) =>
        set((s) => ({ cart: [...s.cart, item] })),
      clear: () => set({ cart: [] })
    }),
    { name: "cart" }
  )
);