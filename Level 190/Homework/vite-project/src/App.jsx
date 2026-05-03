import React, { useState } from 'react';
import useThemeStore from './store/useThemeStore';
import useTodoStore from './store/useTodoStore';
import useUserStore from './store/useUserStore';
import './App.css';

function ThemeToggler() {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <div className="section theme-section">
      <h2>1. Theme Toggle</h2>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}

function TodoApp() {
  const { todos, addTodo, removeTodo, toggleTodo } = useTodoStore();
  const [todoInput, setTodoInput] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (todoInput.trim()) {
      addTodo(todoInput.trim());
      setTodoInput('');
    }
  };

  return (
    <div className="section todo-section">
      <h2>2 & 3. Persisted Todo List</h2>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          placeholder="New Task..."
        />
        <button type="submit">Add Task</button>
      </form>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            <button onClick={() => removeTodo(todo.id)} className="delete-btn">
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function UserAuth() {
  const { user, login, logout } = useUserStore();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      login({ name, email });
    }
  };

  return (
    <div className="section user-section">
      <h2>4 & 5. User Store & Form</h2>
      {user ? (
        <div className="user-info">
          <p>Welcome, <strong>{user.name}</strong>!</p>
          <p>Email: {user.email}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

function App() {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div className={`app-container ${theme}-theme`}>
      <header>
        <h1>Zustand Stores (Level 190)</h1>
      </header>
      <main className="content">
        <ThemeToggler />
        <TodoApp />
        <UserAuth />
      </main>
    </div>
  );
}

export default App;
