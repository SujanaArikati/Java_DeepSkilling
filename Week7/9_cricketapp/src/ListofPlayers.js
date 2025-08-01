import React from 'react';

function ListofPlayers() {
  let players = [
    { name: "Virat", score: 95 },
    { name: "Rohit", score: 68 },
    { name: "Gill", score: 45 },
    { name: "Rahul", score: 80 },
    { name: "Pant", score: 60 },
    { name: "Hardik", score: 88 },
    { name: "Jadeja", score: 55 },
    { name: "Bumrah", score: 30 },
    { name: "Siraj", score: 72 },
    { name: "Shami", score: 65 },
    { name: "Kuldeep", score: 91 }
  ];

  
  let lowScorers = players.filter(p => p.score < 70);

  return (
    <div>
      <h2>List of Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h2>Players with Score Below 70</h2>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;

