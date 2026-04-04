import React, { useState } from 'react';
import { useCounter } from './hooks/simple/useCounter';
import { useLocalStorage } from './hooks/intermediate/useLocalStorage';
import { useForm } from './hooks/challenge/useForm';
import { useDebounce } from './hooks/advanced/useDebounce';

export const App = () => {
  const { count, increment, decrement } = useCounter(0);
  const [name, setName] = useLocalStorage('name', '');
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);
  const { values, handleChange, reset } = useForm({ email: '', password: '' });

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h2>useCounter</h2>
      <button onClick={decrement}>-</button>
      <span style={{ margin: '0 10px' }}>{count}</span>
      <button onClick={increment}>+</button>

      <h2>useLocalStorage</h2>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter name"
        style={{ marginRight: 10 }}
      />
      <span>Saved in localStorage: {name}</span>

      <h2>useDebounce</h2>
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search..."
        style={{ marginRight: 10 }}
      />
      <span>Debounced value: {debouncedSearch}</span>

      <h2>useForm</h2>
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
        style={{ display: 'block', margin: '5px 0' }}
      />
      <input
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="Password"
        style={{ display: 'block', margin: '5px 0' }}
      />
      <button onClick={reset} style={{ marginTop: 5 }}>Reset Form</button>
      <p>Email: {values.email}</p>
      <p>Password: {values.password}</p>
    </div>
  );
};