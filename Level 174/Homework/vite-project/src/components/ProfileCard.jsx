import { useState } from "react";

function ProfileCard() {
  const [user, setUser] = useState({
    name: "Dachi",
    age: 16,
    city: "Tbilisi"
  });

  function updateCity() {
    setUser((prev) => ({
      ...prev,
      city: "Batumi"
    }));
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>

      <button onClick={updateCity}>Update City</button>
    </div>
  );
}

export default ProfileCard;