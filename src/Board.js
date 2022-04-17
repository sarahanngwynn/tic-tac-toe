import React, { useState } from "react";
import Square from "./Square.js";
const initialBoard = [
  { id: 1, occupiedBy: "" },
  { id: 2, occupiedBy: "" },
  { id: 3, occupiedBy: "" },
  { id: 4, occupiedBy: "" },
  { id: 5, occupiedBy: "" },
  { id: 6, occupiedBy: "" },
  { id: 7, occupiedBy: "" },
  { id: 8, occupiedBy: "" },
  { id: 9, occupiedBy: "" },
];
export default function Board({ currentPlayer, setNextPlayer }) {
  const [board, setBoard] = useState(initialBoard);

  const updateBoard = (id, playerLetter) => {
    const newBoard = board.map((square) => {
      if (id === square.id) {
        return { id: square.id, occupiedBy: playerLetter };
      } else {
        return square;
      }
    });
    setBoard([newBoard, id, playerLetter]);
  };
  return (
    <div className="board">
      {initialBoard.map((item) => (
        <Square
          onUpdateBoard={updateBoard}
          currentPlayer={currentPlayer}
          setNextPlayer={setNextPlayer}
          key={item.id}
          squareItem={item}
        />
      ))}
    </div>
  );
}
