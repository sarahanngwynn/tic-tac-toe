import React, { useState } from "react";
import Board from "./Board.js";
import "./global.css";

export default function App() {
  const [currentPlayer, setNextPlayer] = useState({ player: 1, letter: "X" });

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Tic-Tac-Toe</h1>
      <p>
        {" "}
        Player: {currentPlayer.player} : {currentPlayer.letter}
      </p>
      <Board currentPlayer={currentPlayer} setNextPlayer={setNextPlayer} />
    </div>
  );
}
