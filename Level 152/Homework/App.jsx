// 1)gansxvaveba propsa da states shoris:
// props gamoikeneba rom informacia gadasces parent componentidan choild components.
// state gamoikeneba rom sheinaxos da martos infromacia componentis shignit da msii cvlileba shesadzlebelia

// 2) props aris mxolod wasakitixi informacia radganac child componentis informacia ar unda sheicvalos
// es kvelaferi modis parent componentidan da es itovebs informaciis wkaros 

import React from "react";

// 3) Title component
function Title({ title }) {
  return <h1>{title}</h1>;
}

// 4) Profile component
function Profile({ username, country }) {
  return <p>User: {username} from {country}</p>;
}

// 5) Price component
function Price({ amount }) {
  return <h2>{amount + 10}</h2>;
}

function App() {
  return (
    <div>
      <Title title="Welcome to React" />

      <Profile username="Nika" country="Georgia" />

      <Price amount={20} />
    </div>
  );
}

export default App;
