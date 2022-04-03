import React from "react";
import Square from "./Square.js";
const initialBoard = [
  { id: 1, occupiedBy: "r" },
  { id: 2, occupiedBy: "t" },
  { id: 3, occupiedBy: "u" },
  { id: 4, occupiedBy: "s" },
  { id: 5, occupiedBy: "q" },
  { id: 6, occupiedBy: "i" },
  { id: 7, occupiedBy: "g" },
  { id: 8, occupiedBy: "l" },
  { id: 9, occupiedBy: "k" },
];
export default function Board() {
  return (
    <div className="board">
      {initialBoard.map((item) => (
        <Square Key={item.id} squareItem={item} />
      ))}
    </div>
  );
}
