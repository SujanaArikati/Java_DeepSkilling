
import React from 'react';

function IndianPlayers() {
  let oddTeam = ["Virat", "Rahul", "Pant", "Hardik", "Siraj"];
  let evenTeam = ["Rohit", "Gill", "Jadeja", "Bumrah", "Kuldeep"];

  // Destructuring
  let [odd1, odd2, ...restOdd] = oddTeam;
  let [even1, even2, ...restEven] = evenTeam;

  // Merging using spread
  let T20players = ["Virat", "Rohit"];
  let RanjiTrophy = ["Pujara", "Rahane"];
  let mergedPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        <li>{odd1}</li>
        <li>{odd2}</li>
        {restOdd.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        <li>{even1}</li>
        <li>{even2}</li>
        {restEven.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>List of Indian Players Merged (T20 + Ranji)</h2>
      <ul>
        {mergedPlayers.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  );
}

export default IndianPlayers;
