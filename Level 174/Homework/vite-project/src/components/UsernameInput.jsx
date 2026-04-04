import useLocalStorage from "../hooks/useLocalStorage";

function UsernameInput() {
  const [username, setUsername] = useLocalStorage("username", "");

  return (
    <div>
      <h2>Username</h2>
      <input
        type="text"
        value={username}
        placeholder="Enter username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <p>Hello {username}</p>
    </div>
  );
}

export default UsernameInput;
