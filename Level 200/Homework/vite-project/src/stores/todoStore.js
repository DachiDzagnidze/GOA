import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTodoStore = create(
  persist(
    (set) => ({
      todos: [],
      add: (text) =>
        set((s) => ({
          todos: [...s.todos, { id: Date.now(), text }]
        })),
      remove: (id) =>
        set((s) => ({
          todos: s.todos.filter((t) => t.id !== id)
        }))
    }),
    { name: "todos" }
  )
);