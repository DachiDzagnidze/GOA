import React, { createContext, useContext, useReducer, useEffect } from "react";
import { v4 as uuidv4 } from "uuid"; // We might need to install uuid or just use Date.now() if dependencies are restricted. I'll use Date.now() + random to be safe without installing deps.

const TodoContext = createContext();

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  filter: "all",
  isLoading: false,
  error: null,
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now().toString(36) + Math.random().toString(36).substr(2),
            text: action.payload.text,
            category: action.payload.category,
            completed: false,
          },
        ],
        isLoading: false,
        error: null,
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "CLEAR_TODOS":
      return {
        ...state,
        todos: [],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo,
        ),
      };
    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo,
        ),
      };
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Sync with localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  // Actions
  const addTodo = (text, category) => {
    if (!text.trim()) {
      dispatch({ type: "SET_ERROR", payload: "Todo text cannot be empty!" });
      return;
    }

    dispatch({ type: "SET_LOADING", payload: true });

    // Simulate async operation for "loading state" requirement
    setTimeout(() => {
      dispatch({ type: "ADD_TODO", payload: { text, category } });
    }, 500); // 0.5s delay to show loading
  };

  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const clearTodos = () => {
    dispatch({ type: "CLEAR_TODOS" });
  };

  const toggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const editTodo = (id, newText) => {
    dispatch({ type: "EDIT_TODO", payload: { id, text: newText } });
  };

  const setFilter = (filter) => {
    dispatch({ type: "SET_FILTER", payload: filter });
  };

  // Selectors / Computed
  const filteredTodos = state.todos.filter((todo) => {
    if (state.filter === "completed") return todo.completed;
    if (state.filter === "uncompleted") return !todo.completed;
    return true;
  });

  const todoCount = state.todos.length;
  const completedCount = state.todos.filter((t) => t.completed).length;

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        filteredTodos,
        filter: state.filter,
        isLoading: state.isLoading,
        error: state.error,
        todoCount,
        completedCount,
        addTodo,
        deleteTodo,
        clearTodos,
        toggleTodo,
        editTodo,
        setFilter,
        dispatch, // exposed just in case, but wrappers above are better
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};
