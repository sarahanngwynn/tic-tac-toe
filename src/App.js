import React from "react";
import Board from "./Board.js";
import "./global.css";

export default function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Tic-Tac-Toe</h1>
      <Board />
    </div>
  );
}
