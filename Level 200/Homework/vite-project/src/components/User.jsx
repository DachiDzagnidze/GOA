import { useUserStore } from "../stores/userStore";

export default function User() {
  const { username, setUsername, clear } = useUserStore();

  return (
    <div>
      <h3>User: {username}</h3>
      <input onChange={(e) => setUsername(e.target.value)} />
      <button onClick={clear}>Clear</button>
    </div>
  );
}